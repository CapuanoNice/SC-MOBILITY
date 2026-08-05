"use client"

import React from 'react'
import dynamic from 'next/dynamic'

const ClerkProvider = dynamic(() => import('@clerk/nextjs').then(mod => mod.ClerkProvider), { ssr: false })

type Props = {
  children: React.ReactNode
}

export default function ClerkProviderClient({ children }: Props) {
  return (
    // ClerkProvider is dynamically loaded on the client only
    <ClerkProvider>
      {children}
    </ClerkProvider>
  )
}
