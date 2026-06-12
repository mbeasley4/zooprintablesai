import { defineType, defineField } from "sanity";

/**
 * Homepage settings — a singleton document. Only one of these should ever
 * exist; the Studio structure pins it to a single editable entry so editors
 * never create duplicates.
 *
 * Field labels and descriptions are written for non-technical editors who may
 * not know what a "YouTube video ID" is.
 */
export const homepageSettings = defineType({
  name: "homepageSettings",
  title: "Homepage Settings",
  type: "document",
  fieldsets: [
    {
      name: "video",
      title: "Homepage Video",
      description:
        "The video shown in the “Watch How It Works” section on the homepage.",
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: "videoId",
      title: "YouTube Video ID",
      type: "string",
      fieldset: "video",
      description:
        "The ID from the video's URL — the part after “v=”. For https://youtube.com/watch?v=Stbp6-GYvcM the ID is “Stbp6-GYvcM”.",
      validation: (Rule) =>
        Rule.required().error("A YouTube video ID is required."),
    }),
    defineField({
      name: "videoTitle",
      title: "Video Heading",
      type: "string",
      fieldset: "video",
      description: "The heading displayed above the video on the homepage.",
      validation: (Rule) =>
        Rule.required().error("A video heading is required."),
    }),
    defineField({
      name: "videoSubtitle",
      title: "Video Subheading",
      type: "string",
      fieldset: "video",
      description:
        "Optional supporting line shown beneath the heading. Leave blank to omit it.",
    }),
    defineField({
      name: "videoPublishedAt",
      title: "Video Publish Date",
      type: "date",
      fieldset: "video",
      description:
        "The date the video was uploaded to YouTube. Used for search-engine structured data.",
      options: { dateFormat: "YYYY-MM-DD" },
      validation: (Rule) =>
        Rule.required().error("A video publish date is required."),
    }),
  ],
  preview: {
    select: {
      title: "videoTitle",
      subtitle: "videoId",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Homepage Settings",
        subtitle: subtitle ? `Video: ${subtitle}` : undefined,
      };
    },
  },
});

export default homepageSettings;
