import { NextResponse } from 'next/server'

export async function GET() {
    const appKey = process.env.FAREHARBOR_APP_KEY
    const userKey = process.env.FAREHARBOR_USER_KEY
    const shortname = process.env.FAREHARBOR_SHORTNAME || 'alpacasibiza'
    const itemId = process.env.FAREHARBOR_ITEM_ID

    // Check if API credentials are configured
    if (!appKey || !userKey) {
        return NextResponse.json(
            {
                error: 'FareHarbor API credentials not configured',
                message: 'Contact support@fareharbor.com to request API access'
            },
            { status: 503 }
        )
    }

    try {
        // Calculate date range (next 30 days)
        const today = new Date()
        const endDate = new Date()
        endDate.setDate(today.getDate() + 30)

        const formatDate = (date: Date) => {
            return date.toISOString().split('T')[0] // YYYY-MM-DD
        }

        const startDateStr = formatDate(today)
        const endDateStr = formatDate(endDate)

        // If no specific item ID, fetch all items first
        let itemsToCheck = []
        if (itemId) {
            itemsToCheck = [itemId]
        } else {
            // Fetch all items
            const itemsResponse = await fetch(
                `https://fareharbor.com/api/external/v1/companies/${shortname}/items/`,
                {
                    headers: {
                        'X-FareHarbor-API-App': appKey,
                        'X-FareHarbor-API-User': userKey,
                    },
                }
            )

            if (!itemsResponse.ok) {
                throw new Error(`Failed to fetch items: ${itemsResponse.statusText}`)
            }

            const itemsData = await itemsResponse.json()
            itemsToCheck = itemsData.items?.map((item: any) => item.pk) || []
        }

        // Fetch availabilities for each item
        const availabilities = []

        for (const itemPk of itemsToCheck.slice(0, 3)) { // Limit to first 3 items to avoid rate limits
            const availResponse = await fetch(
                `https://fareharbor.com/api/external/v1/companies/${shortname}/items/${itemPk}/minimal/availabilities/date-range/${startDateStr}/${endDateStr}/`,
                {
                    headers: {
                        'X-FareHarbor-API-App': appKey,
                        'X-FareHarbor-API-User': userKey,
                    },
                }
            )

            if (availResponse.ok) {
                const availData = await availResponse.json()
                if (availData.availabilities && availData.availabilities.length > 0) {
                    // Get unique dates with availability
                    const dates = availData.availabilities
                        .filter((avail: any) => avail.capacity > 0) // Only show dates with capacity
                        .map((avail: any) => ({
                            date: avail.start_at.split('T')[0],
                            capacity: avail.capacity,
                            startTime: avail.start_at,
                        }))

                    availabilities.push(...dates)
                }
            }
        }

        // Remove duplicates and sort by date
        const uniqueDates = Array.from(
            new Map(availabilities.map(item => [item.date, item])).values()
        ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

        return NextResponse.json({
            dates: uniqueDates.slice(0, 8), // Return up to 8 upcoming dates
            lastUpdated: new Date().toISOString(),
        })

    } catch (error) {
        console.error('FareHarbor API Error:', error)
        return NextResponse.json(
            {
                error: 'Failed to fetch availability',
                message: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        )
    }
}

// Cache for 2 hours (as recommended by FareHarbor for current day)
export const revalidate = 7200
