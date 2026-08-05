const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

function slugify(s) {
  return s
    .toString()
    .toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

const brands = ['KingSong', 'Begode', 'Leaperkim', 'Veteran', 'Inmotion', 'Segway']
const categories = ['Monociclos Eléctricos', 'Scooters', 'Bicicletas Eléctricas', 'Accesorios']

const products = [
  // Monociclos
  { name: 'KingSong F18', price: 78998, category: 'Monociclos Eléctricos', brand: 'KingSong' },
  { name: 'KingSong 14D Pro', price: 26998, category: 'Monociclos Eléctricos', brand: 'KingSong' },
  { name: 'KingSong 16X Pro', price: 52998, category: 'Monociclos Eléctricos', brand: 'KingSong' },
  { name: 'KingSong 16S Pro', price: 28409, category: 'Monociclos Eléctricos', brand: 'KingSong' },
  { name: 'KingSong S16 Pro', price: 56998, category: 'Monociclos Eléctricos', brand: 'KingSong' },
  { name: 'KingSong 18XL Pro', price: 35749, category: 'Monociclos Eléctricos', brand: 'KingSong' },
  { name: 'KingSong S9', price: 14998, category: 'Monociclos Eléctricos', brand: 'KingSong' },
  { name: 'KingSong 14S Pro', price: 28879, category: 'Monociclos Eléctricos', brand: 'KingSong' },
  { name: 'KingSong S18 Pro+', price: 60998, category: 'Monociclos Eléctricos', brand: 'KingSong' },
  { name: 'KingSong S22 Pro', price: 69998, category: 'Monociclos Eléctricos', brand: 'KingSong' },
  { name: 'KingSong S19 Pro', price: 60998, category: 'Monociclos Eléctricos', brand: 'KingSong' },
  { name: 'KingSong F22 Pro', price: 92229, category: 'Monociclos Eléctricos', brand: 'KingSong' },
  { name: 'KingSong 14M', price: 11769, category: 'Monociclos Eléctricos', brand: 'KingSong' },
  { name: 'KingSong 14S', price: 23099, category: 'Monociclos Eléctricos', brand: 'KingSong' },

  // Scooters
  { name: 'KingSong N13', price: 8889, category: 'Scooters', brand: 'KingSong' },
  { name: 'KingSong C1', price: 4559, category: 'Scooters', brand: 'KingSong' },
  { name: 'KingSong N11KSE', price: 35069, category: 'Scooters', brand: 'KingSong' },
  { name: 'KingSong N12Y1', price: 15899, category: 'Scooters', brand: 'KingSong' },
  { name: 'KingSong E2', price: 10099, category: 'Scooters', brand: 'KingSong' },
  { name: 'KingSong N14KSE', price: 15699, category: 'Scooters', brand: 'KingSong' },
  { name: 'KingSong N12 Pro+ KSE', price: 20829, category: 'Scooters', brand: 'KingSong' },
  { name: 'KingSong N16', price: 41219, category: 'Scooters', brand: 'KingSong' },
  { name: 'KingSong N12T2', price: 23039, category: 'Scooters', brand: 'KingSong' },

  // Bicicletas
  { name: 'KingSong M2', price: 18119, category: 'Bicicletas Eléctricas', brand: 'KingSong' },
  { name: 'KingSong M3', price: 19939, category: 'Bicicletas Eléctricas', brand: 'KingSong' },
  { name: 'KingSong M19', price: 10479, category: 'Bicicletas Eléctricas', brand: 'KingSong' }
]

async function main() {
  console.log('Seeding brands...')
  const brandMap = {}
  for (const b of brands) {
    const slug = slugify(b)
    const brand = await prisma.brand.upsert({
      where: { slug },
      update: {},
      create: { name: b, slug }
    })
    brandMap[b] = brand.id
  }

  console.log('Seeding categories...')
  const catMap = {}
  for (const c of categories) {
    const slug = slugify(c)
    const category = await prisma.category.upsert({
      where: { slug },
      update: {},
      create: { name: c, slug }
    })
    catMap[c] = category.id
  }

  console.log('Seeding products...')
  for (const p of products) {
    const slug = slugify(p.name)
    await prisma.product.upsert({
      where: { slug },
      update: {
        price: p.price,
        stock: p.stock ?? 10,
        brandId: brandMap[p.brand],
        categoryId: catMap[p.category],
        description: p.description ?? ''
      },
      create: {
        name: p.name,
        slug,
        price: p.price,
        stock: p.stock ?? 10,
        brandId: brandMap[p.brand],
        categoryId: catMap[p.category],
        description: p.description ?? '',
        tags: p.tags ?? [],
        images: p.images ?? []
      }
    })
  }

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
