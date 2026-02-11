import { Hero } from '@/components/hero'
import { ChoicePaths } from '@/components/choice-paths'
import { Features } from '@/components/features'
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
      title: 'Working Farm',
      description:
        'A genuine, active alpaca farm and weaving studio in the heart of Ibiza. Every piece tells a story of our animals and land.',
    },
    {
      icon: '🧵',
      title: 'Artisanal Process',
      description:
        'Hand-processed fibers, natural dyes, traditional patterns. Every step honors the craft and the alpacas.',
    },
    {
      icon: '🌍',
      title: 'Sustainable & Natural',
      description:
        'Organic practices, eco-friendly products, biodegradable packaging. Care for animals and planet.',
    },
    {
      icon: '👥',
      title: 'By Appointment',
      description:
        'Intimate visits only. We keep our farm calm and peaceful for the alpacas—and for you.',
    },
    {
      icon: '🎯',
      title: 'Premium Quality',
      description:
        'Every product is hand-checked. We stand behind the quality and longevity of our work.',
    },
    {
      icon: '💚',
      title: 'Animal Welfare First',
      description:
        'Our alpacas are cherished members of our family. Their comfort and happiness drive everything we do.',
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
              Why Choose Alpacas Ibiza
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              We blend hospitality, craftsmanship, and animal welfare into every experience
            </p>
          </div>
          <Features items={features} />
        </div>
      </section>

      {/* Choose Your Experience (GEO Strategy) */}
      <section className="w-full py-16 md:py-24 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Experience
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Curated experiences for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Corporate */}
            <Link href={`/${locale}/experiences/corporate-team-building`} className="group">
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="h-48 bg-muted relative">
                  {/* Placeholder for Corporate Image */}
                  <div className="absolute inset-0 flex items-center justify-center text-4xl bg-primary/10">
                    🤝
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Corporate & Team Building
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    Disconnect to reconnect. Leadership retreats and team bonding with our gentle herd.
                  </p>
                  <span className="text-primary font-medium text-sm flex items-center">
                    Plan Event <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Romantic */}
            <Link href={`/${locale}/experiences/romantic-sunset`} className="group">
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="h-48 bg-muted relative">
                  {/* Placeholder for Romantic Image */}
                  <div className="absolute inset-0 flex items-center justify-center text-4xl bg-accent/10">
                    🌅
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    Romantic Sunset Walks
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    Golden hour magic. Private, intimate walks for couples (and proposal planning!).
                  </p>
                  <span className="text-accent font-medium text-sm flex items-center">
                    Book Private Tour <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Family */}
            <Link href={`/${locale}/experiences/family-farm-days`} className="group">
              <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="h-48 bg-muted relative">
                  {/* Placeholder for Family Image */}
                  <div className="absolute inset-0 flex items-center justify-center text-4xl bg-secondary">
                    👨‍👩‍👧‍👦
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    Family Farm Days
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    Safe, educational fun for all ages. Introduce your little ones to nature.
                  </p>
                  <span className="text-primary font-medium text-sm flex items-center">
                    Family Visit <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Experience Alpacas Ibiza?
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Whether you want to meet the herd, shop our collection, or commission something special—we're here to create an unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors"
            >
              Book Your Tour
            </a>
            <a
              href={`/${locale}/shop`}
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary/5 rounded-lg font-medium transition-colors"
            >
              Explore Shop
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="w-full py-12 md:py-16 px-4 bg-background border-t border-border">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Stay Connected
            </h3>
            <p className="text-sm text-foreground/70">
              Get updates on new products, workshops, and farm stories
            </p>
          </div>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </main>
  )
}
