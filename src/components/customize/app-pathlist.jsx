'use client'
import { useBreadcrumb } from '@/components/contexts/breadcrumb-context'
import { useEffect } from 'react'

export default function AppPathList({ paths }) {
  const { setBreadcrumbItems } = useBreadcrumb()

  useEffect(() => {
    setBreadcrumbItems(paths)
  }, [setBreadcrumbItems])
}
