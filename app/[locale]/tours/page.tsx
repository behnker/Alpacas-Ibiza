import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Timeline } from '@/components/timeline'
import { FAQ } from '@/components/faq'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ToursPage() {
  const tourTypes = [
    {
      icon: '🦙',
      title: 'Meet the Herd',
      description: 'Connect with our alpacas, learn their personalities, and understand their care and welfare.',
    },
    {
      icon: '🧵',
      title: 'Weaving Workshop',
      description: 'Hands-on introduction to fiber arts. Try hand-processing, natural dyeing, or basic weaving.',
    },
    {
      icon: '🌄',
      title: 'Farm Experience',
      description: 'Explore the land, see our sustainable practices, and enjoy the Mediterranean landscape.',
    },
    {
      icon: '📸',
      title: 'Photo Session',
      description: 'Professional or personal photography with alpacas and scenic backdrops. Perfect for memories.',
    },
  ]

  const timelineItems = [
    {
      time: 'Arrival',
      title: 'Welcome & Orientation',
      description:
        'Meet your guide, receive an overview of the day, and learn farm guidelines. Settle in and let the calm take over.',
    },
    {
      time: 'Morning',
      title: 'Meet the Alpacas',
      description:
        'Spend time with our herd. Feed, pet, and learn the stories of our animals. Guides share insights on alpaca behavior and care.',
    },
    {
      time: 'Mid-day',
      title: 'Weaving Studio Tour',
      description:
        'Explore our studio. See the full process: fiber preparation, natural dyeing, traditional patterns, and final finishing.',
    },
    {
      time: 'Afternoon',
      title: 'Hands-On Activity',
      description:
        'Participate in a workshop or activity based on your interests: try hand-carding, dyeing, or simple weaving techniques.',
    },
    {
      time: 'Closing',
      title: 'Relax & Reflect',
      description:
        'Wind down with refreshments. Browse our shop. Ask final questions. Leave with a heart full of memories.',
    },
  ]

  const faqItems = [
    {
      question: 'How long is a typical tour?',
      answer:
        'Standard tours are 2–3 hours. Workshops and extended experiences can be customized. We recommend checking available time slots when booking.',
    },
    {
      question: 'What languages do you offer?',
      answer:
        'We offer tours in English, Spanish, and Dutch. If you need another language, please contact us.',
    },
    {
      question: 'Are visits suitable for children?',
      answer:
        'Yes! Tours are family-friendly. Children should be supervised, especially around the animals. We recommend ages 4+, but younger children can come with parental guidance.',
    },
    {
      question: 'What should I wear?',
      answer:
        'Wear comfortable, closed-toe shoes suitable for farm terrain. Bring sun protection in summer. Light layers are ideal, as the farm is outside. Avoid loud colors or strong perfumes to keep alpacas calm.',
    },
    {
      question: 'Is the farm accessible for people with disabilities?',
      answer:
        'Our farm is on natural terrain. Please contact us ahead to discuss accessibility and how we can accommodate your needs.',
    },
    {
      question: 'Can we bring food or drinks?',
      answer:
        'Outside food is not permitted, but we offer organic refreshments. We accommodate dietary restrictions—mention this when booking.',
    },
    {
      question: 'How do I book a tour?',
      answer:
        'Use our online booking system below to check availability and reserve your spot. Group bookings and custom experiences: contact us for options.',
    },
    {
      question: 'What if I need to cancel or reschedule?',
      answer:
        'Cancellations up to 48 hours before your tour receive a full refund or rebooking. Less notice incurs a 50% fee.',
    },
    {
      question: 'Do you offer private tours or group events?',
      answer:
        'Yes! We offer private farm experiences, weddings, corporate retreats, and alpaca yoga sessions. Contact us for custom packages.',
    },
    {
      question: 'Is there parking available?',
      answer:
        'Yes, free parking is available on-site. Spots are limited—arrive 15 minutes early to allow parking time.',
    },
  ]

  return (
    <>
      <Hero
        title="Visit Alpacas Ibiza"
        subtitle="Join us for an unforgettable farm experience. Meet our alpacas, learn artisanal weaving, and immerse yourself in Ibiza's peaceful countryside."
        cta={{
          label: 'Book Your Visit',
          href: 'https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes',
        }}
      />

      {/* Tour Types */}
      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tour Options
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Choose the experience that speaks to you
            </p>
          </div>
          <Features items={tourTypes} />
        </div>
      </section>

      {/* What to Expect */}
      <Timeline items={timelineItems} title="What to Expect on a Tour" />

      {/* Plan Your Visit Info */}
      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 border-border/50">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Operating Hours
              </h3>
              <p className="text-foreground/70 mb-3">
                Tours by appointment only. Availability varies by season.
              </p>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>Summer: Extended hours</li>
                <li>Winter: Limited availability</li>
                <li>Contact for exact times</li>
              </ul>
            </Card>

            <Card className="p-8 border-border/50">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Location
              </h3>
              <p className="text-foreground/70 mb-3">
                Ibiza, Spain
              </p>
              <p className="text-sm text-foreground/70">
                Private farm. Directions and parking info provided upon booking.
              </p>
            </Card>

            <Card className="p-8 border-border/50">
              <div className="text-4xl mb-4">💶</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Pricing
              </h3>
              <p className="text-foreground/70 mb-3">
                Starting at €30 per person
              </p>
              <p className="text-sm text-foreground/70">
                Custom experiences and group rates available
              </p>
            </Card>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Special Events & Private Bookings
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Weddings, photoshoots, alpaca yoga, workshops, corporate retreats—we create custom experiences tailored to your vision.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              <Link href="/contact">Request Custom Experience</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqItems} />

      {/* Booking Section */}
      <section
        id="booking"
        className="w-full py-16 md:py-24 px-4 bg-secondary/20"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Book?
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
              Check availability and secure your spot. Tours are limited to preserve the peaceful farm environment.
            </p>
          </div>

          {/* FareHarbor Integration */}
          <div className="flex flex-col items-center justify-center p-8 border border-border bg-background rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-center">Book Your Adventure</h3>
            <p className="text-foreground/70 mb-6 text-center max-w-md">
              Secure your spot instantly. No payment required until confirmation.
            </p>
            <a
              href="https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
            >
              Book Now
            </a>
            <p className="text-xs text-foreground/50 mt-4">
              Powered by FareHarbor
            </p>
          </div>

          <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-lg">
            <p className="text-sm text-foreground/70">
              <strong className="text-foreground">Questions?</strong> Contact us at hello@alpacasibiza.com or message via
              WhatsApp for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews Placeholder */}
      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Guest Stories
            </h2>
            <p className="text-foreground/70">
              See what visitors say about their experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 border-border/50">
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-foreground/70 mb-4 italic leading-relaxed">
                  "An unforgettable experience. The alpacas were wonderful, the guides were knowledgeable and warm, and the whole farm exuded peace and authenticity."
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Guest {i}
                </p>
                <p className="text-xs text-foreground/50">Visited recently</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
