export default {
  name: 'homePage',
  title: 'Ana Sayfa',
  type: 'document',

  groups: [
    {name: 'hero', title: '🦸 Hero Bölümü', default: true},
    {name: 'video', title: '🎬 Video Bölümü'},
  ],

  fields: [
    // ═══════════════════════════════════════════
    // 🦸 HERO BÖLÜMÜ
    // ═══════════════════════════════════════════
    {
      name: 'heroEyebrowTR',
      title: 'Üst Etiket (TR)',
      type: 'string',
      description: 'Hero başlığının üstündeki küçük yazı. Örn: "Optik üretim teknolojileri"',
      validation: (Rule) => Rule.required(),
      group: 'hero',
    },
    {
      name: 'heroEyebrowEN',
      title: 'Üst Etiket (EN)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'hero',
    },
    {
      name: 'heroTitle1TR',
      title: 'Başlık 1. Satır (TR)',
      type: 'string',
      description: 'Örn: "Optik cam işlemede"',
      validation: (Rule) => Rule.required(),
      group: 'hero',
    },
    {
      name: 'heroTitle1EN',
      title: 'Başlık 1. Satır (EN)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'hero',
    },
    {
      name: 'heroTitle2TR',
      title: 'Başlık 2. Satır (TR) — vurgulu',
      type: 'string',
      description: 'Bu satır cyan renkte gösterilir. Örn: "hassasiyetin mühendisliği"',
      validation: (Rule) => Rule.required(),
      group: 'hero',
    },
    {
      name: 'heroTitle2EN',
      title: 'Başlık 2. Satır (EN) — vurgulu',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'hero',
    },
    {
      name: 'heroSubtitleTR',
      title: 'Alt Metin (TR)',
      type: 'text',
      rows: 3,
      description: 'Başlığın altındaki açıklayıcı metin.',
      validation: (Rule) => Rule.required().max(300),
      group: 'hero',
    },
    {
      name: 'heroSubtitleEN',
      title: 'Alt Metin (EN)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(300),
      group: 'hero',
    },
    {
      name: 'heroCta1TR',
      title: '1. Buton Metni (TR)',
      type: 'string',
      description: 'Birincil (vurgulu) buton. Örn: "Demo Talep Et"',
      validation: (Rule) => Rule.required(),
      group: 'hero',
    },
    {
      name: 'heroCta1EN',
      title: '1. Buton Metni (EN)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'hero',
    },
    {
      name: 'heroCta2TR',
      title: '2. Buton Metni (TR)',
      type: 'string',
      description: 'İkincil buton. Örn: "Ürünleri Keşfet"',
      validation: (Rule) => Rule.required(),
      group: 'hero',
    },
    {
      name: 'heroCta2EN',
      title: '2. Buton Metni (EN)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'hero',
    },
    {
      name: 'heroNoteTR',
      title: 'Sertifika Notu (TR)',
      type: 'string',
      description: 'Butonların altındaki küçük not. Örn: "ISO 9001 sertifikalı üretim ortakları"',
      group: 'hero',
    },
    {
      name: 'heroNoteEN',
      title: 'Sertifika Notu (EN)',
      type: 'string',
      group: 'hero',
    },

    // ═══════════════════════════════════════════
    // 🎬 VIDEO BÖLÜMÜ
    // ═══════════════════════════════════════════
    {
      name: 'videoEyebrowTR',
      title: 'Üst Etiket (TR)',
      type: 'string',
      description: 'Örn: "Canlı demolar"',
      group: 'video',
    },
    {
      name: 'videoEyebrowEN',
      title: 'Üst Etiket (EN)',
      type: 'string',
      group: 'video',
    },
    {
      name: 'videoTitleTR',
      title: 'Başlık (TR)',
      type: 'string',
      description: 'Örn: "Hattınızda gerçek üretim hızında"',
      group: 'video',
    },
    {
      name: 'videoTitleEN',
      title: 'Başlık (EN)',
      type: 'string',
      group: 'video',
    },
    {
      name: 'videoSubtitleTR',
      title: 'Alt Açıklama (TR)',
      type: 'text',
      rows: 3,
      group: 'video',
    },
    {
      name: 'videoSubtitleEN',
      title: 'Alt Açıklama (EN)',
      type: 'text',
      rows: 3,
      group: 'video',
    },
    {
      name: 'videoBulletsTR',
      title: 'Madde İşaretleri (TR)',
      type: 'array',
      description: 'Video bölümünde gösterilen 3 madde.',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(5),
      group: 'video',
    },
    {
      name: 'videoBulletsEN',
      title: 'Madde İşaretleri (EN)',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(5),
      group: 'video',
    },
    {
      name: 'videoEmbedUrl',
      title: 'Demo Video URL',
      type: 'url',
      description: 'YouTube embed linki (opsiyonel).',
      group: 'video',
    },
  ],

  preview: {
    select: {title: 'heroTitle1TR'},
    prepare({title}) {
      return {
        title: '🏠 Ana Sayfa',
        subtitle: title || 'Henüz doldurulmadı',
      }
    },
  },
}