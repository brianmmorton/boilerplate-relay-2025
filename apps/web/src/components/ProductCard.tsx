import { graphql, useFragment } from 'react-relay'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ProductCard_product$key } from './__generated__/ProductCard_product.graphql'

interface ProductCardProps {
  product: ProductCard_product$key
}

export function ProductCard({ product }: ProductCardProps) {
  const data = useFragment(
    graphql`
      fragment ProductCard_product on Product {
        id
        name
        description
        price
        category
        imageUrl
        inStock
        rating
      }
    `,
    product
  )

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {data.imageUrl && (
        <div className="aspect-video w-full overflow-hidden bg-muted">
          <img
            src={data.imageUrl}
            alt={data.name}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">{data.name}</CardTitle>
          {data.inStock ? (
            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
              In Stock
            </span>
          ) : (
            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
              Out of Stock
            </span>
          )}
        </div>
        <CardDescription>{data.category}</CardDescription>
      </CardHeader>
      <CardContent>
        {data.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
            {data.description}
          </p>
        )}
        {data.rating && (
          <div className="flex items-center gap-1 text-sm">
            <span>⭐</span>
            <span className="font-medium">{data.rating.toFixed(1)}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="text-2xl font-bold">${data.price.toFixed(2)}</span>
      </CardFooter>
    </Card>
  )
}

