import { Separator } from '@/components/ui/separator'

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// import PaginationTable from './paginationTable'
import Products from './products'
import { Suspense } from 'react'
import { SkeletonTableRow } from './skeletonTemplate'
import Columns from './colums'
import PaginationTable from './paginationTable'

export default function ProductsTable({ searchParams }) {
  return (
    <>
      <Table className="mt-10" key={Math.random()}>
        <TableHeader>
          <Columns />
        </TableHeader>
        <TableBody>
          <Suspense fallback={<FallbackSkeleton limit={8} />}>
            <Products searchParams={searchParams} />
          </Suspense>
        </TableBody>
      </Table>
      <Separator className="mb-5" />
      <PaginationTable />
    </>
  )
}

function FallbackSkeleton({ limit }) {
  return (
    <>
      {[...Array(limit)].map((_, index) => (
        <TableRow key={index} className="border-0">
          <TableCell colSpan={6}>
            <SkeletonTableRow />
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}
