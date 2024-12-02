'use client'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export default function PaginationTable({ total }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const params = new URLSearchParams(searchParams?.toString())
  const limit = params.get('limit') || 10
  const skip = params.get('skip') || 0
  const totalPages = limit > 0 ? Math.ceil(total / limit) : 1
  const currentSkip = Number(skip)
  const currentPage = Math.ceil(currentSkip / limit)

  function handleClickPage(pageNumber) {
    params.set('skip', pageNumber)
    // params.delete('sortBy')
    // params.delete('order')
    replace(`${pathname}?${params.toString()}`)
  }

  const pages = new Set([
    ...Array(3).keys(),
    totalPages - 3,
    totalPages - 2,
    totalPages - 1,
  ])
  pages.add(currentPage)
  const sortedPages = [...pages]
    .filter((page) => page >= 0 && page < totalPages)
    .sort((a, b) => a - b)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentSkip > 0 && (
            <PaginationPrevious
              className="cursor-pointer"
              onClick={() => handleClickPage(currentSkip - limit)}
            />
          )}
        </PaginationItem>

        {sortedPages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => handleClickPage(page * limit)}
              className="cursor-pointer"
              isActive={currentPage === page}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          {currentSkip / limit + 1 < totalPages && (
            <PaginationNext
              className="cursor-pointer"
              onClick={() => handleClickPage(currentSkip + limit)}
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
