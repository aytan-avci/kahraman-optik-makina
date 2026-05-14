// Studio sol menüsünü özelleştir
// Singleton'lar (tek doküman): Ana Sayfa, Site Ayarları
// Normal koleksiyonlar (çoklu): Ürünler, Servisler, Neden Biz, İstatistikler

export const structure = (S) =>
  S.list()
    .title('İçerik Yönetimi')
    .items([
      // ─── Singleton'lar ───
      S.listItem()
        .title('🏠 Ana Sayfa')
        .id('homePage')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
            .title('Ana Sayfa İçeriği')
        ),
      S.listItem()
        .title('⚙️ Site Ayarları')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Ayarları')
        ),

      S.divider(),

      // ─── Normal koleksiyonlar ───
      S.documentTypeListItem('product').title('📦 Ürünler'),
      S.documentTypeListItem('service').title('🔧 Servisler'),
      S.documentTypeListItem('whyUs').title('⭐ Neden Biz'),
      S.documentTypeListItem('stat').title('📊 İstatistikler'),
    ])