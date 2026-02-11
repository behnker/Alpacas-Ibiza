import Link from 'next/link'
import type { Locale } from '@/i18n.config'

export default function CommissionPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale

  return (
    <>
      <section className="w-full py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {locale === 'en' && 'Custom Commission'}
            {locale === 'de' && 'Benutzerdefinierte Bestellung'}
            {locale === 'it' && 'Commissione Personalizzata'}
            {locale === 'es' && 'Encargo Personalizado'}
            {locale === 'nl' && 'Aangepaste Bestelling'}
            {locale === 'fr' && 'Commande Personnalisée'}
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            {locale === 'en' && 'Create your dream piece with custom colors, patterns, and dimensions'}
            {locale === 'de' && 'Erstellen Sie Ihr Traumstück mit benutzerdefinierten Farben, Mustern und Abmessungen'}
            {locale === 'it' && 'Crea il tuo pezzo da sogno con colori, motivi e dimensioni personalizzate'}
            {locale === 'es' && 'Crea tu pieza de ensueño con colores, patrones y dimensiones personalizadas'}
            {locale === 'nl' && 'Maak je droomstuk met aangepaste kleuren, patronen en afmetingen'}
            {locale === 'fr' && 'Créez votre pièce de rêve avec des couleurs, motifs et dimensions personnalisés'}
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {locale === 'en' && 'Tell Us About Your Vision'}
              {locale === 'de' && 'Erzählen Sie uns von Ihrer Vision'}
              {locale === 'it' && 'Raccontaci della Tua Visione'}
              {locale === 'es' && 'Cuéntanos Sobre Tu Visión'}
              {locale === 'nl' && 'Vertel Ons Over Je Visie'}
              {locale === 'fr' && 'Parlez-nous de Votre Vision'}
            </h2>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {locale === 'en' && 'Your Name'}
                  {locale === 'de' && 'Dein Name'}
                  {locale === 'it' && 'Il Tuo Nome'}
                  {locale === 'es' && 'Tu Nombre'}
                  {locale === 'nl' && 'Je Naam'}
                  {locale === 'fr' && 'Votre Nom'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {locale === 'en' && 'Email'}
                  {locale === 'de' && 'E-Mail'}
                  {locale === 'it' && 'Email'}
                  {locale === 'es' && 'Correo'}
                  {locale === 'nl' && 'E-mailadres'}
                  {locale === 'fr' && 'Email'}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {locale === 'en' && 'Project Description'}
                  {locale === 'de' && 'Projektbeschreibung'}
                  {locale === 'it' && 'Descrizione del Progetto'}
                  {locale === 'es' && 'Descripción del Proyecto'}
                  {locale === 'nl' && 'Projectbeschrijving'}
                  {locale === 'fr' && 'Description du Projet'}
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
                {locale === 'en' && 'Submit Commission Request'}
                {locale === 'de' && 'Bestellungsanfrage Einreichen'}
                {locale === 'it' && 'Invia Richiesta di Commissione'}
                {locale === 'es' && 'Enviar Solicitud de Encargo'}
                {locale === 'nl' && 'Verzend Bestellingsverzoek'}
                {locale === 'fr' && 'Soumettre une Demande de Commande'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
