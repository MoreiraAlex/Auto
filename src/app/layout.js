import './globals.css'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/customize/app-sidebar'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { AppBreadcrumb } from '@/components/customize/app-breadcrumb'
import { BreadcrumbProvider } from '../components/contexts/breadcrumb-context'
import { Separator } from '@/components/ui/separator'

export default function Layout({ children }) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body>
        <BreadcrumbProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SidebarProvider>
              <AppSidebar />
              <main className="w-full">
                <header className=" px-2 sticky top-0 z-50 flex h-8 items-center py-1 space-x-4 border-b border-border/40 bg-background/95 backdrop-blur w-full supports-[backdrop-filter]:bg-background/60 dark:border-border">
                  <SidebarTrigger className="z-10" />
                  <Separator orientation="vertical" />
                  <AppBreadcrumb itens={children.itens} />
                </header>
                <section className="py-8 px-6">{children}</section>
              </main>
            </SidebarProvider>
          </ThemeProvider>
        </BreadcrumbProvider>
      </body>
    </html>
  )
}
