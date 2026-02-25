'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'

export interface Review {
    name: string
    date: string
    text: string
    translationKey: string
    language: string
}

function FacebookBadge() {
    return (
        <span className="inline-flex items-center gap-1 text-xs text-foreground/50">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook Review
        </span>
    )
}

function TranslateIcon() {
    return (
        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m5 8 6 6" />
            <path d="m4 14 6-6 2-3" />
            <path d="M2 5h12" />
            <path d="M7 2h1" />
            <path d="m22 22-5-10-5 10" />
            <path d="M14 18h6" />
        </svg>
    )
}

interface ReviewCardProps {
    review: Review
    translatedText: string
    translateButtonLabel: string
    showOriginalLabel: string
    siteLocale: string
}

export function ReviewCard({
    review,
    translatedText,
    translateButtonLabel,
    showOriginalLabel,
    siteLocale,
}: ReviewCardProps) {
    // Determine if translation is needed:
    // The review's original language differs from the site's current language
    const needsTranslation = review.language !== siteLocale

    // Auto-show translated text when viewing in a different language
    const [showTranslation, setShowTranslation] = useState(needsTranslation)

    const displayText = showTranslation ? translatedText : review.text

    return (
        <Card className="p-6 border-border/50 flex flex-col justify-between h-full">
            {/* Stars */}
            <div>
                <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-base">⭐</span>
                    ))}
                </div>

                {/* Review text */}
                <p className="text-foreground/70 italic leading-relaxed text-sm mb-3">
                    &ldquo;{displayText}&rdquo;
                </p>

                {/* Translate toggle */}
                {needsTranslation && (
                    <button
                        onClick={() => setShowTranslation(!showTranslation)}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors mb-4 px-2.5 py-1 rounded-full border border-primary/20 hover:border-primary/40 hover:bg-primary/5"
                    >
                        <TranslateIcon />
                        {showTranslation ? showOriginalLabel : translateButtonLabel}
                    </button>
                )}
            </div>

            {/* Author info */}
            <div className="pt-3 border-t border-border/30">
                <p className="text-sm font-semibold text-foreground">{review.name}</p>
                <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-foreground/50">{review.date}</p>
                    <FacebookBadge />
                </div>
            </div>
        </Card>
    )
}
