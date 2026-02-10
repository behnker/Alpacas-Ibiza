import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  return (
    <main>
      <Header />

      <Hero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
      />

      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none text-foreground/70">
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p>
            We collect information you provide directly:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Tour booking details (name, email, phone)</li>
            <li>Shop order information (shipping address, payment info)</li>
            <li>Commission inquiries (project details, preferences)</li>
            <li>Newsletter signup (email address)</li>
            <li>Contact form submissions</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Fulfill tour bookings and orders</li>
            <li>Send confirmation emails and updates</li>
            <li>Respond to inquiries</li>
            <li>Improve our website and services</li>
            <li>Send newsletters (you can unsubscribe anytime)</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            3. Data Protection
          </h2>
          <p>
            We take your privacy seriously. Your data is encrypted and stored securely. We do not share your information with third parties except:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Payment processors (for secure transactions)</li>
            <li>Booking systems (FareHarbor, as needed)</li>
            <li>Legal requirements (when required by law)</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            4. Cookies & Tracking
          </h2>
          <p>
            We use cookies to improve your experience. Essential cookies are required for functionality. You can control cookie preferences in your browser or our cookie banner.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            5. Your Rights
          </h2>
          <p>
            You have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Access your data</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion (right to be forgotten)</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <p className="text-sm text-foreground/60 mt-8">
            Last updated: February 2024. Contact us at hello@alpacasibiza.com for privacy inquiries.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
