import { Hero } from '@/components/hero'
import { Features } from '@/components/features'
import { Timeline } from '@/components/timeline'
import { FAQ } from '@/components/faq'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { t } from '@/lib/translations'
import type { Locale } from '@/i18n.config'

export default function ToursPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale
  const translate = t(locale)

  const tourTypes = [
    {
      icon: '🦙',
      title: translate('tours.tourTypes.meetHerd.title'),
      description: translate('tours.tourTypes.meetHerd.description'),
    },
    {
      icon: '🧵',
      title: translate('tours.tourTypes.weaving.title'),
      description: translate('tours.tourTypes.weaving.description'),
    },
    {
      icon: '🌄',
      title: translate('tours.tourTypes.farm.title'),
      description: translate('tours.tourTypes.farm.description'),
    },
    {
      icon: '📸',
      title: translate('tours.tourTypes.photo.title'),
      description: translate('tours.tourTypes.photo.description'),
    },
  ]

  const timelineItems = [
    {
      time: translate('tours.timeline.arrival.time'),
      title: translate('tours.timeline.arrival.title'),
      description: translate('tours.timeline.arrival.description'),
    },
    {
      time: translate('tours.timeline.morning.time'),
      title: translate('tours.timeline.morning.title'),
      description: translate('tours.timeline.morning.description'),
    },
    {
      time: translate('tours.timeline.midday.time'),
      title: translate('tours.timeline.midday.title'),
      description: translate('tours.timeline.midday.description'),
    },
    {
      time: translate('tours.timeline.afternoon.time'),
      title: translate('tours.timeline.afternoon.title'),
      description: translate('tours.timeline.afternoon.description'),
    },
    {
      time: translate('tours.timeline.closing.time'),
      title: translate('tours.timeline.closing.title'),
      description: translate('tours.timeline.closing.description'),
    },
  ]

  const faqItems = [
    {
      question: translate('faq.duration.q'),
      answer: translate('faq.duration.a'),
    },
    {
      question: translate('faq.languages.q'),
      answer: translate('faq.languages.a'),
    },
    {
      question: translate('faq.children.q'),
      answer: translate('faq.children.a'),
    },
    {
      question: translate('faq.wear.q'),
      answer: translate('faq.wear.a'),
    },
    {
      question: translate('faq.accessibility.q'),
      answer: translate('faq.accessibility.a'),
    },
    {
      question: translate('faq.food.q'),
      answer: translate('faq.food.a'),
    },
    {
      question: translate('faq.booking.q'),
      answer: translate('faq.booking.a'),
    },
    {
      question: translate('faq.cancellation.q'),
      answer: translate('faq.cancellation.a'),
    },
    {
      question: translate('faq.private.q'),
      answer: translate('faq.private.a'),
    },
    {
      question: translate('faq.parking.q'),
      answer: translate('faq.parking.a'),
    },
  ]

  return (
    <>
      <Hero
        title={translate('tours.heroTitle')}
        subtitle={translate('tours.heroSubtitle')}
        cta={{
          label: translate('tours.heroCta'),
          href: 'https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes',
        }}
      />

      {/* Tour Types */}
      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {translate('tours.tourOptionsTitle')}
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              {translate('tours.tourOptionsSubtitle')}
            </p>
          </div>
          <Features items={tourTypes} />
        </div>
      </section>

      {/* What to Expect */}
      <Timeline items={timelineItems} title={translate('tours.timelineTitle')} />

      {/* Plan Your Visit Info */}
      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 border-border/50">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {translate('tours.planVisit.hours.title')}
              </h3>
              <p className="text-foreground/70 mb-3">
                {translate('tours.planVisit.hours.description')}
              </p>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>{translate('tours.planVisit.hours.summer')}</li>
                <li>{translate('tours.planVisit.hours.winter')}</li>
                <li>{translate('tours.planVisit.hours.contact')}</li>
              </ul>
            </Card>

            <Card className="p-8 border-border/50">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {translate('tours.planVisit.location.title')}
              </h3>
              <p className="text-foreground/70 mb-3">
                {translate('tours.planVisit.location.description')}
              </p>
              <p className="text-sm text-foreground/70">
                {translate('tours.planVisit.location.details')}
              </p>
            </Card>

            <Card className="p-8 border-border/50">
              <div className="text-4xl mb-4">💶</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {translate('tours.planVisit.pricing.title')}
              </h3>
              <p className="text-foreground/70 mb-3">
                {translate('tours.planVisit.pricing.starting')}
              </p>
              <p className="text-sm text-foreground/70">
                {translate('tours.planVisit.pricing.custom')}
              </p>
            </Card>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {translate('tours.planVisit.specialEvents.title')}
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              {translate('tours.planVisit.specialEvents.description')}
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              <Link href={`/${locale}/contact`}>{translate('tours.planVisit.specialEvents.cta')}</Link>
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
              {translate('tours.bookingSection.title')}
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
              {translate('tours.bookingSection.subtitle')}
            </p>
          </div>

          {/* FareHarbor Integration */}
          <div className="flex flex-col items-center justify-center p-8 border border-border bg-background rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-4 text-center">{translate('tours.bookingSection.cardTitle')}</h3>
            <p className="text-foreground/70 mb-6 text-center max-w-md">
              {translate('tours.bookingSection.cardSubtitle')}
            </p>
            <a
              href="https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
            >
              {translate('tours.bookingSection.bookNow')}
            </a>
            <p className="text-xs text-foreground/50 mt-4">
              {translate('tours.bookingSection.poweredBy')}
            </p>
          </div>

          <div className="mt-8 p-6 bg-accent/10 border border-accent/20 rounded-lg">
            <p className="text-sm text-foreground/70">
              <strong className="text-foreground">{translate('tours.bookingSection.questions')}</strong> {translate('tours.bookingSection.questionsText')}
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof / Reviews Placeholder */}
      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {translate('tours.guestStories.title')}
            </h2>
            <p className="text-foreground/70">
              {translate('tours.guestStories.subtitle')}
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
                  "{translate('tours.guestStories.testimonial')}"
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {translate('tours.guestStories.guest')} {i}
                </p>
                <p className="text-xs text-foreground/50">{translate('tours.guestStories.visited')}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
