import { defineType, defineArrayMember } from "sanity";

/**
 * Portable Text configuration shared by every rich text field in the studio.
 * Keep this as the single source of truth for block content so that marks,
 * annotations, and inline objects stay consistent across all documents.
 */
export const blockContent = defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      // Paragraph + heading styles available to editors.
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        // Inline text decorations.
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Underline", value: "underline" },
        ],
        // Link-style annotations applied to a text selection.
        annotations: [
          {
            title: "External Link",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
              {
                title: "Open in new tab",
                name: "blank",
                type: "boolean",
                initialValue: false,
              },
            ],
          },
          {
            title: "Internal Link",
            name: "internalLink",
            type: "object",
            fields: [
              {
                title: "Slug",
                name: "slug",
                type: "string",
                description:
                  "Path or slug on this site, e.g. 'blog/my-post' or 'animals/gorilla'.",
                validation: (Rule) => Rule.required(),
              },
            ],
          },
        ],
      },
    }),
    // Inline image block embedded between paragraphs.
    defineArrayMember({
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
          description: "Describe the image for screen readers and SEO.",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "caption",
          type: "string",
          title: "Caption",
          description: "Optional caption shown beneath the image.",
        },
      ],
    }),
  ],
});

export default blockContent;
