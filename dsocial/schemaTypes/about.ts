export default {
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    {
      name: 'eyebrow',
      title: 'Eyebrow Tag',
      type: 'string',
      initialValue: 'The Ethos',
    },
    {
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      initialValue: 'Who are we',
    },
    {
      name: 'paragraph1',
      title: 'Paragraph 1',
      type: 'text',
    },
    {
      name: 'paragraph2',
      title: 'Paragraph 2',
      type: 'text',
    },
    {
      name: 'paragraph3',
      title: 'Paragraph 3',
      type: 'text',
    },
    {
      name: 'founderImage',
      title: 'Founder Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'founderName',
      title: 'Founder Name',
      type: 'string',
      initialValue: 'Dhvani Dalal',
    },
    {
      name: 'founderTitle',
      title: 'Founder Title',
      type: 'string',
      initialValue: 'Founder, DSocial',
    },
    {
      name: 'teamImage',
      title: 'Team Photo',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'teamTitle',
      title: 'Team Title',
      type: 'string',
      initialValue: 'The Studio Team',
    },
    {
      name: 'teamSubtitle',
      title: 'Team Subtitle',
      type: 'string',
      initialValue: 'Creative & Digital',
    },
    {
      name: 'stats',
      title: 'Stats Grid',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'value', title: 'Value (e.g., 5+)', type: 'string' },
            { name: 'label', title: 'Label', type: 'string' },
          ],
        },
      ],
    },
  ],
}