'server side'
import axios from 'axios'
import { TableCell } from '../ui/table'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import ProductRow from './productRow'

export default async function Products({ searchParams }) {
  const { search, order, sortBy, skip } = await searchParams
  const response = await axios.get(
    `${process.env.BACKEND_API}/${search ? `search?q=${search}` : ''}`,
    {
      params: {
        limit: 10,
        skip,
        order,
        sortBy,
      },
    },
  )

  const data = await response.data
  // await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <>
      {data.products.map((product) => (
        <ProductRow key={product.id} id={product.id}>
          <TableCell>{product.id}</TableCell>
          <TableCell className="flex items-center space-x-3 font-medium">
            <Image
              src={product.thumbnail}
              width={30}
              height={20}
              alt={product.title}
            />
            <span>{product.title}</span>
          </TableCell>
          <TableCell>{product.category}</TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>{product.stock}</TableCell>
          <TableCell className="text-right">
            <Button variant="outline">
              <Trash />
            </Button>
          </TableCell>
        </ProductRow>
      ))}
    </>
  )
}
