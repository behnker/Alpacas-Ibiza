'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

interface PathOption {
  icon: string
  title: string
  description: string
  href: string
  cta: string
}

interface ChoicePathsProps {
  paths: PathOption[]
}

export function ChoicePaths({ paths }: ChoicePathsProps) {
  return (
    <section className="w-full py-16 md:py-24 px-4 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Path
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore our farm, shop artisanal products, or commission something unique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {paths.map((path, i) => (
            <Link key={i} href={path.href}>
              <Card className="h-full p-6 hover:shadow-lg hover:border-primary transition-all cursor-pointer group">
                <div className="text-4xl mb-4">{path.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {path.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                  {path.description}
                </p>
                <div className="flex items-center text-accent group-hover:translate-x-1 transition-transform">
                  <span className="text-sm font-medium">{path.cta}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
