import Link from 'next/link'
import type { Locale } from '@/i18n.config'

export default function WovenPage({ params }: { params: { locale: Locale } }) {
  const locale = params.locale

  const products = [
    {
      title: locale === 'en' ? 'Alpaca Wool Scarf' : locale === 'de' ? 'Alpakawolle-Schal' : locale === 'it' ? 'Sciarpa in Lana di Alpaca' : locale === 'es' ? 'Bufanda de Lana de Alpaca' : locale === 'nl' ? 'Alpacawol Sjaal' : 'Écharpe en Laine d\'Alpaca',
      price: '€45',
      icon: '🧣',
    },
    {
      title: locale === 'en' ? 'Woven Blanket' : locale === 'de' ? 'Gewebte Decke' : locale === 'it' ? 'Coperta Tessuta' : locale === 'es' ? 'Manta Tejida' : locale === 'nl' ? 'Geweven Deken' : 'Couverture Tissée',
      price: '€180',
      icon: '🛏️',
    },
    {
      title: locale === 'en' ? 'Natural Dye Throw' : locale === 'de' ? 'Naturfarbener Überwurf' : locale === 'it' ? 'Plaid con Tintura Naturale' : locale === 'es' ? 'Manta de Tinte Natural' : locale === 'nl' ? 'Natuurlijk Geverfd Plaid' : 'Plaid Teinture Naturelle',
      price: '€95',
      icon: '🎨',
    },
    {
      title: locale === 'en' ? 'Artisan Cushion Cover' : locale === 'de' ? 'Handwerklicher Kissenbezug' : locale === 'it' ? 'Copricuscino Artigianale' : locale === 'es' ? 'Funda de Cojín Artesanal' : locale === 'nl' ? 'Handgemaakte Kussenhoestje' : 'Housse de Coussin Artisanale',
      price: '€65',
      icon: '🏠',
    },
    {
      title: locale === 'en' ? 'Premium Wall Hanging' : locale === 'de' ? 'Premium Wandbehang' : locale === 'it' ? 'Arazzo Murales Premium' : locale === 'es' ? 'Tapiz Mural Premium' : locale === 'nl' ? 'Premium Wandtapijt' : 'Tapisserie Murale Premium',
      price: '€150',
      icon: '🎭',
    },
    {
      title: locale === 'en' ? 'Eco-Friendly Poncho' : locale === 'de' ? 'Umweltfreundlicher Poncho' : locale === 'it' ? 'Poncho Ecologico' : locale === 'es' ? 'Poncho Ecológico' : locale === 'nl' ? 'Ecologische Poncho' : 'Poncho Écologique',
      price: '€120',
      icon: '👚',
    },
  ]

  return (
    <>
      <section className="w-full py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {locale === 'en' && 'Woven Collection'}
            {locale === 'de' && 'Gewobene Kollektion'}
            {locale === 'it' && 'Collezione Tessuta'}
            {locale === 'es' && 'Colección Tejida'}
            {locale === 'nl' && 'Geweven Collectie'}
            {locale === 'fr' && 'Collection Tissée'}
          </h1>
          <p className="text-lg text-foreground/70">
            {locale === 'en' && 'Handcrafted with love using traditional weaving techniques and natural alpaca wool'}
            {locale === 'de' && 'Mit Liebe von Hand gefertigt mit traditionellen Webtechniken und natürlicher Alpakawolle'}
            {locale === 'it' && 'Realizzato a mano con amore utilizzando tecniche di tessitura tradizionali e lana di alpaca naturale'}
            {locale === 'es' && 'Hecho a mano con amor utilizando técnicas de tejido tradicionales y lana de alpaca natural'}
            {locale === 'nl' && 'Met de hand gemaakt met liefde met behulp van traditionele weeftechnieken en natuurlijke alpacawol'}
            {locale === 'fr' && 'Fait à la main avec amour en utilisant des techniques de tissage traditionnelles et de la laine d\'alpaca naturelle'}
          </p>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-secondary/20 h-48 flex items-center justify-center text-6xl">
                  {product.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{product.title}</h3>
                  <p className="text-accent font-bold text-xl mb-4">{product.price}</p>
                  <button className="w-full px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-colors">
                    {locale === 'en' && 'Add to Cart'}
                    {locale === 'de' && 'In den Warenkorb'}
                    {locale === 'it' && 'Aggiungi al Carrello'}
                    {locale === 'es' && 'Añadir al Carrito'}
                    {locale === 'nl' && 'Toevoegen aan Winkelwagen'}
                    {locale === 'fr' && 'Ajouter au Panier'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
