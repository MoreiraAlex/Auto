'use client'
import { TableHead, TableRow } from '@/components/ui/table'
import { HandleParams } from './handleParams'
import { useSearchParams } from 'next/navigation'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function Columns() {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams?.toString())
  const handleParams = HandleParams()

  function handleClick(key) {
    handleParams(key, (params) => {
      if (params.get('sortBy') !== key) {
        params.set('sortBy', key)
        params.set('order', 'asc')
      } else if (params.get('order') === 'asc') {
        params.set('order', 'desc')
      } else {
        params.set('order', 'asc')
      }
    })
  }

  function getSortIcon(key) {
    if (params.get('sortBy') !== key) {
      return null
    } else if (params.get('order') === 'asc') {
      return <ChevronDown />
    } else {
      return <ChevronUp />
    }
  }

  return (
    <TableRow className=" hover:bg-transparent">
      <TableHead
        onClick={() => handleClick('id')}
        className="w-[50px] hover:bg-muted/50 cursor-pointer"
      >
        <div className="flex items-center gap-1">
          ID
          {getSortIcon('id')}
        </div>
      </TableHead>
      <TableHead
        onClick={() => handleClick('title')}
        className="w-[200px] hover:bg-muted/50 cursor-pointer"
      >
        <div className="flex items-center gap-1">
          Nome
          {getSortIcon('title')}
        </div>
      </TableHead>
      <TableHead
        onClick={() => handleClick('category')}
        className="w-[150px] hover:bg-muted/50 cursor-pointer"
      >
        <div className="flex items-center gap-1">
          Categoria
          {getSortIcon('category')}
        </div>
      </TableHead>
      <TableHead
        onClick={() => handleClick('price')}
        className="w-[100px] hover:bg-muted/50 cursor-pointer"
      >
        <div className="flex items-center gap-1">
          Preço
          {getSortIcon('price')}
        </div>
      </TableHead>
      <TableHead
        onClick={() => handleClick('stock')}
        className="w-[100px] hover:bg-muted/50 cursor-pointer"
      >
        <div className="flex items-center gap-1">
          Estoque
          {getSortIcon('stock')}
        </div>
      </TableHead>
      <TableHead className="w-[150px] text-right">Ações</TableHead>
    </TableRow>
  )
}
