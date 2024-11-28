import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Edit, Plus, Trash } from 'lucide-react'

export default async function ProductPage({ params }) {
  const { id } = await params

  // await new Promise((resolve) => setTimeout(resolve, 5000))

  const response = await fetch(`${process.env.BACKEND_API}/${id}`, {})
  const product = await response.json()

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div>
          <Image
            src={product.thumbnail || '/placeholder-image.png'}
            alt={product.title}
            width={300}
            height={0}
            className="h-80 rounded-md object-cover"
          />
        </div>

        <div className="flex-1">
          <Card className="h-80">
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
              <p className="text-sm text-gray-500">{product.category}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <p className="text-lg font-semibold">
                Price: ${product.price}{' '}
                <span className="text-sm font-normal text-gray-500">
                  (Discount: {product.discountPercentage}%)
                </span>
              </p>
              <p className="text-sm text-gray-600">Stock: {product.stock}</p>
              <p className="text-sm text-gray-600">
                Rating: {product.rating} ⭐ ({product.reviews.length} reviews)
              </p>
              <Separator className="my-4" />
              <div className="space-x-2">
                <Button>
                  <Plus />
                  Add to Cart
                </Button>
                <Button>
                  <Edit />
                  Edit
                </Button>
                <Button>
                  <Trash />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Additional Information</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Brand</TableCell>
                  <TableCell>{product.brand}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>SKU</TableCell>
                  <TableCell>{product.sku}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Dimensions</TableCell>
                  <TableCell>
                    {product.dimensions.width} x {product.dimensions.height} x{' '}
                    {product.dimensions.depth} cm
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Weight</TableCell>
                  <TableCell>{product.weight} kg</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Warranty</TableCell>
                  <TableCell>{product.warrantyInformation}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Customer Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            {product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold">{review.reviewerName}</p>
                  <p className="text-gray-600 text-sm">{review.comment}</p>
                  <p className="text-gray-500 text-xs">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                  <Separator className="my-2" />
                </div>
              ))
            ) : (
              <p>No reviews yet.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
