import { type SchemaTypeDefinition } from 'sanity'
import { landingSchema } from './schema/landingSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingSchema],
}
