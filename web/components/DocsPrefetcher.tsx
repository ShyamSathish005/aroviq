'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

// All doc pages to prefetch
const DOC_PAGES = [
    '/docs',
    '/docs/installation',
    '/docs/usage',
    '/docs/concepts',
    '/docs/configuration',
    '/docs/decorators',
    '/docs/engine',
    '/benchmarks',
]

export function DocsPrefetcher() {
    const router = useRouter()
    const hasPrefetched = useRef(false)

    useEffect(() => {
        // Only prefetch once
        if (hasPrefetched.current) return
        hasPrefetched.current = true

        // Start prefetching immediately on mount
        // Use router.prefetch for Next.js client-side caching
        DOC_PAGES.forEach((page) => {
            router.prefetch(page)
        })

        // In development, also fetch pages in parallel to trigger MDX compilation
        if (process.env.NODE_ENV === 'development') {
            // Small delay to let the current page finish rendering first
            setTimeout(() => {
                DOC_PAGES.forEach((page) => {
                    fetch(page, { 
                        priority: 'low',
                        cache: 'force-cache'
                    } as RequestInit).catch(() => {})
                })
            }, 100)
        }
    }, [router])

    return null
}
