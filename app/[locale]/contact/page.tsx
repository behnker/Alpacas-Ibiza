import { t } from '@/lib/translations'
import type { Locale } from '@/i18n.config'

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale
  const translate = t(locale)

  return (
    <main>
      <section className="w-full py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {translate('contact.title')}
          </h1>
          <p className="text-lg text-foreground/70">
            {translate('contact.subtitle')}
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {translate('contact.formTitle')}
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {translate('contact.name')}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {translate('contact.email')}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {translate('contact.subject')}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {translate('contact.message')}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors"
              >
                {translate('contact.send')}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {translate('contact.infoTitle')}
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {translate('contact.location')}
                    </h3>
                    <p className="text-foreground/70">Ibiza, Spain</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {translate('contact.phone')}
                    </h3>
                    <p className="text-foreground/70">+34 971 XXX XXX</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {translate('contact.emailLabel')}
                    </h3>
                    <p className="text-foreground/70">hello@alpacasibiza.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">🕐</div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {translate('contact.hours')}
                    </h3>
                    <p className="text-foreground/70">
                      {translate('contact.byAppointment')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
