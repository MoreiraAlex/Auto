'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function HandleParams() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  return (key, callback) => {
    const params = new URLSearchParams(searchParams?.toString())

    // Modifique os parâmetros usando o callback
    callback(params)

    // Atualize a URL
    replace(`${pathname}?${params.toString()}`)
  }
}
