import Link from 'next/link'
import type { Locale } from '@/i18n.config'
import { t } from '@/lib/translations'

export default function CommissionPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale
  const translate = t(locale)

  return (
    <>
      <section className="w-full py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {translate('commissionPage.title')}
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            {translate('commissionPage.subtitle')}
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {translate('commissionPage.formTitle')}
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {translate('commissionPage.name')}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {translate('commissionPage.email')}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {translate('commissionPage.description')}
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder=""
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors"
              >
                {translate('commissionPage.submit')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
