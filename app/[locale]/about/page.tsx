import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Locale } from '@/i18n.config'

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale

  return (
    <main>
      <Header />

      <section className="w-full py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {locale === 'en' && 'About Alpacas Ibiza'}
            {locale === 'de' && 'Über Alpacas Ibiza'}
            {locale === 'it' && 'Su Alpacas Ibiza'}
            {locale === 'es' && 'Acerca de Alpacas Ibiza'}
            {locale === 'nl' && 'Over Alpacas Ibiza'}
            {locale === 'fr' && 'À Propos d\'Alpacas Ibiza'}
          </h1>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {locale === 'en' && 'Our Story'}
              {locale === 'de' && 'Unsere Geschichte'}
              {locale === 'it' && 'La Nostra Storia'}
              {locale === 'es' && 'Nuestra Historia'}
              {locale === 'nl' && 'Ons Verhaal'}
              {locale === 'fr' && 'Notre Histoire'}
            </h2>
            <p className="text-foreground/70 mb-4">
              {locale === 'en' && 'Alpacas Ibiza was founded on the belief that tourism can be meaningful, artisanal, and deeply connected to animal welfare. We created the first alpaca farm on the island to share our passion for these gentle creatures and their incredible fiber.'}
              {locale === 'de' && 'Alpacas Ibiza wurde gegründet in dem Glauben, dass Tourismus bedeutungsvoll, handwerklich und tief mit Tierwohlfahrt verbunden sein kann. Wir haben die erste Alpakafarm auf der Insel gegründet, um unsere Leidenschaft für diese sanften Geschöpfe und ihre unglaubliche Faser zu teilen.'}
              {locale === 'it' && 'Alpacas Ibiza è stato fondato sulla convinzione che il turismo possa essere significativo, artigianale e profondamente connesso al benessere degli animali. Abbiamo creato la prima fattoria di alpaca sull\'isola per condividere la nostra passione per queste creature gentili e la loro fibra incredibile.'}
              {locale === 'es' && 'Alpacas Ibiza fue fundada en la creencia de que el turismo puede ser significativo, artesanal y profundamente conectado con el bienestar animal. Creamos la primera granja de alpacas de la isla para compartir nuestra pasión por estas criaturas gentiles y su fibra increíble.'}
              {locale === 'nl' && 'Alpacas Ibiza werd opgericht in het geloof dat toerisme betekenisvol, ambachtelijk en diep verbonden met dierenwelzijn kan zijn. We creëerden de eerste alpacaboerderij op het eiland om onze passie voor deze zachte wezens en hun ongelooflijke vezels te delen.'}
              {locale === 'fr' && 'Alpacas Ibiza a été fondée sur la conviction que le tourisme peut être significatif, artisanal et profondément lié au bien-être animal. Nous avons créé la première ferme d\'alpacas de l\'île pour partager notre passion pour ces créatures douces et leurs fibres incroyables.'}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {locale === 'en' && 'Our Values'}
              {locale === 'de' && 'Unsere Werte'}
              {locale === 'it' && 'I Nostri Valori'}
              {locale === 'es' && 'Nuestros Valores'}
              {locale === 'nl' && 'Onze Waarden'}
              {locale === 'fr' && 'Nos Valeurs'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: locale === 'en' ? 'Animal Welfare' : locale === 'de' ? 'Tierwohlfahrt' : locale === 'it' ? 'Benessere Animale' : locale === 'es' ? 'Bienestar Animal' : locale === 'nl' ? 'Dierenwelzijn' : 'Bien-être Animal',
                  description: locale === 'en' ? 'Our alpacas come first in every decision' : locale === 'de' ? 'Unsere Alpakas stehen in jeder Entscheidung an erster Stelle' : locale === 'it' ? 'I nostri alpaca vengono prima in ogni decisione' : locale === 'es' ? 'Nuestras alpacas vienen primero en cada decisión' : locale === 'nl' ? 'Onze alpaca\'s gaan in elke beslissing voor' : 'Nos alpacas passent en premier dans chaque décision',
                },
                {
                  title: locale === 'en' ? 'Sustainability' : locale === 'de' ? 'Nachhaltigkeit' : locale === 'it' ? 'Sostenibilità' : locale === 'es' ? 'Sostenibilidad' : locale === 'nl' ? 'Duurzaamheid' : 'Durabilité',
                  description: locale === 'en' ? 'Organic practices and environmental responsibility' : locale === 'de' ? 'Biologische Praktiken und Umweltverantwortung' : locale === 'it' ? 'Pratiche biologiche e responsabilità ambientale' : locale === 'es' ? 'Prácticas orgánicas y responsabilidad ambiental' : locale === 'nl' ? 'Biologische praktijken en milieuverantwoordelijkheid' : 'Pratiques biologiques et responsabilité environnementale',
                },
                {
                  title: locale === 'en' ? 'Artisanal Quality' : locale === 'de' ? 'Handwerkliche Qualität' : locale === 'it' ? 'Qualità Artigianale' : locale === 'es' ? 'Calidad Artesanal' : locale === 'nl' ? 'Ambachtelijke Kwaliteit' : 'Qualité Artisanale',
                  description: locale === 'en' ? 'Hand-processed, hand-checked, hand-cared for' : locale === 'de' ? 'Handverarbeitet, handgeprüft, handbetreut' : locale === 'it' ? 'Lavorato a mano, controllato a mano, curato a mano' : locale === 'es' ? 'Procesado a mano, verificado a mano, cuidado a mano' : locale === 'nl' ? 'Met de hand verwerkt, met de hand gecontroleerd, met de hand verzorgd' : 'Transformé à la main, vérifié à la main, soigné à la main',
                },
                {
                  title: locale === 'en' ? 'Community' : locale === 'de' ? 'Gemeinschaft' : locale === 'it' ? 'Comunità' : locale === 'es' ? 'Comunidad' : locale === 'nl' ? 'Gemeenschap' : 'Communauté',
                  description: locale === 'en' ? 'Sharing knowledge and creating connections' : locale === 'de' ? 'Wissen teilen und Verbindungen schaffen' : locale === 'it' ? 'Condivisione della conoscenza e creazione di connessioni' : locale === 'es' ? 'Compartir conocimientos y crear conexiones' : locale === 'nl' ? 'Kennis delen en verbindingen creëren' : 'Partager les connaissances et créer des connexions',
                },
              ].map((value, idx) => (
                <div key={idx} className="bg-card rounded-lg border border-border p-6">
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
