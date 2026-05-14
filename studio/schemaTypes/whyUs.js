export default {
  name: 'whyUs',
  title: 'Neden Biz',
  type: 'document',

  fields: [
    {
      name: 'icon',
      title: 'İkon',
      type: 'string',
      options: {
        list: [
          {title: '🎯 Hedef (Hassasiyet için)', value: 'target'},
          {title: '⚡ Şimşek (Hız için)', value: 'bolt'},
          {title: '🛡️ Kalkan (Garanti için)', value: 'shield'},
          {title: '🎧 Kulaklık (Destek için)', value: 'head'},
          {title: '🔧 Anahtar', value: 'wrench'},
          {title: '📦 Kutu', value: 'box'},
          {title: '🖥️ Ekran', value: 'remote'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleTR',
      title: 'Başlık (TR)',
      type: 'string',
      description: 'Örn: "Hassasiyet"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleEN',
      title: 'Başlık (EN)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'descriptionTR',
      title: 'Açıklama (TR)',
      type: 'text',
      rows: 2,
      description: 'Örn: "±0.01 mm tekrarlanabilirlik, sahada doğrulanmış."',
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'descriptionEN',
      title: 'Açıklama (EN)',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required().max(200),
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
      title: 'titleTR',
      subtitle: 'descriptionTR',
      icon: 'icon',
    },
    prepare({title, subtitle, icon}) {
      const iconMap = {
        target: '🎯', bolt: '⚡', shield: '🛡️', head: '🎧',
        wrench: '🔧', box: '📦', remote: '🖥️',
      }
      return {
        title: `${iconMap[icon] || '•'} ${title || 'İsimsiz'}`,
        subtitle: subtitle ? subtitle.substring(0, 60) + '...' : '',
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