export default {
  name: 'siteSettings',
  title: 'Site Ayarları',
  type: 'document',

  groups: [
    {name: 'about', title: 'ℹ️ Hakkımızda', default: true},
    {name: 'contact', title: '📞 İletişim'},
    {name: 'footer', title: '🦶 Alt Bilgi'},
  ],

  fields: [
    // ═══════════════════════════════════════════
    // ℹ️ HAKKIMIZDA
    // ═══════════════════════════════════════════
    {
      name: 'aboutTitleTR',
      title: 'Bölüm Başlığı (TR)',
      type: 'string',
      description: 'Örn: "Hakkımızda"',
      group: 'about',
    },
    {
      name: 'aboutTitleEN',
      title: 'Bölüm Başlığı (EN)',
      type: 'string',
      group: 'about',
    },
    {
      name: 'aboutContentTR',
      title: 'İçerik (TR)',
      type: 'array',
      description: 'Şirket hakkında metin (her paragraf ayrı maddede).',
      of: [{type: 'block', styles: [{title: 'Normal', value: 'normal'}], lists: []}],
      group: 'about',
    },
    {
      name: 'aboutContentEN',
      title: 'İçerik (EN)',
      type: 'array',
      of: [{type: 'block', styles: [{title: 'Normal', value: 'normal'}], lists: []}],
      group: 'about',
    },

    // ═══════════════════════════════════════════
    // 📞 İLETİŞİM
    // ═══════════════════════════════════════════
    {
      name: 'phone',
      title: 'Telefon',
      type: 'string',
      description: 'Örn: "+90 532 123 4567"',
      validation: (Rule) => Rule.required(),
      group: 'contact',
    },
    {
      name: 'email',
      title: 'E-posta',
      type: 'string',
      description: 'Örn: "info@kahramanoptik.com"',
      validation: (Rule) => Rule.required().email(),
      group: 'contact',
    },
    {
      name: 'addressTR',
      title: 'Adres (TR)',
      type: 'text',
      rows: 3,
      group: 'contact',
    },
    {
      name: 'addressEN',
      title: 'Adres (EN)',
      type: 'text',
      rows: 3,
      group: 'contact',
    },
    {
      name: 'workingHoursTR',
      title: 'Çalışma Saatleri (TR)',
      type: 'string',
      description: 'Örn: "Pzt-Cum 08:30 - 18:00"',
      group: 'contact',
    },
    {
      name: 'workingHoursEN',
      title: 'Çalışma Saatleri (EN)',
      type: 'string',
      group: 'contact',
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Numarası',
      type: 'string',
      description: 'Örn: "905321234567" (başında + yok, sadece sayılar).',
      group: 'contact',
    },
    {
      name: 'mapEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: '⚠️ ÖNEMLİ: Sadece "https://www.google.com/maps/embed?..." formatında olmalı. Google Maps\'te konumu aç → Paylaş → "Bir harita yerleştir" → iframe kodundan src="" içindeki URL\'i kopyala (tam URL, sadece adres değil).',
      group: 'contact',
    },

    // ═══════════════════════════════════════════
    // 🦶 ALT BİLGİ (FOOTER)
    // ═══════════════════════════════════════════
    {
      name: 'companyName',
      title: 'Şirket Adı',
      type: 'string',
      description: 'Footer\'da görünür. Örn: "Kahraman Optik Makina San. Tic. Ltd. Şti."',
      initialValue: 'Kahraman Optik',
      group: 'footer',
    },
    {
      name: 'copyrightYear',
      title: 'Telif Hakkı Yılı',
      type: 'string',
      description: 'Örn: "2026"',
      initialValue: '2026',
      group: 'footer',
    },
    {
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      group: 'footer',
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      group: 'footer',
    },
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      group: 'footer',
    },
  ],

  preview: {
    prepare() {
      return {
        title: '⚙️ Site Ayarları',
        subtitle: 'İletişim, hakkımızda, sosyal medya',
      }
    },
  },
}