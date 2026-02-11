'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useParams } from 'next/navigation'
import type { Locale } from '@/i18n.config'
import { t } from '@/lib/translations'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const params = useParams()
  const locale = (params.locale as Locale) || 'en'
  const tr = t(locale)

  const navItems = [
    { label: tr('nav.tours'), href: `/${locale}/tours` },
    { label: tr('nav.shop'), href: `/${locale}/shop` },
    { label: tr('nav.about'), href: `/${locale}/about` },
    { label: tr('nav.contact'), href: `/${locale}/contact` },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="flex items-center justify-between px-4 py-4 md:px-6 max-w-7xl mx-auto">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-semibold text-lg">
          <span className="text-2xl" aria-hidden="true">🦙</span>
          <span className="hidden sm:inline text-foreground">Alpacas Ibiza</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Button
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <a href="https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes">{tr('nav.bookTour')}</a>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80vw] sm:w-[385px]">
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-foreground hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="my-4 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground/70 mb-3">{tr('nav.language')}</p>
                <LanguageSwitcher />
              </div>
              <Button
                asChild
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-4"
              >
                <a href="https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes" onClick={() => setIsOpen(false)}>
                  {tr('nav.bookTour')}
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

