import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllBlogPosts, urlFor } from "@/lib/blogQueries";

const SITE = "https://www.zooprintablesai.com";

export const metadata: Metadata = {
  title: "Blog | Zoo Printables AI",
  description:
    "Wildlife education tips, printable activity ideas, and conservation stories for parents, teachers, and homeschoolers from Zoo Printables AI.",
  alternates: { canonical: `${SITE}/blog` },
  openGraph: {
    url: `${SITE}/blog`,
    title: "Blog | Zoo Printables AI",
    description:
      "Wildlife education tips, printable activity ideas, and conservation stories for parents, teachers, and homeschoolers.",
    images: [{ url: `${SITE}/og-image.png`, width: 1200, height: 630 }],
  },
};

const FALLBACK_IMAGES = [
  "/images/site/gorilla-1.png",
  "/images/site/elephant.png",
  "/images/site/lion.png",
  "/images/site/giraffe.png",
  "/images/site/chimp.png",
  "/images/site/zebra.png",
  "/images/site/gorilla-2.png",
  "/images/site/gazelle.png",
  "/images/site/giraffe-2.png",
  "/images/site/kids.png",
];

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

function formatDate(date: string): string {
  // createDate is a YYYY-MM-DD string; parse as UTC to avoid TZ drift.
  return dateFormatter.format(new Date(`${date}T00:00:00Z`));
}

export default async function BlogIndexPage() {
  const posts = await getAllBlogPosts();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#2D6A4F] pt-32 pb-20 px-4 text-center">
          <Image
            src="/images/site/jungle.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30"
          />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#52B788]">
              From the Blog
            </p>
            <h1 className="mb-4 text-4xl font-black text-white sm:text-5xl">
              From the Blog
            </h1>
            <p className="mx-auto max-w-xl text-lg text-white/60">
              Wildlife education tips, printable activity ideas, and
              conservation stories for parents, teachers, and homeschoolers.
            </p>
          </div>
          {/* Wave divider into the listing section */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-px">
            <svg
              viewBox="0 0 1440 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="block w-full"
            >
              <path
                d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 30C840 40 960 50 1080 45C1200 40 1320 20 1380 10L1440 0V60H0Z"
                fill="#FEFAE0"
              />
            </svg>
          </div>
        </section>

        {/* Listing */}
        <section className="bg-[#FEFAE0] py-16 px-4">
          <div className="mx-auto max-w-6xl">
            {posts.length === 0 ? (
              <p className="text-center text-gray-500">
                No posts yet — check back soon for new articles.
              </p>
            ) : (
              <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post, index) => {
                  const imageSrc = post.featureImage?.asset
                    ? urlFor(post.featureImage).width(800).height(450).fit("crop").auto("format").url()
                    : FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
                  const imageAlt = post.featureImage?.alt ?? post.title;

                  return (
                  <li key={post._id}>
                    <a
                      href={`/blog/${post.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="relative aspect-video w-full overflow-hidden">
                        <Image
                          src={imageSrc}
                          alt={imageAlt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <time
                          dateTime={post.createDate}
                          className="mb-2 text-xs font-bold uppercase tracking-widest text-[#2D6A4F]"
                        >
                          {formatDate(post.createDate)}
                        </time>
                        <h2 className="mb-2 text-lg font-black leading-snug text-gray-900 transition-colors group-hover:text-[#2D6A4F]">
                          {post.title}
                        </h2>
                        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                          <span className="text-sm font-bold text-[#2D6A4F] group-hover:underline">
                            Read More →
                          </span>
                          <span className="text-xs text-gray-400">
                            {post.postedBy}
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
