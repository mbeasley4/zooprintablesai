/**
 * One-off seed script: import blog posts from the staging JSON file into Sanity.
 *
 * Run with:
 *   npx tsx scripts/seed-blog.ts
 *
 * Reads credentials from .env.local via dotenv. Converts each post's markdown
 * `content` string into Portable Text (`blockContent`) and writes the document
 * with createOrReplace so reruns overwrite safely.
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { config as loadEnv } from "dotenv";
import { createClient } from "@sanity/client";

// --- Env -------------------------------------------------------------------

loadEnv({ path: resolve(process.cwd(), ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!projectId || !dataset || !token) {
  console.error(
    "Missing required env vars. Need NEXT_PUBLIC_SANITY_PROJECT_ID, " +
      "NEXT_PUBLIC_SANITY_DATASET, and SANITY_API_WRITE_TOKEN in .env.local.",
  );
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: "2024-01-01",
  useCdn: false,
});

// --- Types -----------------------------------------------------------------

interface StagingPost {
  title: string;
  slug: string;
  createDate: string;
  postedBy: string;
  excerpt: string;
  seoTitle: string;
  metaDescription: string;
  featureImageSearchTerms: string;
  content: string;
}

type SpanMark = "strong" | "em";

interface PortableSpan {
  _type: "span";
  _key: string;
  text: string;
  marks: SpanMark[];
}

interface PortableBlock {
  _type: "block";
  _key: string;
  style: string;
  markDefs: never[];
  children: PortableSpan[];
  listItem?: "bullet" | "number";
  level?: number;
}

// --- Helpers ---------------------------------------------------------------

const key = () => Math.random().toString(36).slice(2, 9);

/**
 * Parse inline markdown (**bold**, *italic*, _italic_) into an array of
 * Portable Text spans. Bold is matched before italic so `**x**` is never
 * mistaken for italic. Each resulting span carries its own _key.
 */
function parseInlineSpans(text: string): PortableSpan[] {
  const spans: PortableSpan[] = [];

  // Token regex: bold (**...**), then italic (*...* or _..._).
  const pattern = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(_([^_]+)_)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const push = (value: string, marks: SpanMark[]) => {
    if (value.length === 0) return;
    spans.push({ _type: "span", _key: key(), text: value, marks });
  };

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      push(text.slice(lastIndex, match.index), []);
    }

    if (match[2] !== undefined) {
      push(match[2], ["strong"]);
    } else if (match[4] !== undefined) {
      push(match[4], ["em"]);
    } else if (match[6] !== undefined) {
      push(match[6], ["em"]);
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    push(text.slice(lastIndex), []);
  }

  // A block must always have at least one span.
  if (spans.length === 0) {
    push(text, []);
  }

  return spans;
}

function makeBlock(
  style: string,
  text: string,
  listItem?: "bullet" | "number",
): PortableBlock {
  const block: PortableBlock = {
    _type: "block",
    _key: key(),
    style,
    markDefs: [],
    children: parseInlineSpans(text),
  };
  if (listItem) {
    block.listItem = listItem;
    block.level = 1;
  }
  return block;
}

/**
 * Convert a markdown string into an array of Portable Text blocks.
 * Pure string parsing, no external dependencies.
 */
function markdownToPortableText(markdown: string): PortableBlock[] {
  const blocks: PortableBlock[] = [];
  const lines = markdown.split("\n");

  for (const rawLine of lines) {
    const line = rawLine.trim();

    // Empty line: paragraph separator, nothing to emit.
    if (line === "") continue;

    // Headings (longest marker first).
    if (line.startsWith("#### ")) {
      blocks.push(makeBlock("h4", line.slice(5).trim()));
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push(makeBlock("h3", line.slice(4).trim()));
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push(makeBlock("h2", line.slice(3).trim()));
      continue;
    }
    if (line.startsWith("# ")) {
      // No h1 in our style set; treat as h2.
      blocks.push(makeBlock("h2", line.slice(2).trim()));
      continue;
    }

    // Blockquote.
    if (line.startsWith("> ")) {
      blocks.push(makeBlock("blockquote", line.slice(2).trim()));
      continue;
    }
    if (line === ">") {
      continue;
    }

    // Numbered list item: "1. text", "2) text", etc.
    const numbered = line.match(/^\d+[.)]\s+(.*)$/);
    if (numbered) {
      blocks.push(makeBlock("normal", numbered[1].trim(), "number"));
      continue;
    }

    // Bullet list item: "- text" or "* text".
    const bullet = line.match(/^[-*]\s+(.*)$/);
    if (bullet) {
      blocks.push(makeBlock("normal", bullet[1].trim(), "bullet"));
      continue;
    }

    // Default: normal paragraph.
    blocks.push(makeBlock("normal", line));
  }

  return blocks;
}

// --- Main ------------------------------------------------------------------

async function main() {
  const stagingPath = resolve(
    process.cwd(),
    ".claude/blog-posts-staging.json",
  );

  let posts: StagingPost[];
  try {
    posts = JSON.parse(readFileSync(stagingPath, "utf8"));
  } catch (err) {
    console.error(`Failed to read/parse staging file at ${stagingPath}:`, err);
    process.exit(1);
  }

  console.log(
    `Seeding ${posts.length} blog post(s) into project ${projectId} / dataset ${dataset}.\n`,
  );

  const results: { title: string; id?: string; ok: boolean; error?: string }[] =
    [];

  for (const post of posts) {
    const _id = `blog-${post.slug}`;
    try {
      const doc = {
        _id,
        _type: "blog",
        title: post.title,
        slug: { _type: "slug", current: post.slug },
        createDate: post.createDate,
        postedBy: post.postedBy,
        excerpt: post.excerpt,
        seoTitle: post.seoTitle,
        metaDescription: post.metaDescription,
        content: markdownToPortableText(post.content),
      };

      const created = await client.createOrReplace(doc);
      console.log(`  OK   ${post.slug}  ->  ${created._id}`);
      results.push({ title: post.title, id: created._id, ok: true });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(`  FAIL ${post.slug}  ->  ${message}`);
      results.push({ title: post.title, ok: false, error: message });
    }
  }

  const ok = results.filter((r) => r.ok);
  const failed = results.filter((r) => !r.ok);

  console.log("\n--- Summary ---------------------------------------------");
  console.log(`Created/updated: ${ok.length}/${results.length}`);
  for (const r of ok) {
    console.log(`  [OK]   ${r.id}  —  ${r.title}`);
  }
  if (failed.length) {
    console.log(`\nFailed: ${failed.length}`);
    for (const r of failed) {
      console.log(`  [FAIL] ${r.title}  —  ${r.error}`);
    }
  }

  console.log(
    "\nNote: the blog schema marks `featureImage` (and its alt text) as " +
      "required in Sanity Studio. These documents are imported without an " +
      "image asset, so Studio will flag them until an editor adds one. The " +
      "API write itself is unaffected.",
  );

  process.exit(failed.length ? 1 : 0);
}

main();
