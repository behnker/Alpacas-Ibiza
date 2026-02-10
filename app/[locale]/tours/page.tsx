import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Locale } from '@/i18n.config'

export default function ToursPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale

  return (
    <main>
      <Header />
      
      <section className="w-full py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {locale === 'en' && 'Book Your Alpaca Experience'}
            {locale === 'de' && 'Buchen Sie Ihr Alpaka-Erlebnis'}
            {locale === 'it' && 'Prenota la Tua Esperienza con gli Alpaca'}
            {locale === 'es' && 'Reserva Tu Experiencia con Alpacas'}
            {locale === 'nl' && 'Boek Je Alpaca-Ervaring'}
            {locale === 'fr' && 'Réservez Votre Expérience Alpaca'}
          </h1>
          <p className="text-lg text-foreground/70 mb-8">
            {locale === 'en' && 'Limited spots available by appointment. Each visit is intimate and personalized.'}
            {locale === 'de' && 'Begrenzte Plätze auf Anfrage. Jeder Besuch ist intim und persönlich.'}
            {locale === 'it' && 'Posti limitati disponibili su prenotazione. Ogni visita è intima e personalizzata.'}
            {locale === 'es' && 'Plazas limitadas disponibles previa cita. Cada visita es íntima y personalizada.'}
            {locale === 'nl' && 'Beperkte plekken op afspraak. Elk bezoek is intiem en persoonlijk.'}
            {locale === 'fr' && 'Places limitées disponibles sur rendez-vous. Chaque visite est intime et personnalisée.'}
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-sm border border-border p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {locale === 'en' && 'Reserve Your Visit'}
              {locale === 'de' && 'Reservieren Sie Ihren Besuch'}
              {locale === 'it' && 'Prenota la Tua Visita'}
              {locale === 'es' && 'Reserva Tu Visita'}
              {locale === 'nl' && 'Reserveer Je Bezoek'}
              {locale === 'fr' && 'Réservez Votre Visite'}
            </h2>
            <p className="text-foreground/70 mb-8">
              {locale === 'en' && 'Our booking system is powered by FareHarbor. Click the button below to select your preferred date and time.'}
              {locale === 'de' && 'Unser Buchungssystem wird von FareHarbor betrieben. Klicken Sie auf die Schaltfläche unten, um Ihr bevorzugtes Datum und Ihre bevorzugte Uhrzeit auszuwählen.'}
              {locale === 'it' && 'Il nostro sistema di prenotazione è gestito da FareHarbor. Fai clic sul pulsante sottostante per selezionare la data e l\'ora preferite.'}
              {locale === 'es' && 'Nuestro sistema de reserva es gestionado por FareHarbor. Haz clic en el botón de abajo para seleccionar tu fecha y hora preferidas.'}
              {locale === 'nl' && 'Ons reserveringssysteem wordt mogelijk gemaakt door FareHarbor. Klik op de knop hieronder om uw voorkeursdatum en -tijd te selecteren.'}
              {locale === 'fr' && 'Notre système de réservation est alimenté par FareHarbor. Cliquez sur le bouton ci-dessous pour sélectionner votre date et heure préférées.'}
            </p>
            
            <div className="bg-muted p-6 rounded-lg border-l-4 border-accent mb-8">
              <h3 className="font-semibold text-foreground mb-3">
                {locale === 'en' && 'FareHarbor Integration'}
                {locale === 'de' && 'FareHarbor-Integration'}
                {locale === 'it' && 'Integrazione FareHarbor'}
                {locale === 'es' && 'Integración de FareHarbor'}
                {locale === 'nl' && 'FareHarbor-integratie'}
                {locale === 'fr' && 'Intégration FareHarbor'}
              </h3>
              <p className="text-sm text-foreground/70">
                {locale === 'en' && 'To activate the FareHarbor booking widget, add your company ID in the environment variables. The booking form will appear here.'}
                {locale === 'de' && 'Um das FareHarbor-Buchungs-Widget zu aktivieren, fügen Sie Ihre Unternehmens-ID in den Umgebungsvariablen hinzu. Das Buchungsformular wird hier angezeigt.'}
                {locale === 'it' && 'Per attivare il widget di prenotazione FareHarbor, aggiungi il tuo ID azienda nelle variabili di ambiente. Il modulo di prenotazione apparirà qui.'}
                {locale === 'es' && 'Para activar el widget de reserva FareHarbor, añade tu ID de empresa en las variables de entorno. El formulario de reserva aparecerá aquí.'}
                {locale === 'nl' && 'Om de FareHarbor-reserveringswidget te activeren, voegt u uw bedrijfs-ID toe aan de omgevingsvariabelen. Het reserveringsformulier verschijnt hier.'}
                {locale === 'fr' && 'Pour activer le widget de réservation FareHarbor, ajoutez votre identifiant d\'entreprise dans les variables d\'environnement. Le formulaire de réservation apparaîtra ici.'}
              </p>
            </div>

            <a
              href={`/${locale}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors"
            >
              {locale === 'en' && 'Back to Home'}
              {locale === 'de' && 'Zurück zur Startseite'}
              {locale === 'it' && 'Torna a Casa'}
              {locale === 'es' && 'Volver a Inicio'}
              {locale === 'nl' && 'Terug naar Home'}
              {locale === 'fr' && 'Retour à l\'Accueil'}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
