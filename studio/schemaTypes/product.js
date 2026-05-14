export default {
  name: 'product',
  title: 'Ürünler',
  type: 'document',

  // ─── Sekmeler (Tab'lar) ───
  groups: [
    {name: 'basic', title: '📝 Temel', default: true},
    {name: 'content', title: '🌐 Metinler (TR/EN)'},
    {name: 'specs', title: '🔧 Teknik Özellikler'},
    {name: 'price', title: '💰 Fiyat'},
    {name: 'media', title: '🖼️ Görseller'},
    {name: 'meta', title: '🎬 Ek Bilgiler'},
    {name: 'status', title: '🏷️ Durum'},
    {name: 'related', title: '🔗 İlgili Ürünler'},
  ],

  fields: [
    // ═══════════════════════════════════════════
    // 📝 TEMEL BİLGİLER
    // ═══════════════════════════════════════════
    {
      name: 'name',
      title: 'Ürün Adı',
      type: 'string',
      description: 'Örn: KO-CNC 500X',
      validation: (Rule) => Rule.required(),
      group: 'basic',
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Otomatik oluşur (örn: ko-cnc-500x). "Generate" butonuna bas.',
      options: {source: 'name', maxLength: 96},
      validation: (Rule) => Rule.required(),
      group: 'basic',
    },
    {
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: '🔪 CNC Kesim', value: 'cnc-kesim'},
          {title: '📏 Ölçüm Cihazı', value: 'olcum'},
          {title: '📦 Sarf Malzemeleri', value: 'sarf'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
      group: 'basic',
    },
    {
      name: 'displayOrder',
      title: 'Sıralama (küçükten büyüğe)',
      type: 'number',
      description: 'Düşük sayı önce görünür. Örn: 1, 2, 3...',
      initialValue: 100,
      group: 'basic',
    },

    // ═══════════════════════════════════════════
    // 🌐 METİNLER (TR/EN)
    // ═══════════════════════════════════════════
    {
      name: 'shortDescriptionTR',
      title: 'Kısa Açıklama (TR)',
      type: 'string',
      description: 'Ürün kartında görünür. Örn: "Yüksek hassasiyetli endüstriyel kesim."',
      validation: (Rule) => Rule.required().max(150),
      group: 'content',
    },
    {
      name: 'shortDescriptionEN',
      title: 'Kısa Açıklama (EN)',
      type: 'string',
      description: 'Short description for the product card.',
      validation: (Rule) => Rule.required().max(150),
      group: 'content',
    },
    {
      name: 'taglineTR',
      title: 'Slogan (TR)',
      type: 'string',
      description: 'Modal üst başlığı. Örn: "Endüstri 4.0 standartlarında çalışan referans modelimiz."',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'taglineEN',
      title: 'Slogan (EN)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'content',
    },
    {
      name: 'longDescriptionTR',
      title: 'Uzun Açıklama (TR)',
      type: 'array',
      description: 'Her paragrafı ayrı bir maddeye ekle. Genelde 2-3 paragraf.',
      of: [{type: 'block', styles: [{title: 'Normal', value: 'normal'}], lists: []}],
      validation: (Rule) => Rule.required().min(1),
      group: 'content',
    },
    {
      name: 'longDescriptionEN',
      title: 'Uzun Açıklama (EN)',
      type: 'array',
      of: [{type: 'block', styles: [{title: 'Normal', value: 'normal'}], lists: []}],
      validation: (Rule) => Rule.required().min(1),
      group: 'content',
    },

    // ═══════════════════════════════════════════
    // 🔧 TEKNİK ÖZELLİKLER
    // ═══════════════════════════════════════════
    {
      name: 'keySpecs',
      title: 'Vurgu Özellikleri (1-3 adet, opsiyonel)',
      type: 'array',
      description: 'Ürün kartında görünen mini etiketler. Genelde 3 adet. Örn: "±0.01mm", "500×500mm", "3.5kW". Sarf malzemelerinde olmayabilir, boş bırakabilirsin.',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.max(3),
      group: 'specs',
    },
    {
      name: 'techSpecsTR',
      title: 'Teknik Özellikler (TR)',
      type: 'array',
      description: 'Anahtar-değer çiftleri. Örn: Kesim Boyutu → 500 × 500 mm',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Etiket (TR)', type: 'string', validation: (Rule) => Rule.required()},
            {name: 'value', title: 'Değer', type: 'string', validation: (Rule) => Rule.required()},
          ],
          preview: {
            select: {title: 'label', subtitle: 'value'},
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
      group: 'specs',
    },
    {
      name: 'techSpecsEN',
      title: 'Teknik Özellikler (EN)',
      type: 'array',
      description: 'Aynı sırayı koru. Örn: Cutting Size → 500 × 500 mm',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'label', title: 'Etiket (EN)', type: 'string', validation: (Rule) => Rule.required()},
            {name: 'value', title: 'Değer', type: 'string', validation: (Rule) => Rule.required()},
          ],
          preview: {
            select: {title: 'label', subtitle: 'value'},
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
      group: 'specs',
    },

    // ═══════════════════════════════════════════
    // 💰 FİYAT
    // ═══════════════════════════════════════════
    {
      name: 'showPrice',
      title: 'Fiyatı Sitede Göster',
      type: 'boolean',
      description: 'Açarsan fiyat sitede görünür. Kapalıysa "Teklif Al" gösterilir.',
      initialValue: false,
      group: 'price',
    },
    {
      name: 'price',
      title: 'Fiyat',
      type: 'number',
      description: 'Sadece sayı yaz. Örn: 850000. Para birimini aşağıda seç. Boş bırakırsan "Teklif İste" gösterilir.',
      group: 'price',
      hidden: ({parent}) => !parent?.showPrice,
    },
    {
      name: 'priceCurrency',
      title: 'Para Birimi',
      type: 'string',
      options: {
        list: [
          {title: '₺ Türk Lirası', value: 'TRY'},
          {title: '$ ABD Doları', value: 'USD'},
          {title: '€ Euro', value: 'EUR'},
        ],
        layout: 'radio',
      },
      initialValue: 'TRY',
      group: 'price',
      hidden: ({parent}) => !parent?.showPrice,
    },
    {
      name: 'priceNote',
      title: 'Fiyat Notu (opsiyonel)',
      type: 'string',
      description: 'Örn: "+ KDV", "Anahtar teslim kurulum dahil", "Kargo hariç"',
      group: 'price',
      hidden: ({parent}) => !parent?.showPrice,
    },

    // ═══════════════════════════════════════════
    // 🖼️ GÖRSELLER
    // ═══════════════════════════════════════════
    {
      name: 'mainImage',
      title: 'Ana Görsel',
      type: 'image',
      description: 'Kartlarda ve modalın üstünde görünür. Sarf malzemelerinde opsiyonel.',
      options: {hotspot: true},
      group: 'media',
    },
    {
      name: 'gallery',
      title: 'Galeri (ek görseller)',
      type: 'array',
      description: 'Modal galerideki ek açılar. Önerilen: 3-5 fotoğraf.',
      of: [{type: 'image', options: {hotspot: true}}],
      group: 'media',
    },

    // ═══════════════════════════════════════════
    // 🎬 EK BİLGİLER
    // ═══════════════════════════════════════════
    {
      name: 'videoUrl',
      title: 'Demo Video URL',
      type: 'url',
      description: 'YouTube veya Vimeo bağlantısı (opsiyonel).',
      group: 'meta',
    },
    {
      name: 'datasheet',
      title: 'Datasheet PDF',
      type: 'file',
      description: 'PDF teknik belge (opsiyonel). Sarf için MSDS (Güvenlik Belgesi) de buraya yüklenebilir.',
      options: {accept: 'application/pdf'},
      group: 'meta',
    },
    {
      name: 'monthlyViews',
      title: 'Aylık Görüntüleme',
      type: 'number',
      description: 'Modal altında "Bu ay X görüntüleme" olarak görünür.',
      initialValue: 0,
      group: 'meta',
    },

    // ═══════════════════════════════════════════
    // 🏷️ DURUM
    // ═══════════════════════════════════════════
    {
      name: 'isActive',
      title: 'Yayında',
      type: 'boolean',
      description: 'Kapatırsan ürün sitede görünmez.',
      initialValue: true,
      group: 'status',
    },
    {
      name: 'isFeatured',
      title: 'Öne Çıkan',
      type: 'boolean',
      description: '"Öne Çıkan Ürünler" bölümünde gösterilir.',
      initialValue: false,
      group: 'status',
    },
    {
      name: 'isNew',
      title: 'YENİ Rozeti',
      type: 'boolean',
      description: 'Kartta "YENİ" etiketi gösterilir.',
      initialValue: false,
      group: 'status',
    },

    // ═══════════════════════════════════════════
    // 🔗 İLGİLİ ÜRÜNLER
    // ═══════════════════════════════════════════
    {
      name: 'relatedProducts',
      title: 'İlgili Ürünler',
      type: 'array',
      description: 'Modal alt kısmında gösterilecek 2-3 ilgili ürün.',
      of: [{type: 'reference', to: [{type: 'product'}]}],
      validation: (Rule) => Rule.max(4),
      group: 'related',
    },
  ],

  // ─── Liste Önizlemesi ───
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'mainImage',
      showPrice: 'showPrice',
      price: 'price',
      currency: 'priceCurrency',
    },
    prepare({title, subtitle, media, showPrice, price, currency}) {
      const categoryLabels = {
        'cnc-kesim': '🔪 CNC Kesim',
        'olcum': '📏 Ölçüm Cihazı',
        'sarf': '📦 Sarf Malzemeleri',
      }
      const currencySymbols = {TRY: '₺', USD: '$', EUR: '€'}
      let subtitleText = categoryLabels[subtitle] || subtitle
      if (showPrice && price) {
        const symbol = currencySymbols[currency] || ''
        subtitleText += `  •  ${symbol}${price.toLocaleString('tr-TR')}`
      }
      return {
        title: title || 'İsimsiz Ürün',
        subtitle: subtitleText,
        media,
      }
    },
  },

  // ─── Sıralama Seçenekleri ───
  orderings: [
    {
      title: 'Sıralama (manuel)',
      name: 'displayOrderAsc',
      by: [{field: 'displayOrder', direction: 'asc'}],
    },
    {
      title: 'Ad (A → Z)',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}],
    },
    {
      title: 'Fiyat (düşükten yükseğe)',
      name: 'priceAsc',
      by: [{field: 'price', direction: 'asc'}],
    },
  ],
}