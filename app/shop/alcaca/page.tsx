import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AlcacaPage() {
  const packages = [
    {
      id: 'sample',
      name: 'Sample Pack',
      size: '5 kg',
      price: 19.99,
      description: 'Perfect for testing or small garden areas',
      benefits: ['Try before buying more', 'Great for potted plants', 'Free shipping in EU'],
    },
    {
      id: 'garden',
      name: 'Garden Pack',
      size: '25 kg',
      price: 59.99,
      description: 'Ideal for home gardens and vegetable plots',
      benefits: ['Covers ~50 sq meters', 'Most popular option', 'Discounted shipping'],
      popular: true,
    },
    {
      id: 'bulk',
      name: 'Bulk Pack',
      size: '50 kg',
      price: 99.99,
      description: 'For larger gardens, farms, or landscapers',
      benefits: ['Covers ~100 sq meters', 'Best value', 'Volume discount available'],
    },
  ]

  const useCases = [
    {
      icon: '🌱',
      title: 'Vegetable Gardens',
      description: 'Mix into soil for nutrient-rich beds. Perfect for tomatoes, peppers, and root vegetables.',
    },
    {
      icon: '🌸',
      title: 'Flower Beds',
      description: 'Top dressing for perennials and annuals. Gentle yet effective nutrient boost.',
    },
    {
      icon: '🪴',
      title: 'Potted Plants',
      description: 'Mix with potting soil for container gardens. Ideal for indoor and outdoor plants.',
    },
    {
      icon: '🌳',
      title: 'Tree & Shrub Care',
      description: 'Mulch around base for moisture retention and gradual nutrient release.',
    },
    {
      icon: '🥬',
      title: 'Composting',
      description: 'Layer in compost pile for faster decomposition and richer final product.',
    },
    {
      icon: '🌾',
      title: 'Farming & Landscaping',
      description: 'Bulk orders for commercial operations. Contact for volume pricing.',
    },
  ]

  return (
    <main>
      <Header />

      <Hero
        title="Alpaca Manure: Oro Negro"
        subtitle="Premium, nutrient-rich alpaca manure for organic gardening. 100% natural, sustainably produced on our farm. Perfect for vegetables, flowers, and composting."
      />

      {/* Product Overview */}
      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Alpaca Manure?
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Alpaca manure is a gardener's secret weapon. Unlike many other herbivore manures, alpaca manure is low in ammonia, making it gentle enough for direct application without burning plants.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Our Oro Negro (Black Gold) is:
              </p>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> Rich in nutrients (nitrogen, phosphorus, potassium)
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> Safe for direct application (low ammonia)
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> 100% organic and pesticide-free
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> Improves soil structure and water retention
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> Collected fresh from our farm
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span> Sustainably produced, supports our farm
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 rounded-lg p-12 text-center">
              <div className="text-7xl mb-4">🥑</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Oro Negro
              </h3>
              <p className="text-foreground/70 mb-6">
                Premium alpaca manure. Fresh from our farm. Ready to transform your garden.
              </p>
              <div className="bg-background rounded-lg p-6">
                <p className="text-sm text-foreground/70 mb-3">
                  <strong>Nutrient Content (approx.)</strong>
                </p>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>Nitrogen (N): 2-3%</li>
                  <li>Phosphorus (P): 1-1.5%</li>
                  <li>Potassium (K): 2-3%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="w-full py-16 md:py-24 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Pack
            </h2>
            <p className="text-foreground/70">
              Pick the size that fits your garden. Bulk orders? Contact us for custom quotes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {packages.map((pkg) => (
              <Card
                key={pkg.id}
                className={`p-8 border-border/50 relative transition-all hover:shadow-lg ${
                  pkg.popular ? 'ring-2 ring-accent' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-foreground/70 mb-4">{pkg.size}</p>
                <p className="text-foreground/70 text-sm mb-6">{pkg.description}</p>

                <div className="text-3xl font-bold text-accent mb-6">
                  €{pkg.price}
                </div>

                <ul className="space-y-2 mb-8">
                  {pkg.benefits.map((benefit, i) => (
                    <li key={i} className="text-sm text-foreground/70 flex gap-2">
                      <span className="text-accent">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full ${
                    pkg.popular
                      ? 'bg-accent hover:bg-accent/90 text-accent-foreground'
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  }`}
                >
                  <Link href="#order-form">Order Now</Link>
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center text-foreground/70 text-sm">
            Free shipping for EU orders over €50. International shipping available.
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How to Use Alpaca Manure
            </h2>
            <p className="text-foreground/70">
              Versatile, effective, and easy to apply
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, i) => (
              <Card key={i} className="p-6 border-border/50">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {useCase.title}
                </h3>
                <p className="text-foreground/70">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="w-full py-16 md:py-24 px-4 bg-secondary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How to Apply
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: '1. Prepare',
                desc: 'Clear the area of weeds. For new garden beds, loosen soil 6–8 inches deep.',
              },
              {
                step: '2. Spread',
                desc: 'Distribute 1–2 inches of alpaca manure over the surface. Mix into top 3–4 inches of soil.',
              },
              {
                step: '3. Water',
                desc: 'Water thoroughly to help manure settle and nutrients distribute.',
              },
              {
                step: '4. Wait',
                desc: 'Let settle for 1–2 weeks before planting, or use immediately (it\'s safe!).',
              },
              {
                step: '5. Plant',
                desc: 'Plant seeds or seedlings. Watch your garden thrive!',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  {item.step.split('.')[0]}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.step}</h3>
                  <p className="text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Gardeners Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 border-border/50">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-foreground/70 mb-4 italic">
                  "The best manure I've used. My tomatoes have never been healthier, and there's no smell. Highly recommend!"
                </p>
                <p className="text-sm font-semibold text-foreground">Gardener {i}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order-form" className="w-full py-16 md:py-24 px-4 bg-secondary/20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Order Your Oro Negro
            </h2>
            <p className="text-foreground/70">
              Transform your garden starting today
            </p>
          </div>

          <Card className="p-8 border-border/50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Package
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Choose a package...</option>
                  <option>Sample Pack (5 kg) - €19.99</option>
                  <option>Garden Pack (25 kg) - €59.99</option>
                  <option>Bulk Pack (50 kg) - €99.99</option>
                  <option>Custom bulk order</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Shipping Address
                </label>
                <textarea
                  placeholder="Enter your full shipping address"
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Special Instructions (optional)
                </label>
                <input
                  type="text"
                  placeholder="E.g., delivery date preference, specific requests"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Proceed to Checkout
              </Button>

              <p className="text-xs text-foreground/50 text-center">
                You will be directed to our secure payment system to complete your order.
              </p>
            </form>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}
