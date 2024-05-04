import {defineArrayMember, defineField, defineType} from 'sanity'
import { FaHome } from "react-icons/fa"

export const FrontPage = defineType({
  name: 'frontPage',
  title: 'Home Page',
  type: 'document',
  icon: FaHome,
  groups: [
    {name: 'hero', title: 'Hero Section'},
    {name: 'form', title: 'Call To Action'},
  ],
  fields: [
    defineField({
      title: 'Hero Section',
      name: 'heroSection',
      type: 'heroBlock'
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'contentBlock',
          type: 'contentBlock'
        }),
        // defineArrayMember({
        //   name: 'heroBlock',
        //   type: 'heroBlock',
        // }),
        defineArrayMember({
          name: 'textWithImage',
          type: 'textWithImage',
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'cta',
          type: 'cta',
        })
      ]
    }),
  ]
})