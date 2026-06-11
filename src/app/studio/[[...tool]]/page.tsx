"use client";

/**
 * Sanity Studio is mounted at /studio via this catch-all route.
 *
 * The Studio is a large, browser-only React app, so we load it through a
 * client-side dynamic import with `ssr: false` to keep it out of the server
 * bundle and avoid SSR of editor-only code.
 */

import dynamic from "next/dynamic";
import config from "@/sanity/sanity.config";

const NextStudio = dynamic(
  () => import("next-sanity/studio").then((mod) => mod.NextStudio),
  { ssr: false },
);

export default function StudioPage() {
  return <NextStudio config={config} />;
}
