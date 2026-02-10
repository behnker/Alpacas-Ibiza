import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CommissionPage() {
  const processSteps = [
    {
      number: '1',
      title: 'Start Your Project',
      description: 'Tell us your vision. Share inspiration, reference images, or a detailed brief.',
    },
    {
      number: '2',
      title: 'Consultation',
      description: 'We discuss colors, dimensions, materials, patterns, and your timeline.',
    },
    {
      number: '3',
      title: 'Design & Quote',
      description: 'You receive a proposal with design mockups and a clear price quote.',
    },
    {
      number: '4',
      title: 'Approval & Payment',
      description: 'Approve the design, pay a deposit (50%), and we begin weaving.',
    },
    {
      number: '5',
      title: 'Creation',
      description: 'Your piece comes to life. We send progress updates as we work.',
    },
    {
      number: '6',
      title: 'Final & Delivery',
      description: 'Final payment (50%), quality check, and your commission ships to you.',
    },
  ]

  const examples = [
    {
      title: 'Custom Wedding Throws',
      description: 'Personalized blankets for your ceremony or reception',
    },
    {
      title: 'Interior Design Pieces',
      description: 'Tapestries, cushions, and wall hangings matching your palette',
    },
    {
      title: 'Corporate Gifts',
      description: 'Branded scarves or bespoke pieces for clients and partners',
    },
    {
      title: 'Personal Collections',
      description: 'One-of-a-kind wearables, heirlooms, or art installations',
    },
    {
      title: 'Sustainable Fashion',
      description: 'Custom garments or accessories in your design and materials',
    },
    {
      title: 'Eco-Home Décor',
      description: 'Bespoke rugs, runners, or wall coverings from natural fibers',
    },
  ]

  return (
    <main>
      <Header />

      <Hero
        title="Commission a Custom Piece"
        subtitle="Work with our artisans to create something uniquely yours. Custom colors, dimensions, patterns, and materials—built exactly to your vision."
        cta={{
          label: 'Start Your Commission',
          href: '#commission-form',
        }}
      />

      {/* The Commission Process */}
      <section className="w-full py-16 md:py-24 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How Commissions Work
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              A simple, collaborative process from idea to creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <Card key={i} className="p-6 border-border/50 relative">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-foreground/70">{step.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 bg-accent/10 border border-accent/20 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Timeline & Investment
            </h3>
            <p className="text-foreground/70 mb-4">
              Most commissions take 4–8 weeks from approval. Prices start at €150 and vary based on complexity and materials. A 50% deposit secures your project.
            </p>
          </div>
        </div>
      </section>

      {/* Examples of What We Create */}
      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Can Create
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              From intimate pieces to large installations, here are some ideas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examples.map((example, i) => (
              <Card key={i} className="p-6 border-border/50 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {example.title}
                </h3>
                <p className="text-foreground/70">{example.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Form Section */}
      <section
        id="commission-form"
        className="w-full py-16 md:py-24 px-4 bg-secondary/20"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Begin?
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Fill out the form below and let's start creating your custom piece.
            </p>
          </div>

          <Card className="p-8 border-border/50">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  placeholder="+34 600 000 000"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Type
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select a type...</option>
                  <option>Wall Hanging / Tapestry</option>
                  <option>Throw Blanket</option>
                  <option>Wearable (scarf, wrap, etc.)</option>
                  <option>Cushion / Pillow</option>
                  <option>Rug / Runner</option>
                  <option>Installation / Large Piece</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Describe Your Vision
                </label>
                <textarea
                  placeholder="Tell us what you're imagining. Colors, size, style, inspiration, anything helpful..."
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Budget Range (€)
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>I'm flexible</option>
                  <option>€150 - €300</option>
                  <option>€300 - €600</option>
                  <option>€600 - €1,200</option>
                  <option>€1,200+</option>
                </select>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="mt-1 w-4 h-4 rounded border-input"
                  />
                  <span className="text-sm text-foreground/70">
                    I'd like to receive updates on new collections and workshops
                  </span>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Submit Commission Request
              </Button>

              <p className="text-xs text-foreground/50 text-center">
                We'll get back to you within 24 hours to discuss your project further.
              </p>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Commission FAQ
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'Can you match a specific color?',
                a: 'Yes! We work with natural dyes. Send us a color reference or swatch, and we\'ll match as closely as possible.',
              },
              {
                q: 'How long does a commission take?',
                a: 'Typically 4–8 weeks from approval, depending on complexity and our current queue. Urgent commissions may be possible.',
              },
              {
                q: 'What if I don\'t love the final piece?',
                a: 'Quality and satisfaction are our priorities. We work closely with you throughout the process to ensure you\'re happy.',
              },
              {
                q: 'Can I see a sample or mockup first?',
                a: 'Absolutely. We provide design sketches or mockups for approval before production begins.',
              },
              {
                q: 'Do you ship internationally?',
                a: 'Yes! Commissions ship worldwide. International shipping costs apply.',
              },
              {
                q: 'What\'s your cancellation policy?',
                a: 'Full refund if cancelled before production begins. After production starts, refunds are 50% unless a defect occurred on our end.',
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-semibold text-foreground mb-2">Q: {item.q}</h3>
                <p className="text-foreground/70">A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
