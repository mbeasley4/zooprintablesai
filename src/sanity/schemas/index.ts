import type { SchemaTypeDefinition } from "sanity";
import { blockContent } from "./blockContent";
import { blog } from "./blog";

export const schemaTypes: SchemaTypeDefinition[] = [blockContent, blog];

export default schemaTypes;
