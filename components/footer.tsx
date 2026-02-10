'use client'

import Link from 'next/link'
import { Mail, MapPin, Instagram } from 'lucide-react'
import { useParams } from 'next/navigation'
import type { Locale } from '@/i18n.config'
import { t } from '@/lib/translations'

export function Footer() {
  const params = useParams()
  const locale = (params.locale as Locale) || 'en'
  const tr = t(locale)

  return (
    <footer className="w-full bg-foreground/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="text-2xl" aria-hidden="true">🦙</span>
              Alpacas Ibiza
            </h3>
            <p className="text-sm text-foreground/70">
              {tr('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{tr('footer.explore')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/tours`} className="text-foreground/70 hover:text-foreground">
                  {tr('nav.tours')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/shop`} className="text-foreground/70 hover:text-foreground">
                  {tr('nav.shop')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-foreground/70 hover:text-foreground">
                  {tr('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-foreground/70 hover:text-foreground">
                  {tr('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{tr('footer.shopTitle')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/shop/woven`} className="text-foreground/70 hover:text-foreground">
                  {tr('footer.wovenCollection')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/shop/commission`} className="text-foreground/70 hover:text-foreground">
                  {tr('footer.customCommission')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/shop/alcaca`} className="text-foreground/70 hover:text-foreground">
                  {tr('footer.alpacaManure')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{tr('footer.contact')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">Ibiza, Spain</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@alpacasibiza.com" className="text-foreground/70 hover:text-foreground">
                  hello@alpacasibiza.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Instagram className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-foreground">
                  @alpacasibiza
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
            <p>&copy; {new Date().getFullYear()} Alpacas Ibiza. {tr('footer.copyright')}</p>
            <div className="flex gap-6">
              <Link href={`/${locale}/privacy`} className="hover:text-foreground">
                {tr('footer.privacy')}
              </Link>
              <Link href={`/${locale}/terms`} className="hover:text-foreground">
                {tr('footer.terms')}
              </Link>
              <Link href={`/${locale}/cookies`} className="hover:text-foreground">
                {tr('footer.cookies')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
