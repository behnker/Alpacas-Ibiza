'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function StickyBookingBar() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-primary transition-transform duration-300 md:hidden ${isVisible ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <a
                href="https://fareharbor.com/embeds/book/alpacasibiza/?full-items=yes"
                className="w-full block"
            >
                <Button className="w-full bg-background text-primary hover:bg-background/90 font-bold text-lg h-12 rounded-full shadow-lg">
                    Book Your Visit
                </Button>
            </a>
        </div>
    )
}
