'use client'
import { useRouter } from 'next/navigation'
import { TableRow } from '../ui/table'

export default function ProductRow({ children, id }) {
  const router = useRouter()

  function handleProduct(id) {
    console.log(router)
    router?.push(`/inventary/${id}`)
  }
  return (
    <TableRow className="cursor-pointer" onClick={() => handleProduct(id)}>
      {children}
    </TableRow>
  )
}
