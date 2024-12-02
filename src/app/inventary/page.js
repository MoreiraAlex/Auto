import { Button } from '@/components/ui/button'
import AppPathList from '@/components/customize/app-pathlist'
import SearchInput from '@/components/customize/searchInput'
import ProductsTable from '@/components/customize/productsTable'
import { Plus } from 'lucide-react'
import { Suspense } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { SkeletonTableRow } from '@/components/customize/skeletonTemplate'
import Columns from '@/components/customize/colums'
import { Separator } from '@radix-ui/react-dropdown-menu'
import PaginationTable from '@/components/customize/paginationTable'

export default function Inventory({ searchParams }) {
  const paths = [
    { href: '/', label: 'Home' },
    { href: '/inventary', label: 'Inventário' },
  ]
  return (
    <section key={Math.random()}>
      <AppPathList paths={paths} />
      <section className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold text-primary">Produtos</h1>
        <section className="flex items-center">
          <Suspense>
            <SearchInput />
          </Suspense>
          <Button className="ml-4" variant="outline">
            Export
          </Button>
          <Button className="ml-2" variant="outline">
            <Plus />
            Add Product
          </Button>
        </section>
      </section>
      <Suspense fallback={<FallbackSkeleton limit={10} />}>
        <ProductsTable searchParams={searchParams} />
      </Suspense>
    </section>
  )
}

function FallbackSkeleton({ limit }) {
  return (
    <Table className="mt-10" key={Math.random()}>
      <TableHeader>
        <TableRow className=" hover:bg-transparent">
          <TableHead className="w-[50px] hover:bg-muted/50 cursor-pointer">
            <div className="flex items-center gap-1">ID</div>
          </TableHead>
          <TableHead className="w-[200px] hover:bg-muted/50 cursor-pointer">
            <div className="flex items-center gap-1">Nome</div>
          </TableHead>
          <TableHead className="w-[150px] hover:bg-muted/50 cursor-pointer">
            <div className="flex items-center gap-1">Categoria</div>
          </TableHead>
          <TableHead className="w-[100px] hover:bg-muted/50 cursor-pointer">
            <div className="flex items-center gap-1">Preço</div>
          </TableHead>
          <TableHead className="w-[100px] hover:bg-muted/50 cursor-pointer">
            <div className="flex items-center gap-1">Estoque</div>
          </TableHead>
          <TableHead className="w-[150px] text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[...Array(limit)].map((_, index) => (
          <TableRow key={index} className="border-0">
            <TableCell colSpan={6}>
              <SkeletonTableRow />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
