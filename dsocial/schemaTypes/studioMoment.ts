export default {
  name: 'studioMoment',
  title: 'Studio Moment (BTS)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Moment Title / Caption',
      type: 'string',
      description: 'Used for internal Studio identification',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Display Frame Type',
      type: 'string',
      options: {
        list: [
          { title: 'Standard Photo', value: 'photo' },
          { title: 'Polaroid Frame', value: 'polaroid' },
          { title: 'Reel', value: 'reel' },
        ],
        layout: 'radio',
      },
      initialValue: 'photo',
    },
    {
      name: 'order',
      title: 'Display Order (1-10)',
      type: 'number',
      description: 'Determines the grid placement (1-5 top row, 6-10 bottom row)',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
      media: 'image',
    },
  },
}