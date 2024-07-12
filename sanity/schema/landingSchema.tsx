import { defineField, defineType, type SchemaTypeDefinition } from 'sanity'

export const landingSchema = defineType({
    name: 'landing',
    title: 'landing',
    type: 'document',
    fields: [
        defineField({
            name: 'logo',
            title: 'kannaLogo',
            type: 'image',  
        }),
        defineField({
            name: 'pageLinks',
            title: 'buttonLinks',
            type: 'array',
            of: [
                {
                    type: 'button'
                }
            ]
        })
    ]
})
