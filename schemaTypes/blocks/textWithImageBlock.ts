import {defineField, defineType} from 'sanity'
import {InlineIcon} from '@sanity/icons'

export const TextWithImage = defineType({
  name: 'textWithImage',
  type: 'object',
  title: 'Text with Image',
  icon: InlineIcon,
  fields: [
    defineField({
      name: 'tagline',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'string',
    }),
    defineField({
      title: 'Switch Layout',
      name: 'switchLayout',
      type: 'boolean'
    }),
    defineField({
      name: 'content',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Image Alt Text',
        }),
      ],
    }),
    defineField({
      title: 'Display Button?',
      name: 'displayButton',
      type: 'boolean'
    }),
    defineField({
      title: 'Button',
      name: 'button',
      type: 'button',
      hidden: ({parent}) => !parent?.displayButton
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      image: 'image',
    },
    prepare({title, image}) {
      return {
        title: title || 'Untitled',
        subtitle: 'Text with Image',
        media: image || InlineIcon,
      }
    }
  }
})