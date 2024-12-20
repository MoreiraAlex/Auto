'use client'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useState, useEffect } from 'react'

export default function SearchInput() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const [search, setSearch] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(searchParams?.toString())
    const currentSearch = params.get('search') || ''
    setSearch(currentSearch)
  }, [searchParams])

  const handleChange = useDebouncedCallback((value) => {
    const params = new URLSearchParams(searchParams?.toString())

    if (value) {
      params.set('search', value)
    } else {
      params.delete('search')
    }

    params.set('skip', 0)
    router.replace(`${pathname}?${params.toString()}`)
  }, 500)

  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Busque por nome..."
        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        value={search} // Atualiza o campo de busca com o estado local
        onChange={(e) => {
          const value = e.target.value
          setSearch(value) // Atualiza o estado local imediatamente
          handleChange(value) // Atualiza a URL após debounce
        }}
      />
    </div>
  )
}
