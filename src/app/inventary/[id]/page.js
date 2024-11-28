import AppPathList from '@/components/customize/app-pathlist'
import { SkeletonTable } from '@/components/customize/skeletonTemplate'
import ProductCard from '@/components/customize/product'
import { ArrowLeftCircle } from 'lucide-react'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function Product({ params }) {
  const { id } = await params

  const response = await fetch(`${process.env.BACKEND_API}/${id}`)
  const data = await response.json()
  const paths = [
    { href: '/', label: 'Home' },
    { href: '/inventary', label: 'Inventário' },
    { href: `/inventary/${data.id}`, label: `${data.title}` },
  ]

  return (
    <main>
      <AppPathList paths={paths} />
      <Link href="/inventary">
        <ArrowLeftCircle />
      </Link>
      <Suspense fallback={<SkeletonTable />}>
        <ProductCard params={params} />
      </Suspense>
    </main>
  )
}
