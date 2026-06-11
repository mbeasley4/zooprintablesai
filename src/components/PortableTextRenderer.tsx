"use client";

import Image from "next/image";
import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "@portabletext/react";
import { urlFor, type SanityImage } from "@/lib/blogQueries";

/**
 * Inline image embedded in post body. Mirrors the `image` member defined in
 * `blockContent.ts` (required `alt`, optional `caption`).
 */
type InlineImageValue = SanityImage & {
  alt: string;
  caption?: string;
};

/**
 * External link annotation from `blockContent.ts`.
 */
type LinkValue = {
  href?: string;
  blank?: boolean;
};

/**
 * Internal link annotation from `blockContent.ts` — a site-relative slug.
 */
type InternalLinkValue = {
  slug?: string;
};

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: InlineImageValue }) => {
      const src = urlFor(value).width(1200).fit("max").auto("format").url();
      return (
        <figure className="my-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src={src}
              alt={value.alt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
          {value.caption ? (
            <figcaption className="mt-2 text-center text-sm text-gray-400">
              {value.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
  marks: {
    link: ({ value, children }) => {
      const { href, blank } = (value ?? {}) as LinkValue;
      if (!href) return <>{children}</>;
      return (
        <a
          href={href}
          {...(blank
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="text-[#2D6A4F] underline underline-offset-2 hover:text-[#1B4332] transition-colors"
        >
          {children}
        </a>
      );
    },
    internalLink: ({ value, children }) => {
      const { slug } = (value ?? {}) as InternalLinkValue;
      const href = slug ? `/${slug.replace(/^\/+/, "")}` : "#";
      return (
        <a
          href={href}
          className="text-[#2D6A4F] underline underline-offset-2 hover:text-[#1B4332] transition-colors"
        >
          {children}
        </a>
      );
    },
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => (
      <span className="underline underline-offset-2">{children}</span>
    ),
    code: ({ children }) => (
      <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-[0.9em] text-[#1B4332]">
        {children}
      </code>
    ),
  },
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-gray-700 text-lg leading-relaxed">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 mb-4 text-3xl font-black text-gray-900">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-3 text-2xl font-black text-gray-900">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 mb-3 text-xl font-bold text-gray-900">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-4 border-[#F4A261] bg-[#FEFAE0] py-4 pl-6 pr-4 italic text-gray-700">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-6 ml-6 list-disc space-y-2 text-gray-700 text-lg leading-relaxed marker:text-[#2D6A4F]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-6 ml-6 list-decimal space-y-2 text-gray-700 text-lg leading-relaxed marker:text-[#2D6A4F]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-1">{children}</li>,
    number: ({ children }) => <li className="pl-1">{children}</li>,
  },
};

export default function PortableTextRenderer({
  value,
}: {
  value: PortableTextBlock[];
}) {
  return <PortableText value={value} components={components} />;
}
