'use client'

import { cn } from '@/lib/utils'
import { useConfig } from '@/hooks/use-config'

export function ThemeWrapper({ defaultTheme, children, className }) {
  const [config] = useConfig()

  return (
    <div
      className={cn(
        `theme-${defaultTheme || config.theme}`,
        'w-full',
        className,
      )}
    >
      {children}
    </div>
  )
}
