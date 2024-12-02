import { Skeleton } from '@/components/ui/skeleton'

function SkeletonTable() {
  return (
    <section className="mt-10 space-y-4">
      <Skeleton className="w-full h-36" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
    </section>
  )
}

function SkeletonTableRow() {
  return <Skeleton className="w-full h-9" />
}

export { SkeletonTable, SkeletonTableRow }
