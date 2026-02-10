'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="w-full py-16 md:py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/70">
            Everything you need to know before your visit
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between bg-background hover:bg-secondary/20 transition-colors text-left"
              >
                <span className="font-medium text-foreground">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-accent transition-transform ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 py-4 bg-secondary/10 text-foreground/70 border-t border-border">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
