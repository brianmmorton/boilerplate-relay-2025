import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// Load environment variables from the api directory
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
dotenv.config({ path: resolve(__dirname, '../.env') })

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Create sample products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Wireless Bluetooth Headphones',
        description: 'Premium noise-cancelling headphones with 30-hour battery life and crystal-clear sound quality.',
        price: 199.99,
        category: 'Electronics',
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800',
        inStock: true,
        rating: 4.5,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Smart Fitness Watch',
        description: 'Track your health and fitness with advanced sensors, heart rate monitoring, and GPS.',
        price: 299.99,
        category: 'Electronics',
        imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
        inStock: true,
        rating: 4.7,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Organic Cotton T-Shirt',
        description: 'Comfortable and sustainable t-shirt made from 100% organic cotton. Available in multiple colors.',
        price: 29.99,
        category: 'Clothing',
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
        inStock: true,
        rating: 4.3,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Stainless Steel Water Bottle',
        description: 'Keep your drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly.',
        price: 24.99,
        category: 'Accessories',
        imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800',
        inStock: true,
        rating: 4.6,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Leather Backpack',
        description: 'Durable leather backpack with multiple compartments, perfect for work or travel.',
        price: 149.99,
        category: 'Accessories',
        imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800',
        inStock: true,
        rating: 4.4,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Yoga Mat Premium',
        description: 'Non-slip yoga mat with extra cushioning for maximum comfort during your practice.',
        price: 49.99,
        category: 'Sports',
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800',
        inStock: true,
        rating: 4.8,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Ceramic Coffee Mug Set',
        description: 'Set of 4 handcrafted ceramic mugs, perfect for your morning coffee or evening tea.',
        price: 34.99,
        category: 'Home & Kitchen',
        imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800',
        inStock: true,
        rating: 4.2,
      },
    }),
    prisma.product.create({
      data: {
        name: 'LED Desk Lamp',
        description: 'Adjustable LED desk lamp with multiple brightness levels and color temperature settings.',
        price: 59.99,
        category: 'Home & Kitchen',
        imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800',
        inStock: true,
        rating: 4.5,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Running Shoes',
        description: 'Lightweight running shoes with advanced cushioning technology for maximum comfort.',
        price: 119.99,
        category: 'Sports',
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
        inStock: false,
        rating: 4.6,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Denim Jacket',
        description: 'Classic denim jacket with a modern fit. Perfect for layering in any season.',
        price: 79.99,
        category: 'Clothing',
        imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800',
        inStock: true,
        rating: 4.1,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Portable Phone Charger',
        description: 'High-capacity power bank that can charge your phone multiple times on a single charge.',
        price: 39.99,
        category: 'Electronics',
        imageUrl: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c8?w=800',
        inStock: true,
        rating: 4.4,
      },
    }),
    prisma.product.create({
      data: {
        name: 'Bamboo Cutting Board',
        description: 'Eco-friendly bamboo cutting board that is gentle on knives and naturally antimicrobial.',
        price: 44.99,
        category: 'Home & Kitchen',
        imageUrl: 'https://images.unsplash.com/photo-1556910103-2c027eb7efbe?w=800',
        inStock: true,
        rating: 4.7,
      },
    }),
  ])

  console.log(`✅ Created ${products.length} sample products`)
  console.log('🎉 Database seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 