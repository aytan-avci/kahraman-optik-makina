export default {
  name: 'stat',
  title: 'İstatistikler',
  type: 'document',

  fields: [
    {
      name: 'value',
      title: 'Değer',
      type: 'string',
      description: 'Örn: "15+", "200+", "±0.01mm", "7/24"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'labelTR',
      title: 'Etiket (TR)',
      type: 'string',
      description: 'Örn: "Yıl tecrübe", "Kurulu sistem", "Hassasiyet"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'labelEN',
      title: 'Etiket (EN)',
      type: 'string',
      description: 'Örn: "Years experience", "Installed systems"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'displayOrder',
      title: 'Sıralama',
      type: 'number',
      initialValue: 100,
      validation: (Rule) => Rule.required(),
    },
  ],

  preview: {
    select: {
      title: 'value',
      subtitle: 'labelTR',
    },
    prepare({title, subtitle}) {
      return {
        title: title || '?',
        subtitle: subtitle || 'Etiket eksik',
      }
    },
  },

  orderings: [
    {
      title: 'Sıralama (manuel)',
      name: 'displayOrderAsc',
      by: [{field: 'displayOrder', direction: 'asc'}],
    },
  ],
}