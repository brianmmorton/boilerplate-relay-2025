import { Resolver, Query, Arg } from 'type-graphql'
import { Product } from '../entities/Product.js'
import { prisma } from '../../lib/prisma.js'

@Resolver(() => Product)
export class ProductResolver {
  @Query(() => [Product])
  async products(
    @Arg('search', () => String, { nullable: true }) search?: string | null
  ): Promise<Product[]> {
    const where = search
      ? {
          OR: [
            { name: { contains: search, mode: 'insensitive' as const } },
            { description: { contains: search, mode: 'insensitive' as const } },
            { category: { contains: search, mode: 'insensitive' as const } },
          ],
        }
      : {}

    const products = await prisma.product.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
    })

    return products.map(product => ({
      ...product,
      price: Number(product.price),
      rating: product.rating ? Number(product.rating) : null,
    }))
  }

  @Query(() => Product, { nullable: true })
  async product(@Arg('id', () => String) id: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: { id },
    })

    if (!product) {
      return null
    }

    return {
      ...product,
      price: Number(product.price),
      rating: product.rating ? Number(product.rating) : null,
    }
  }
}

