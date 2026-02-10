import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import type { Locale } from '@/i18n.config'

export default function AlcacaPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale

  const products = [
    {
      name: locale === 'en' ? 'Sample Pack (5L)' : locale === 'de' ? 'Probepaket (5L)' : locale === 'it' ? 'Pacco Campione (5L)' : locale === 'es' ? 'Paquete de Muestra (5L)' : locale === 'nl' ? 'Monsterpack (5L)' : 'Pack Échantillon (5L)',
      price: '€15',
      icon: '🌱',
    },
    {
      name: locale === 'en' ? 'Bulk (25L)' : locale === 'de' ? 'Großmenge (25L)' : locale === 'it' ? 'Sfuso (25L)' : locale === 'es' ? 'Granel (25L)' : locale === 'nl' ? 'Bulk (25L)' : 'Vrac (25L)',
      price: '€45',
      icon: '📦',
    },
    {
      name: locale === 'en' ? 'Wholesale (100L)' : locale === 'de' ? 'Großhandel (100L)' : locale === 'it' ? 'All\'ingrosso (100L)' : locale === 'es' ? 'Mayorista (100L)' : locale === 'nl' ? 'Groothandel (100L)' : 'Gros (100L)',
      price: '€140',
      icon: '🌍',
    },
  ]

  return (
    <main>
      <Header />

      <section className="w-full py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {locale === 'en' && 'Premium Alpaca Manure'}
            {locale === 'de' && 'Premium-Alpaka-Dünger'}
            {locale === 'it' && 'Letame di Alpaca Premium'}
            {locale === 'es' && 'Estiércol de Alpaca Premium'}
            {locale === 'nl' && 'Premium Alpacamest'}
            {locale === 'fr' && 'Fumier d\'Alpaca Premium'}
          </h1>
          <p className="text-lg text-foreground/70">
            {locale === 'en' && 'Rich in nutrients. Certified organic. Sustainably sourced from our farm.'}
            {locale === 'de' && 'Reich an Nährstoffen. Bio-zertifiziert. Nachhaltig von unserem Hof bezogen.'}
            {locale === 'it' && 'Ricco di nutrienti. Certificato biologico. Proveniente in modo sostenibile dalla nostra fattoria.'}
            {locale === 'es' && 'Rico en nutrientes. Certificado orgánico. Abastecido de manera sostenible desde nuestra granja.'}
            {locale === 'nl' && 'Rijk aan voedingsstoffen. Biologisch gecertificeerd. Duurzaam afkomstig van onze boerderij.'}
            {locale === 'fr' && 'Riche en nutriments. Certifié biologique. Provenance durable de notre ferme.'}
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {products.map((product, idx) => (
              <div key={idx} className="bg-card rounded-lg border border-border p-8 text-center hover:border-accent transition-colors">
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-accent font-bold text-2xl mb-6">{product.price}</p>
                <button className="w-full px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors">
                  {locale === 'en' && 'Order Now'}
                  {locale === 'de' && 'Jetzt Bestellen'}
                  {locale === 'it' && 'Ordina Ora'}
                  {locale === 'es' && 'Pedir Ahora'}
                  {locale === 'nl' && 'Bestel Nu'}
                  {locale === 'fr' && 'Commander Maintenant'}
                </button>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-lg border border-border p-8 md:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {locale === 'en' && 'Why Choose Alcaca?'}
              {locale === 'de' && 'Warum Alcaca wählen?'}
              {locale === 'it' && 'Perché Scegliere Alcaca?'}
              {locale === 'es' && '¿Por Qué Elegir Alcaca?'}
              {locale === 'nl' && 'Waarom Alcaca Kiezen?'}
              {locale === 'fr' && 'Pourquoi Choisir Alcaca?'}
            </h2>
            <ul className="space-y-4 text-foreground/70">
              <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>
                  {locale === 'en' && 'Nutrient-rich organic fertilizer perfect for vegetables, flowers, and herbs'}
                  {locale === 'de' && 'Nährstoffreiches Biofertilizer perfekt für Gemüse, Blumen und Kräuter'}
                  {locale === 'it' && 'Fertilizzante biologico ricco di nutrienti perfetto per verdure, fiori e erbe'}
                  {locale === 'es' && 'Fertilizante orgánico rico en nutrientes perfecto para verduras, flores y hierbas'}
                  {locale === 'nl' && 'Voedselrijke biologische meststof perfect voor groenten, bloemen en kruiden'}
                  {locale === 'fr' && 'Engrais biologique riche en nutriments parfait pour les légumes, fleurs et herbes'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>
                  {locale === 'en' && 'No harsh chemicals or artificial additives'}
                  {locale === 'de' && 'Keine harten Chemikalien oder künstlichen Zusätze'}
                  {locale === 'it' && 'Nessun prodotto chimico aggressivo o additivo artificiale'}
                  {locale === 'es' && 'Sin productos químicos agresivos ni aditivos artificiales'}
                  {locale === 'nl' && 'Geen harde chemicaliën of kunstmatige toevoegingen'}
                  {locale === 'fr' && 'Pas de produits chimiques agressifs ni d\'additifs artificiels'}
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent">✓</span>
                <span>
                  {locale === 'en' && 'Sustainable farming practices support our animal welfare mission'}
                  {locale === 'de' && 'Nachhaltige Anbaumethoden unterstützen unsere Tierwohlfahrtsmission'}
                  {locale === 'it' && 'Le pratiche agricole sostenibili supportano la nostra missione di benessere animale'}
                  {locale === 'es' && 'Las prácticas agrícolas sostenibles apoyan nuestra misión de bienestar animal'}
                  {locale === 'nl' && 'Duurzame landbouwpraktijken ondersteunen onze dierenwelzijnsmissie'}
                  {locale === 'fr' && 'Les pratiques agricoles durables soutiennent notre mission de bien-être animal'}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
