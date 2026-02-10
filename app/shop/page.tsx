import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ShopPage() {
  const shopCategories = [
    {
      id: 'woven',
      title: 'Woven Collection',
      description: 'Handcrafted scarves, blankets, cushions, and artisanal pieces. Each created with love, natural dyes, and traditional weaving patterns.',
      icon: '🧣',
      items: '50+ items',
      href: '/shop/woven',
      color: 'bg-primary/10 hover:bg-primary/15',
      textColor: 'text-primary',
    },
    {
      id: 'commission',
      title: 'Custom Commission',
      description: 'Design your own. Choose colors, dimensions, patterns, and materials. Perfect for gifts, interiors, or special projects.',
      icon: '✨',
      items: 'Made to order',
      href: '/shop/commission',
      color: 'bg-accent/10 hover:bg-accent/15',
      textColor: 'text-accent',
    },
    {
      id: 'alcaca',
      title: 'Alpaca Manure (Alcaca)',
      description: 'Premium "Oro Negro"—pure, nutrient-rich alpaca manure for organic gardening and sustainable farming. Sample to bulk.',
      icon: '🌿',
      items: 'Multiple sizes',
      href: '/shop/alcaca',
      color: 'bg-green-500/10 hover:bg-green-500/15',
      textColor: 'text-green-600',
    },
  ]

  return (
    <main>
      <Header />

      {/* Hero */}
      <Hero
        title="Shop Alpacas Ibiza"
        subtitle="Discover handcrafted woven products, commission custom pieces, or shop our premium alpaca manure. Each purchase supports our farm and animal welfare."
      />

      {/* Shop Categories */}
      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {shopCategories.map((category) => (
              <Link key={category.id} href={category.href}>
                <Card
                  className={`h-full p-8 transition-all hover:shadow-lg cursor-pointer border-border/50 ${category.color}`}
                >
                  <div className={`text-5xl mb-4`}>{category.icon}</div>
                  <h3 className={`text-2xl font-bold mb-2 ${category.textColor}`}>
                    {category.title}
                  </h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground/60">
                      {category.items}
                    </span>
                    <ArrowRight className={`h-5 w-5 ${category.textColor}`} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Info */}
      <section className="w-full py-16 md:py-24 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border-border/50">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Fast Shipping
              </h3>
              <p className="text-sm text-foreground/70">
                We ship worldwide. EU orders arrive within 3–5 business days. International orders: 7–14 days.
              </p>
            </Card>

            <Card className="p-6 border-border/50">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Eco-Friendly
              </h3>
              <p className="text-sm text-foreground/70">
                Biodegradable packaging. Sustainable practices. Every purchase supports organic, animal-friendly farming.
              </p>
            </Card>

            <Card className="p-6 border-border/50">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Quality Guaranteed
              </h3>
              <p className="text-sm text-foreground/70">
                Hand-checked items. 100% satisfaction guarantee. Need something different? Let's talk.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Collection Preview */}
      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Pieces
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A selection of our most-loved items. Explore our full collection in each category.
            </p>
          </div>

          {/* Featured Grid Placeholder */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden border-border/50 group hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted animate-pulse" />
                <div className="p-4">
                  <div className="h-5 bg-muted rounded mb-2 animate-pulse" />
                  <div className="h-4 bg-muted rounded w-2/3 mb-4 animate-pulse" />
                  <div className="h-6 bg-muted rounded w-1/3 animate-pulse" />
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link href="/shop/woven">View All Woven Pieces</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Commission CTA */}
      <section className="w-full py-16 md:py-24 px-4 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Commission a custom piece. We'll work with you to create exactly what you envision—colors, size, pattern, everything.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/shop/commission">Start a Commission</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
