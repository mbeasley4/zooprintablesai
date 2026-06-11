import { type SchemaTypeDefinition } from "sanity";
import { schemaTypes } from "../schemas";

// Canonical schema lives in `../schemas`. This legacy entry point re-exports
// it so any tooling that imports `schemaTypes/index` stays in sync.
export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
};
