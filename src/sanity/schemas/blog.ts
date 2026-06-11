import { defineType, defineField } from "sanity";

/**
 * Blog post document. Field order, labels, and descriptions are tuned for
 * non-technical content editors. SEO overrides live in a collapsible fieldset
 * so the everyday writing flow stays uncluttered.
 */
export const blog = defineType({
  name: "blog",
  title: "Blog Post",
  type: "document",
  fieldsets: [
    {
      name: "seo",
      title: "SEO & Metadata",
      description:
        "Optional overrides for how this post appears in search results and social shares. Leave blank to use the title and excerpt above.",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "The headline shown on the post and in the blog listing.",
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(120)
          .error("Title must be between 10 and 120 characters."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The URL path for this post, generated from the title.",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9\s-]/g, "")
            .replace(/\s+/g, "-")
            .replace(/-+/g, "-")
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required().error("A slug is required."),
    }),
    defineField({
      name: "createDate",
      title: "Publish Date",
      type: "date",
      description: "The date this post should be dated as published.",
      options: { dateFormat: "YYYY-MM-DD" },
      validation: (Rule) => Rule.required().error("A publish date is required."),
    }),
    defineField({
      name: "featureImage",
      title: "Feature Image",
      type: "image",
      description: "The main image shown in the hero and on the blog listing.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "Describe the image for screen readers and SEO.",
          validation: (Rule) =>
            Rule.required().error("Alt text is required for accessibility."),
        }),
      ],
      validation: (Rule) =>
        Rule.required().error("A feature image is required."),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Short summary shown on blog listing (150–200 chars ideal).",
      validation: (Rule) =>
        Rule.required()
          .max(300)
          .error("Excerpt is required and must be 300 characters or fewer."),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "blockContent",
      description: "The body of the post.",
      validation: (Rule) => Rule.required().error("Post content is required."),
    }),
    defineField({
      name: "postedBy",
      title: "Posted By",
      type: "string",
      description: "Author byline shown on the post.",
      initialValue: "Mike Beasley",
      validation: (Rule) => Rule.required().error("An author is required."),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      fieldset: "seo",
      description:
        "Overrides post title for <title> and OG title (60–70 chars ideal).",
      validation: (Rule) =>
        Rule.max(70).warning("Keep SEO titles to 70 characters or fewer."),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 2,
      fieldset: "seo",
      description: "Shown in search results (150–160 chars ideal).",
      validation: (Rule) =>
        Rule.max(160).warning(
          "Keep meta descriptions to 160 characters or fewer.",
        ),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "createDate",
      media: "featureImage",
    },
  },
  orderings: [
    {
      title: "Publish Date, Newest First",
      name: "createDateDesc",
      by: [{ field: "createDate", direction: "desc" }],
    },
  ],
});

export default blog;
