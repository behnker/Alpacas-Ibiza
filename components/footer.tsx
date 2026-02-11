import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Alpacas Ibiza</h3>
            <p className="text-sm text-foreground/70">
              Ibiza's first alpaca farm & Wishfulfilling Weaving studio in the rural north of the island.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/en/tours" className="text-foreground/70 hover:text-foreground">
                  Tours & Visits
                </Link>
              </li>
              <li>
                <Link href="/en/shop" className="text-foreground/70 hover:text-foreground">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/en/about" className="text-foreground/70 hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/en/contact" className="text-foreground/70 hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Partners</h3>
            <p className="text-sm text-foreground/70 mb-3">
              Book through our hotel partners
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes"
                  className="text-foreground/70 hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Direct Booking
                </a>
              </li>
              {/* Add partner links here when available */}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>Rural North, Ibiza</li>
              <li>
                <a href="mailto:hello@alpacasibiza.com" className="hover:text-foreground">
                  hello@alpacasibiza.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wishfulfillingweaving/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  @wishfulfillingweaving
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Alpacas Ibiza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
