import { defineField, defineType } from "sanity";

export const buttonSchema = defineType({
  name: "button",
  title: "button",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "text",
      type: "string",
    }),
    defineField({
        name: 'link',
        title: 'button link',
        type: 'url',
    })
  ],
});
