'use client'

import { Card } from '@/components/ui/card'

interface TimelineItem {
  time: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
  title?: string
}

export function Timeline({ items, title }: TimelineProps) {
  return (
    <section className="w-full py-16 md:py-24 px-4 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-foreground/70">
              Here's what happens on a typical visit
            </p>
          </div>
        )}

        <div className="space-y-6">
          {items.map((item, i) => (
            <div key={i} className="flex gap-6">
              {/* Timeline marker */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-semibold flex-shrink-0">
                  {i + 1}
                </div>
                {i < items.length - 1 && (
                  <div className="w-1 h-20 bg-border mt-2" />
                )}
              </div>

              {/* Content */}
              <Card className="flex-1 p-6 border-border/50">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {item.time}
                  </span>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
