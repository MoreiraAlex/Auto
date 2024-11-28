import { Button } from '@/components/ui/button'
import AppPathList from '@/components/customize/app-pathlist'
import SearchInput from '@/components/customize/searchInput'
import ProductsTable from '@/components/customize/productsTable'
import { Plus } from 'lucide-react'

export default function Inventory({ searchParams }) {
  const paths = [
    { href: '/', label: 'Home' },
    { href: '/inventary', label: 'Inventário' },
  ]
  return (
    <section>
      <AppPathList paths={paths} />
      <section className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold text-primary">Produtos</h1>
        <section className="flex items-center">
          <SearchInput />
          <Button className="ml-4" variant="outline">
            Export
          </Button>
          <Button className="ml-2" variant="outline">
            <Plus />
            Add Product
          </Button>
        </section>
      </section>
      <ProductsTable searchParams={searchParams} />
    </section>
  )
}
