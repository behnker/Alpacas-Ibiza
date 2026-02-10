import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Locale } from '@/i18n.config'

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale

  return (
    <main>
      <Header />

      <section className="w-full py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {locale === 'en' && 'Get in Touch'}
            {locale === 'de' && 'Kontaktieren Sie uns'}
            {locale === 'it' && 'Contattaci'}
            {locale === 'es' && 'Ponte en Contacto'}
            {locale === 'nl' && 'Neem Contact op'}
            {locale === 'fr' && 'Nous Contacter'}
          </h1>
          <p className="text-lg text-foreground/70">
            {locale === 'en' && 'Have questions? We\'d love to hear from you!'}
            {locale === 'de' && 'Haben Sie Fragen? Wir würden uns freuen, von Ihnen zu hören!'}
            {locale === 'it' && 'Hai domande? Ci piacerebbe sentire da te!'}
            {locale === 'es' && '¿Tienes preguntas? ¡Nos encantaría escucharte!'}
            {locale === 'nl' && 'Vragen? We horen graag van je!'}
            {locale === 'fr' && 'Vous avez des questions? Nous aimerions vous entendre!'}
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {locale === 'en' && 'Send us a Message'}
              {locale === 'de' && 'Senden Sie uns eine Nachricht'}
              {locale === 'it' && 'Inviaci un Messaggio'}
              {locale === 'es' && 'Envíanos un Mensaje'}
              {locale === 'nl' && 'Stuur ons een Bericht'}
              {locale === 'fr' && 'Envoyez-nous un Message'}
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {locale === 'en' && 'Name'}
                  {locale === 'de' && 'Name'}
                  {locale === 'it' && 'Nome'}
                  {locale === 'es' && 'Nombre'}
                  {locale === 'nl' && 'Naam'}
                  {locale === 'fr' && 'Nom'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground"
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
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {locale === 'en' && 'Subject'}
                  {locale === 'de' && 'Betreff'}
                  {locale === 'it' && 'Oggetto'}
                  {locale === 'es' && 'Asunto'}
                  {locale === 'nl' && 'Onderwerp'}
                  {locale === 'fr' && 'Sujet'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background text-foreground"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {locale === 'en' && 'Message'}
                  {locale === 'de' && 'Nachricht'}
                  {locale === 'it' && 'Messaggio'}
                  {locale === 'es' && 'Mensaje'}
                  {locale === 'nl' && 'Bericht'}
                  {locale === 'fr' && 'Message'}
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
                {locale === 'en' && 'Send Message'}
                {locale === 'de' && 'Nachricht Senden'}
                {locale === 'it' && 'Invia Messaggio'}
                {locale === 'es' && 'Enviar Mensaje'}
                {locale === 'nl' && 'Bericht Verzenden'}
                {locale === 'fr' && 'Envoyer un Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {locale === 'en' && 'Contact Information'}
                {locale === 'de' && 'Kontaktinformationen'}
                {locale === 'it' && 'Informazioni di Contatto'}
                {locale === 'es' && 'Información de Contacto'}
                {locale === 'nl' && 'Contactinformatie'}
                {locale === 'fr' && 'Informations de Contact'}
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {locale === 'en' && 'Location'}
                      {locale === 'de' && 'Standort'}
                      {locale === 'it' && 'Posizione'}
                      {locale === 'es' && 'Ubicación'}
                      {locale === 'nl' && 'Locatie'}
                      {locale === 'fr' && 'Localisation'}
                    </h3>
                    <p className="text-foreground/70">Ibiza, Spain</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {locale === 'en' && 'Phone'}
                      {locale === 'de' && 'Telefon'}
                      {locale === 'it' && 'Telefono'}
                      {locale === 'es' && 'Teléfono'}
                      {locale === 'nl' && 'Telefoon'}
                      {locale === 'fr' && 'Téléphone'}
                    </h3>
                    <p className="text-foreground/70">+34 971 XXX XXX</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {locale === 'en' && 'Email'}
                      {locale === 'de' && 'E-Mail'}
                      {locale === 'it' && 'Email'}
                      {locale === 'es' && 'Correo'}
                      {locale === 'nl' && 'E-mail'}
                      {locale === 'fr' && 'Email'}
                    </h3>
                    <p className="text-foreground/70">hello@alpacasibiza.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">🕐</div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {locale === 'en' && 'Hours'}
                      {locale === 'de' && 'Öffnungszeiten'}
                      {locale === 'it' && 'Orari'}
                      {locale === 'es' && 'Horario'}
                      {locale === 'nl' && 'Openingstijden'}
                      {locale === 'fr' && 'Heures'}
                    </h3>
                    <p className="text-foreground/70">
                      {locale === 'en' && 'By appointment only'}
                      {locale === 'de' && 'Nur nach Vereinbarung'}
                      {locale === 'it' && 'Solo su appuntamento'}
                      {locale === 'es' && 'Solo previa cita'}
                      {locale === 'nl' && 'Alleen op afspraak'}
                      {locale === 'fr' && 'Sur rendez-vous uniquement'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
