import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Footer } from '@/components/footer'
import { ProductGrid } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function WovenPage() {
  // Sample products (in a real app, these would come from a database)
  const products = [
    {
      id: '1',
      name: 'Natural Alpaca Scarf',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1544328280-48fdf39dcdae?w=500&h=500&fit=crop',
      category: 'woven',
      description: 'Soft, warm, natural alpaca fiber scarf',
      rating: 5,
      reviews: 12,
    },
    {
      id: '2',
      name: 'Handwoven Throw Blanket',
      price: 189.99,
      image: 'https://images.unsplash.com/photo-1578149102619-5a33a775b239?w=500&h=500&fit=crop',
      category: 'woven',
      description: 'Cozy blanket for home or travel',
      rating: 5,
      reviews: 8,
    },
    {
      id: '3',
      name: 'Indigo Dyed Wrap',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1549880338-409b8d82dae6?w=500&h=500&fit=crop',
      category: 'woven',
      description: 'Traditional indigo dye, artisanal pattern',
      rating: 4,
      reviews: 5,
    },
    {
      id: '4',
      name: 'Alpaca Wool Cushion',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1563083173-a90a1dff0dca?w=500&h=500&fit=crop',
      category: 'woven',
      description: 'Decorative cushion with natural texture',
      rating: 5,
      reviews: 15,
    },
    {
      id: '5',
      name: 'Terracotta Belt',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1577720643272-265b434a3abb?w=500&h=500&fit=crop',
      category: 'woven',
      description: 'Hand-dyed terracotta woven belt',
      rating: 4,
      reviews: 3,
    },
    {
      id: '6',
      name: 'Natural Fiber Bag',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop',
      category: 'woven',
      description: 'Eco-friendly, handwoven tote bag',
      rating: 5,
      reviews: 22,
    },
    {
      id: '7',
      name: 'Alpaca Blend Socks',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1584030765911-9f2e9532d3d3?w=500&h=500&fit=crop',
      category: 'woven',
      description: 'Warm, breathable alpaca blend socks',
      rating: 5,
      reviews: 31,
    },
    {
      id: '8',
      name: 'Artisan Wool Vest',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop',
      category: 'woven',
      description: 'Layering piece, natural dye',
      rating: 4,
      reviews: 7,
    },
  ]

  return (
    <main>
      <Header />

      <Hero
        title="Woven Collection"
        subtitle="Handcrafted alpaca wool pieces made with natural dyes and traditional weaving techniques. Each item is unique and built to last."
      />

      <section className="w-full py-16 md:py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Browse Our Collection
              </h2>
              <p className="text-foreground/70 max-w-2xl">
                Each piece is hand-checked and made with care. Sustainable. Timeless. Yours.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 bg-transparent"
            >
              <Link href="/shop/commission">
                Can't find what you want? Commission custom.
              </Link>
            </Button>
          </div>

          <ProductGrid products={products} />

          {/* More Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                About Our Process
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Each piece begins with our alpacas' wool. We hand-process every fiber, use only natural dyes (indigo, madder root, walnut, plants from our land), and weave using traditional techniques.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                The result? Pieces that are warm, durable, and unique. No two are exactly alike.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Care Instructions
              </h3>
              <ul className="space-y-2 text-foreground/70">
                <li>• Hand wash in cool water with gentle soap</li>
                <li>• Rinse thoroughly until water runs clear</li>
                <li>• Gently squeeze out excess water</li>
                <li>• Lay flat to dry on a clean towel</li>
                <li>• Never machine wash or dry clean</li>
                <li>• Store in a breathable bag away from moths</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
