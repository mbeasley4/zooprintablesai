import VideoFacade from "./VideoFacade";

interface VideoSectionProps {
  videoId: string;
  /** Heading shown above the embed (from Sanity homepageSettings). */
  videoTitle: string;
  /** Optional supporting line beneath the heading. */
  videoSubtitle?: string | null;
}

/**
 * Homepage "Watch How It Works" section. Server Component — it only lays out
 * the heading/subtitle from the CMS and hands the video off to the
 * click-to-load {@link VideoFacade} client component.
 */
export default function VideoSection({
  videoId,
  videoTitle,
  videoSubtitle,
}: VideoSectionProps) {
  return (
    <section id="video" className="py-24 px-4 bg-[#FEFAE0] bg-dots">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-label justify-center">See It In Action</p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            {videoTitle}
          </h2>
          {videoSubtitle ? (
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              {videoSubtitle}
            </p>
          ) : null}
        </div>

        {/* Responsive 16:9 facade — loads the real player only on click */}
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#D4C89A]/50">
          <VideoFacade videoId={videoId} videoTitle={videoTitle} />
        </div>
      </div>
    </section>
  );
}
