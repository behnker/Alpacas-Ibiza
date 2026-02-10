import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { ChoicePaths } from '@/components/choice-paths'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'

export default function Home() {
  const pathOptions = [
    {
      icon: '🎒',
      title: 'Book a Tour',
      description: 'Experience our farm, meet the alpacas, learn the weaving craft, and enjoy the Ibiza landscape.',
      href: '/tours',
      cta: 'Book Now',
    },
    {
      icon: '🛍️',
      title: 'Shop Woven',
      description: 'Handcrafted scarves, blankets, and artisanal pieces made from natural alpaca wool using traditional techniques.',
      href: '/shop/woven',
      cta: 'Browse Collection',
    },
    {
      icon: '✨',
      title: 'Commission',
      description: 'Create something unique. Commission a custom piece with your own colors, patterns, and dimensions.',
      href: '/shop/commission',
      cta: 'Start Project',
    },
    {
      icon: '🌿',
      title: 'Buy Alcaca',
      description: 'Premium alpaca manure for organic gardening and sustainable farming. Order in bulk or sample packs.',
      href: '/shop/alcaca',
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
      <Header />

      {/* Hero Section */}
      <Hero
        title="Ibiza's First Alpaca Farm & Weaving Studio"
        subtitle="Experience artisanal weaving, meet our alpacas, shop handcrafted wool products, and discover sustainable farming. Welcome to a place where tradition meets Mediterranean calm."
        cta={{
          label: 'Book a Tour',
          href: '/tours',
        }}
        secondary={{
          label: 'Shop Now',
          href: '/shop',
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

      {/* Special Experiences */}
      <section className="w-full py-16 md:py-24 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Special Experiences
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Beyond tours—create custom memories at our farm
            </p>
          </div>
          <Features items={highlightFeatures} />
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
              href="/tours"
              className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors"
            >
              Book Your Tour
            </a>
            <a
              href="/shop"
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

      <Footer />
    </main>
  )
}
