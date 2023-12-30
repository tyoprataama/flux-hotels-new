import { defineField } from "sanity";

const user = {
  name: 'user',
  title: 'user',
  type: 'document',
  fields: [
    defineField({
      name: 'isAdmin',
      title: 'Is Admin',
      type: 'boolean',
      description: 'Check if the user admin or not',
      initialValue: false,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of the user',
      validation: Rule => Rule.required(),
      readOnly: true
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'url'
    }),
    defineField({
      name: 'password',
      type: 'string',
      hidden: true
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'text',
      description: 'Description about the user'
    })
  ]
}

export default user;