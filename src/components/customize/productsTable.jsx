import { Separator } from '@/components/ui/separator'

import { Table, TableBody, TableCell, TableHeader } from '@/components/ui/table'

import Columns from './colums'
import PaginationTable from './paginationTable'
import axios from 'axios'
import ProductRow from './productRow'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Trash } from 'lucide-react'

export default async function ProductsTable({ searchParams }) {
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
  return (
    <>
      <Table className="mt-10">
        <TableHeader>
          <Columns />
        </TableHeader>
        <TableBody>
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
                <Button variant="destructive">
                  <Trash />
                </Button>
              </TableCell>
            </ProductRow>
          ))}
        </TableBody>
      </Table>
      <Separator className="mb-5" />
      <PaginationTable total={data.total} />
    </>
  )
}
