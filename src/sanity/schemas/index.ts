import type { SchemaTypeDefinition } from "sanity";
import { blockContent } from "./blockContent";
import { blog } from "./blog";
import { homepageSettings } from "./homepageSettings";

export const schemaTypes: SchemaTypeDefinition[] = [
  blockContent,
  blog,
  homepageSettings,
];

export default schemaTypes;
