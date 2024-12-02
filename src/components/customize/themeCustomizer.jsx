'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import { Check, Moon, Settings, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useConfig } from '@/hooks/use-config'

export default function ThemeCustomizer() {
  const { theme, setTheme } = useTheme()
  const [config, setConfig] = useConfig()

  const colors = [
    { name: 'zinc', value: '240 5.2% 33.9%' },
    { name: 'red', value: '0 72.2% 50.6%' },
    { name: 'green', value: '142.1 70.6% 45.3%' },
    { name: 'blue', value: '217.2 91.2% 59.8%' },
    { name: 'violet', value: '263.4 70% 50.4%' },
    { name: 'yellow', value: '47.9 95.8% 53.1%' },
  ]

  return (
    <Popover>
      <PopoverTrigger className="flex gap-3">
        <Settings /> Temas
      </PopoverTrigger>
      <PopoverContent>
        <Card>
          <CardHeader>
            <CardTitle>Temas</CardTitle>
            <CardDescription>
              Escolhe o tema que melhor combine para você
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1.5">
              <label className="font-medium mb-2">Cor</label>
              <div className="grid grid-cols-3 gap-2">
                {colors.map((color) => {
                  const isActive = config.theme === color.name
                  // <Button
                  //   key={color.name}
                  //   // className={cn(
                  //   //   `w-10 h-10 rounded-full bg-${color.value}`,
                  //   //   activeColor === color.name &&
                  //   //     'ring-2 ring-offset-2 ring-offset-black ring-white',
                  //   // )}
                  //   className="inline-flex text-white items-center gap-2 whitespace-nowrap font-medium focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs justify-start"
                  //   onClick={() => {
                  //     setConfig({
                  //       ...config,
                  //       theme: color.name,
                  //     })
                  //   }}
                  // >
                  //   <span
                  //     className={`mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-red-50`}
                  //   ></span>
                  //   {color.name}
                  // </Button>
                  return (
                    <Button
                      key={color.name}
                      variant={'outline'}
                      size="sm"
                      onClick={() => {
                        setConfig({
                          ...config,
                          theme: color.name,
                        })
                      }}
                      className={cn(
                        'justify-start',
                        isActive && 'border-2 border-primary',
                      )}
                      style={{
                        '--theme-primary': `hsl(${color.value})`,
                      }}
                    >
                      <span
                        className={cn(
                          'mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]',
                        )}
                      >
                        {isActive && <Check className="h-4 w-4 text-white" />}
                      </span>
                      {color.name}
                    </Button>
                  )
                })}
              </div>
            </div>

            <div className="mt-6">
              <p className="font-medium mb-2">Modo</p>
              <div className="flex gap-4">
                <Button
                  onClick={() => setTheme('light')}
                  variant="outline"
                  size="icon"
                  className={theme === 'light' && 'border-black'}
                >
                  <Sun />
                </Button>
                <Button
                  onClick={() => setTheme('dark')}
                  variant="outline"
                  size="icon"
                  className={theme === 'dark' && 'border-white'}
                >
                  <Moon />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
}
