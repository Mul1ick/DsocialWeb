export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author Name & Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logoAlt',
      title: 'Brand Name (Logo Fallback)',
      type: 'string',
    },
    // Add this new field for the actual logo image:
    {
      name: 'brandLogo',
      title: 'Brand Logo',
      type: 'image',
      description: 'Upload the actual logo image here (PNG or SVG preferred)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'image',
      title: 'Feed Screenshot',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }
  ],
}