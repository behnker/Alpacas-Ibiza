import { Hero } from '@/components/hero'
import { ChoicePaths } from '@/components/choice-paths'
import { Features } from '@/components/features'
import { BookingSection } from '@/components/booking-section'
import { t } from '@/lib/translations'
import type { Locale } from '@/i18n.config'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Home({ params }: { params: { locale: Locale } }) {
  const locale = params.locale
  const translate = t(locale)

  const pathOptions = [
    {
      icon: '🎒',
      title: translate('paths.tour.title'),
      description: translate('paths.tour.description'),
      href: `/${locale}/tours`,
      cta: 'Book Now',
    },
    {
      icon: '🛍️',
      title: translate('paths.shop.title'),
      description: translate('paths.shop.description'),
      href: `/${locale}/shop/woven`,
      cta: 'Browse Collection',
    },
    {
      icon: '✨',
      title: translate('paths.commission.title'),
      description: translate('paths.commission.description'),
      href: `/${locale}/shop/commission`,
      cta: 'Start Project',
    },
    {
      icon: '🌿',
      title: translate('paths.alcaca.title'),
      description: translate('paths.alcaca.description'),
      href: `/${locale}/shop/alcaca`,
      cta: 'Learn More',
    },
  ]

  const features = [
    {
      icon: '🏡',
      title: translate('features.farm.title'),
      description: translate('features.farm.description'),
    },
    {
      icon: '🧵',
      title: translate('features.artisan.title'),
      description: translate('features.artisan.description'),
    },
    {
      icon: '🌍',
      title: translate('features.sustainable.title'),
      description: translate('features.sustainable.description'),
    },
    {
      icon: '👥',
      title: translate('features.appointment.title'),
      description: translate('features.appointment.description'),
    },
    {
      icon: '🎯',
      title: translate('features.quality.title'),
      description: translate('features.quality.description'),
    },
    {
      icon: '💚',
      title: translate('features.welfare.title'),
      description: translate('features.welfare.description'),
    },
  ]

  const highlightFeatures = [
    {
      icon: '📍',
      title: 'Private Farm',
      description: 'Visits by appointment only. Intimate, peaceful experiences in a real working farm.',
    },
    {
      icon: '🎨',
      title: 'Workshops',
      description: 'Learn weaving, natural dyeing, and fiber arts directly from our artisan team.',
    },
    {
      icon: '💍',
      title: 'Events',
      description: 'Weddings, photoshoots, corporate retreats, alpaca yoga—customized experiences.',
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <Hero
        title={translate('hero.title')}
        subtitle={translate('hero.subtitle')}
        cta={{
          label: translate('hero.ctaPrimary'),
          href: 'https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes',
        }}
        secondary={{
          label: translate('hero.ctaSecondary'),
          href: `/${locale}/shop`,
        }}
      />

      {/* Choice Paths */}
      <ChoicePaths paths={pathOptions} />

      {/* Why Alpacas Ibiza */}
      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {translate('features.sectionTitle')}
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              {translate('features.sectionSubtitle')}
            </p>
          </div>
          <Features items={features} />
        </div>
      </section>

      {/* Next Available Dates */}
      <section className="w-full py-16 md:py-24 px-4 bg-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {translate('tours.title')}
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              {translate('tours.subtitle')}
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="text-center mb-8">
              <p className="text-lg text-foreground/80">
                {translate('tours.reserveText')}
              </p>
            </div>

            {/* FareHarbor Booking Integration */}
            <BookingSection />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {translate('cta.title')}
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            {translate('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors"
            >
              {translate('cta.bookTour')}
            </a>
            <a
              href={`/${locale}/shop`}
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary/5 rounded-lg font-medium transition-colors"
            >
              {translate('cta.exploreShop')}
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="w-full py-12 md:py-16 px-4 bg-background border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {translate('newsletter.title')}
            </h3>
            <p className="text-sm text-foreground/70">
              {translate('newsletter.subtitle')}
            </p>
          </div>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder={translate('newsletter.placeholder')}
              className="flex-1 px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
            >
              {translate('newsletter.subscribe')}
            </button>
          </form>
        </div>
      </section>

    </main>
  )
}
