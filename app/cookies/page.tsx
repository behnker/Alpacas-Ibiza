import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/footer'

export default function CookiesPage() {
  return (
    <main>
      <Header />

      <Hero
        title="Cookie Policy"
        subtitle="Information about how we use cookies on our website"
      />

      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none text-foreground/70">
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            What Are Cookies?
          </h2>
          <p>
            Cookies are small text files stored on your browser. They help websites remember your preferences and track how you use the site.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Types of Cookies We Use
          </h2>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Essential Cookies
          </h3>
          <p>
            Required for the website to function. These include:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Session cookies (for your booking)</li>
            <li>Security cookies (to protect your data)</li>
            <li>Site functionality cookies</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Preference Cookies
          </h3>
          <p>
            Remember your choices (language, theme, etc.) for better experience.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Analytics Cookies
          </h3>
          <p>
            Help us understand how you use our site so we can improve it. We use:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Google Analytics (page views, traffic sources)</li>
            <li>Conversion tracking (booking, purchase tracking)</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">
            Marketing Cookies
          </h3>
          <p>
            Used for retargeting ads and remarketing campaigns. You can opt out anytime.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Your Cookie Choices
          </h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Essential cookies: Cannot be disabled (required for site function)</li>
            <li>Analytics & Marketing: Disable via our cookie banner</li>
            <li>Browser settings: Most browsers allow you to control cookies</li>
            <li>Opt-out: Use browser "Do Not Track" settings</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            Third-Party Services
          </h2>
          <p>
            We use third-party services that may set their own cookies:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Payment processors (for secure transactions)</li>
            <li>Booking systems (FareHarbor)</li>
            <li>Analytics providers</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            How to Manage Cookies
          </h2>
          <p>
            Most browsers allow you to:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>View stored cookies</li>
            <li>Delete specific cookies</li>
            <li>Block new cookies</li>
            <li>Set privacy levels</li>
          </ul>
          <p>
            See your browser documentation for specific instructions.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">
            GDPR Compliance
          </h2>
          <p>
            We comply with GDPR and ePrivacy regulations. We:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Only set non-essential cookies with your consent</li>
            <li>Provide clear cookie information</li>
            <li>Allow easy opt-out</li>
            <li>Respect your privacy choices</li>
          </ul>

          <p className="text-sm text-foreground/60 mt-8">
            Last updated: February 2024. Contact hello@alpacasibiza.com for cookie questions.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
