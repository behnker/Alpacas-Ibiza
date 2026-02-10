'use client'

import { Card } from '@/components/ui/card'

interface FeatureItem {
  icon: string
  title: string
  description: string
}

interface FeaturesProps {
  items: FeatureItem[]
  title?: string
  subtitle?: string
}

export function Features({ items, title, subtitle }: FeaturesProps) {
  return (
    <section className="w-full py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-foreground/70 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <Card
              key={i}
              className="p-6 hover:shadow-md transition-shadow border-border/50"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
