import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/footer'

export default function TermsPage() {
  return (
    <main>
      <Header />

      <Hero
        title="Terms of Service"
        subtitle="Please read these terms before using our website and booking services"
      />

      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none text-foreground/70">
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            1. Booking & Tours
          </h2>
          <p>
            By booking a tour, you agree to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Follow all farm and animal safety guidelines</li>
            <li>Arrive 15 minutes before your scheduled time</li>
            <li>Respect the alpacas and farm property</li>
            <li>Bring valid ID if required</li>
            <li>Follow any health/safety protocols in place</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            2. Cancellation & Refunds
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Cancel up to 48 hours before: Full refund or reschedule</li>
            <li>Cancel less than 48 hours: 50% fee applies</li>
            <li>No-show: Full payment forfeited</li>
            <li>Weather-related closure: Full refund or reschedule</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            3. Shop Orders
          </h2>
          <p>
            All products are handmade. Minor variations and imperfections are normal and part of the artisanal process.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Shipping within 5-7 business days of order</li>
            <li>International orders may take longer</li>
            <li>Returns: 30 days for unused, undamaged items</li>
            <li>Custom/commissioned items are non-returnable</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            4. Commission Agreements
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>50% deposit required to secure your project</li>
            <li>Balance due before final shipment</li>
            <li>Timeline estimates are approximate</li>
            <li>Cancellation after production begins: 50% refund only</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            5. Photography & Consent
          </h2>
          <p>
            By visiting our farm or purchasing our products, you consent to being photographed. These images may be used on our website and social media. If you prefer not to be photographed, let your guide know.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            6. Liability Waiver
          </h2>
          <p>
            Farm visits involve interaction with animals. Visitors assume all risks. We are not liable for injuries unless caused by gross negligence. Children must be supervised at all times.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            7. Website Use
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Do not reproduce or redistribute our content without permission</li>
            <li>Do not attempt to hack or interfere with the website</li>
            <li>Respect intellectual property rights</li>
          </ul>

          <p className="text-sm text-foreground/60 mt-8">
            Last updated: February 2024. Contact hello@alpacasibiza.com with questions.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
