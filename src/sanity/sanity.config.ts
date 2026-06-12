"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  basePath: "/studio",
  name: "zooprintablesai",
  title: "Zoo Printables AI",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      // Curated desk: Homepage Settings is a pinned singleton; Blog Posts is a
      // normal document list. The internal blockContent object type is never
      // shown as a top-level document list.
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Homepage Settings")
              .id("homepageSettings")
              .child(
                S.document()
                  .schemaType("homepageSettings")
                  .documentId("homepageSettings"),
              ),
            S.divider(),
            S.listItem()
              .title("Blog Posts")
              .child(S.documentTypeList("blog").title("Blog Posts")),
          ]),
    }),
    visionTool(),
  ],
});
