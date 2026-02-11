import Link from 'next/link'
import type { Locale } from '@/i18n.config'

export default function ShopPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale

  const shopCategories = [
    {
      title: locale === 'en' ? 'Woven Collection' : locale === 'de' ? 'Gewobene Kollektion' : locale === 'it' ? 'Collezione Tessuta' : locale === 'es' ? 'Colección Tejida' : locale === 'nl' ? 'Geweven Collectie' : 'Collection Tissée',
      description: locale === 'en' ? 'Handcrafted scarves, blankets, and textiles' : locale === 'de' ? 'Handgefertigte Schals, Decken und Textilien' : locale === 'it' ? 'Sciarpe, coperte e tessili fatti a mano' : locale === 'es' ? 'Pañuelos, mantas y textiles hechos a mano' : locale === 'nl' ? 'Met de hand gemaakte sjaals, dekens en textiel' : 'Écharpes, couvertures et textiles faits à la main',
      icon: '🧣',
      href: `/${locale}/shop/woven`,
    },
    {
      title: locale === 'en' ? 'Custom Commission' : locale === 'de' ? 'Benutzerdefinierte Bestellung' : locale === 'it' ? 'Commissione Personalizzata' : locale === 'es' ? 'Encargo Personalizado' : locale === 'nl' ? 'Aangepaste Bestelling' : 'Commande Personnalisée',
      description: locale === 'en' ? 'Create your own unique piece' : locale === 'de' ? 'Erstellen Sie Ihr eigenes Unikat' : locale === 'it' ? 'Crea il tuo pezzo unico' : locale === 'es' ? 'Crea tu propia pieza única' : locale === 'nl' ? 'Maak je eigen unieke stuk' : 'Créez votre propre pièce unique',
      icon: '✨',
      href: `/${locale}/shop/commission`,
    },
    {
      title: locale === 'en' ? 'Alpaca Manure' : locale === 'de' ? 'Alpaka-Dünger' : locale === 'it' ? 'Letame di Alpaca' : locale === 'es' ? 'Estiércol de Alpaca' : locale === 'nl' ? 'Alpacamest' : 'Fumier d\'Alpaca',
      description: locale === 'en' ? 'Premium organic fertilizer' : locale === 'de' ? 'Premium-Biodünger' : locale === 'it' ? 'Fertilizzante biologico premium' : locale === 'es' ? 'Fertilizante orgánico premium' : locale === 'nl' ? 'Premium biologische meststof' : 'Engrais biologique premium',
      icon: '🌿',
      href: `/${locale}/shop/alcaca`,
    },
  ]

  return (
    <>
      <section className="w-full py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {locale === 'en' && 'Our Shop'}
            {locale === 'de' && 'Unser Shop'}
            {locale === 'it' && 'Il Nostro Negozio'}
            {locale === 'es' && 'Nuestra Tienda'}
            {locale === 'nl' && 'Onze Winkel'}
            {locale === 'fr' && 'Notre Boutique'}
          </h1>
          <p className="text-lg text-foreground/70">
            {locale === 'en' && 'Discover handcrafted alpaca products, custom pieces, and premium manure'}
            {locale === 'de' && 'Entdecken Sie handgefertigte Alpakaprodukte, maßgefertigte Stücke und Premium-Dünger'}
            {locale === 'it' && 'Scopri prodotti di alpaca fatti a mano, pezzi personalizzati e letame premium'}
            {locale === 'es' && 'Descubre productos de alpaca hechos a mano, piezas personalizadas y abono premium'}
            {locale === 'nl' && 'Ontdek handgemaakte alpacaproducten, aangepaste stukken en premium mest'}
            {locale === 'fr' && 'Découvrez les produits d\'alpaca faits à la main, les pièces personnalisées et le fumier premium'}
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shopCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group bg-card rounded-lg border border-border p-8 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {category.title}
                </h2>
                <p className="text-foreground/70">{category.description}</p>
                <div className="mt-6 inline-flex items-center text-accent font-medium">
                  {locale === 'en' && 'Explore'}
                  {locale === 'de' && 'Erkunden'}
                  {locale === 'it' && 'Esplora'}
                  {locale === 'es' && 'Explorar'}
                  {locale === 'nl' && 'Verkennen'}
                  {locale === 'fr' && 'Explorer'}
                  {' →'}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
