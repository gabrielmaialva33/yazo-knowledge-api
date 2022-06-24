export default {
  type: 'object',
  properties: {
    title: { type: 'object' },
    sub_title: { type: 'object' },
    bio: { type: 'object' },
  },
  required: ['title', 'sub_title', 'bio'],
} as const
