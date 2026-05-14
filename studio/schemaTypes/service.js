export default {
  name: 'service',
  title: 'Servisler',
  type: 'document',

  fields: [
    {
      name: 'icon',
      title: 'İkon',
      type: 'string',
      description: 'Hangi ikon gösterilecek?',
      options: {
        list: [
          {title: '🔧 Anahtar (Yerinde Servis için)', value: 'wrench'},
          {title: '📦 Kutu (Yedek Parça için)', value: 'box'},
          {title: '🖥️ Ekran (Uzaktan Destek için)', value: 'remote'},
          {title: '🎯 Hedef', value: 'target'},
          {title: '⚡ Hız', value: 'bolt'},
          {title: '🛡️ Kalkan', value: 'shield'},
          {title: '🎧 Kulaklık', value: 'head'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'titleTR',
      title: 'Başlık (TR)',
      type: 'string',
      description: 'Örn: "Yerinde Servis"',
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
      rows: 3,
      description: 'Örn: "Türkiye geneli teknik müdahale, 24 saat içinde sahaya intikal."',
      validation: (Rule) => Rule.required().max(300),
    },
    {
      name: 'descriptionEN',
      title: 'Açıklama (EN)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
    },
    {
      name: 'displayOrder',
      title: 'Sıralama',
      type: 'number',
      description: 'Küçük sayı önce görünür. Örn: 1, 2, 3',
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
        wrench: '🔧', box: '📦', remote: '🖥️',
        target: '🎯', bolt: '⚡', shield: '🛡️', head: '🎧',
      }
      return {
        title: `${iconMap[icon] || '•'} ${title || 'İsimsiz Servis'}`,
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