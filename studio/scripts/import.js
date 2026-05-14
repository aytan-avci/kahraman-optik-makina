// ═══════════════════════════════════════════════════════════
// KAHRAMAN OPTİK — TOPLU IMPORT SCRIPT
// Bu script tüm verileri Sanity'ye yükler.
// Çalıştırmak için: node scripts/import.js
// ═══════════════════════════════════════════════════════════

import {createClient} from '@sanity/client'
import dotenv from 'dotenv'
import {
  products,
  services,
  whyUsItems,
  stats,
  homePage,
  siteSettings,
} from './data.js'

// .env.local'i oku
dotenv.config({path: '.env.local'})

const token = process.env.SANITY_API_TOKEN
const projectId = process.env.SANITY_PROJECT_ID

if (!token || !projectId) {
  console.error('❌ Hata: .env.local dosyasında SANITY_API_TOKEN veya SANITY_PROJECT_ID bulunamadı!')
  process.exit(1)
}

// Sanity client'ı kur
const client = createClient({
  projectId,
  dataset: 'production',
  token,
  useCdn: false,
  apiVersion: '2024-01-01',
})

// ─── Yardımcı: Bir grup dokümanı yükle ───
async function uploadGroup(label, emoji, items) {
  console.log(`\n${emoji}  ${label} yükleniyor (${items.length} adet)`)
  for (const doc of items) {
    try {
      await client.createOrReplace(doc)
      const title = doc.name || doc.titleTR || doc.value || doc._id
      console.log(`  ✅ ${title}`)
    } catch (err) {
      console.error(`  ❌ ${doc._id}: ${err.message}`)
    }
  }
}

// ─── Yardımcı: Tek doküman (singleton) yükle ───
async function uploadSingleton(label, emoji, doc) {
  console.log(`\n${emoji}  ${label} yükleniyor...`)
  try {
    await client.createOrReplace(doc)
    console.log(`  ✅ Yüklendi`)
  } catch (err) {
    console.error(`  ❌ Hata: ${err.message}`)
  }
}

// ─── Ana akış ───
async function main() {
  console.log('🚀 Sanity Import Başlıyor...')
  console.log(`📡 Project ID: ${projectId}`)
  console.log(`💾 Dataset: production`)

  await uploadGroup('Ürünler', '📦', products)
  await uploadGroup('Servisler', '🔧', services)
  await uploadGroup('Neden Biz', '⭐', whyUsItems)
  await uploadGroup('İstatistikler', '📊', stats)
  await uploadSingleton('Ana Sayfa', '🏠', homePage)
  await uploadSingleton('Site Ayarları', '⚙️', siteSettings)

  const total =
    products.length +
    services.length +
    whyUsItems.length +
    stats.length +
    2 // ana sayfa + site ayarları

  console.log('\n═══════════════════════════════════════════')
  console.log(`✨ Tamamlandı! Toplam ${total} doküman yüklendi.`)
  console.log('🌐 Studio\'yu yenile: http://localhost:3333')
  console.log('═══════════════════════════════════════════\n')
}

main().catch((err) => {
  console.error('💥 Beklenmeyen hata:', err)
  process.exit(1)
})