import { useState, useEffect } from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay'
import { ProductCard } from '@/components/ProductCard'
import { Input } from '@/components/ui/input'
import type { ProductsPageQuery } from './__generated__/ProductsPageQuery.graphql'

const productsQuery = graphql`
  query ProductsPageQuery($search: String) {
    products(search: $search) {
      id
      ...ProductCard_product
    }
  }
`

export function ProductsPage() {
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')

  // Debounce search input with 300ms delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 300)

    return () => clearTimeout(timer)
  }, [search])

  const data = useLazyLoadQuery<ProductsPageQuery>(
    productsQuery,
    { search: debouncedSearch || null },
    { fetchPolicy: 'store-and-network' }
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Products</h1>
        <div className="max-w-md">
          <Input
            type="text"
            placeholder="Search products by name, description, or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {search !== debouncedSearch && (
        <div className="mb-4 text-sm text-muted-foreground">
          Searching...
        </div>
      )}

      {data.products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {search ? 'No products found matching your search.' : 'No products available.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

