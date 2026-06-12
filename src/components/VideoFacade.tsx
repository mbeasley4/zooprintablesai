"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoFacadeProps {
  videoId: string;
  /** Used to build an accessible label for the thumbnail and iframe. */
  videoTitle: string;
}

/**
 * Click-to-load YouTube facade. Renders a lightweight thumbnail + play button
 * until the user clicks, then swaps in the real privacy-friendly iframe. This
 * keeps the YouTube player (and its ~1MB of JS) off the critical path for the
 * homepage while preserving full playback on demand.
 */
export default function VideoFacade({ videoId, videoTitle }: VideoFacadeProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  if (isPlaying) {
    return (
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={`${videoTitle} — Zoo Printables AI video`}
        loading="eager"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      aria-label={`Play video: ${videoTitle}`}
      className="group absolute inset-0 h-full w-full cursor-pointer"
    >
      <Image
        src={thumbnailUrl}
        alt={`Video thumbnail: ${videoTitle}`}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 896px"
      />

      {/* Subtle dark overlay improves play-button contrast on light frames. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20"
      />

      {/* Play button: white circle + green triangle, pure Tailwind + inline SVG. */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-2xl transition-transform duration-200 group-hover:scale-110"
      >
        <svg
          viewBox="0 0 24 24"
          className="ml-1 h-8 w-8 fill-[#2D6A4F]"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </button>
  );
}
