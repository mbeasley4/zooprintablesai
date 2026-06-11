import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PortableTextRenderer from "@/components/PortableTextRenderer";
import { getAllBlogSlugs, getBlogPost, urlFor } from "@/lib/blogQueries";

const SITE = "https://www.zooprintablesai.com";

type Props = { params: Promise<{ slug: string }> };

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

function formatDate(date: string): string {
  return dateFormatter.format(new Date(`${date}T00:00:00Z`));
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return {};

  const title = post.seoTitle ?? post.title;
  const description = post.metaDescription ?? post.excerpt;
  const ogImage = post.featureImage?.asset
    ? urlFor(post.featureImage).width(1200).height(630).fit("crop").url()
    : `${SITE}/og-image.png`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE}/blog/${slug}` },
    openGraph: {
      type: "article",
      url: `${SITE}/blog/${slug}`,
      title,
      description,
      publishedTime: post.createDate,
      authors: [post.postedBy],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.featureImage?.alt ?? post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const heroSrc = post.featureImage?.asset
    ? urlFor(post.featureImage).width(1600).height(640).fit("crop").auto("format").url()
    : null;

  const jsonLdImage = post.featureImage?.asset
    ? urlFor(post.featureImage).width(1200).height(630).fit("crop").url()
    : `${SITE}/og-image.png`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE}/blog/${slug}#blogposting`,
    headline: post.title,
    description: post.metaDescription ?? post.excerpt,
    image: jsonLdImage,
    datePublished: post.createDate,
    url: `${SITE}/blog/${slug}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/blog/${slug}` },
    author: { "@id": `${SITE}/#mike-beasley` },
    publisher: { "@id": `${SITE}/#organization` },
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main>
        {/* Hero image with title overlay */}
        <section className="relative h-64 w-full overflow-hidden bg-[#1B4332] sm:h-80 md:h-96">
          {heroSrc && (
            <Image
              src={heroSrc}
              alt={post.featureImage?.alt ?? post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-4 pb-6 sm:pb-8">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-2 text-2xl font-black leading-tight text-white drop-shadow sm:text-3xl md:text-4xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/75">
                <time dateTime={post.createDate} className="font-semibold">
                  {formatDate(post.createDate)}
                </time>
                <span aria-hidden="true">·</span>
                <span>By {post.postedBy}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="bg-[#FEFAE0] px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <div>
              <PortableTextRenderer value={post.content} />
            </div>

            <footer className="mt-12 border-t border-[#D4C89A] pt-6">
              <a
                href="/blog"
                className="text-sm font-bold text-[#2D6A4F] hover:underline"
              >
                ← Back to all posts
              </a>
            </footer>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
