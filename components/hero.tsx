'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroProps {
  title: string
  subtitle: string
  cta?: {
    label: string
    href: string
  }
  secondary?: {
    label: string
    href: string
  }
  backgroundImage?: string
  videoSrc?: string
}

export function Hero({
  title,
  subtitle,
  cta,
  secondary,
  backgroundImage,
  videoSrc,
}: HeroProps) {
  return (
    <section
      className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      {videoSrc && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Fallback/Overlay Background Image (if no video or as fallback) */}
      {!videoSrc && (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : 'linear-gradient(135deg, rgba(109, 168, 85, 0.1) 0%, rgba(230, 126, 34, 0.08) 100%)',
          }}
        />
      )}

      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background/60 to-background/30 backdrop-blur-[1px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 text-center md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight text-balance">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-foreground/75 mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {(cta || secondary) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {cta && (
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link href={cta.href}>
                  {cta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {secondary && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 bg-transparent"
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
