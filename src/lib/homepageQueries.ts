import { sanityClient } from "./sanityClient";

/** Revalidate published content at most once per hour (ISR). */
const REVALIDATE_SECONDS = 3600;

/**
 * Homepage settings singleton. All fields are non-optional here because the
 * homepage always renders with a value — callers fall back to
 * {@link HOMEPAGE_SETTINGS_DEFAULTS} when no document is published yet.
 */
export interface HomepageSettings {
  videoId: string;
  videoTitle: string;
  videoSubtitle: string | null;
  videoPublishedAt: string;
}

/**
 * Defaults used until the `homepageSettings` document is published in Studio.
 * Keeps the homepage rendering even on a fresh dataset.
 */
export const HOMEPAGE_SETTINGS_DEFAULTS: HomepageSettings = {
  videoId: "Stbp6-GYvcM",
  videoTitle: "See Zoo Printables AI in Action",
  videoSubtitle: null,
  videoPublishedAt: "2024-01-01",
};

/**
 * Fetch the homepage settings singleton. Returns published defaults when the
 * document does not exist yet so the homepage never breaks on a fresh dataset.
 */
export async function getHomepageSettings(): Promise<HomepageSettings> {
  const query = `*[_type == "homepageSettings"][0] {
    videoId,
    videoTitle,
    videoSubtitle,
    videoPublishedAt
  }`;

  const settings = await sanityClient.fetch<HomepageSettings | null>(
    query,
    {},
    { next: { revalidate: REVALIDATE_SECONDS } },
  );

  if (!settings?.videoId) {
    return HOMEPAGE_SETTINGS_DEFAULTS;
  }

  // Merge over defaults so a partially-filled document still renders safely.
  return {
    videoId: settings.videoId,
    videoTitle: settings.videoTitle || HOMEPAGE_SETTINGS_DEFAULTS.videoTitle,
    videoSubtitle: settings.videoSubtitle ?? null,
    videoPublishedAt:
      settings.videoPublishedAt || HOMEPAGE_SETTINGS_DEFAULTS.videoPublishedAt,
  };
}
