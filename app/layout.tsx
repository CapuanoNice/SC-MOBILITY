import '../styles/globals.css'
import React from 'react'
import ClerkProviderClient from '../src/components/ClerkProviderClient'

export const metadata = {
  title: 'SC-MOBILITY',
  description: 'Redefiniendo la movilidad eléctrica.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased bg-white text-black dark:bg-brandBlack dark:text-white">
        <ClerkProviderClient>
          <main className="min-h-screen">
            {children}
          </main>
        </ClerkProviderClient>
      </body>
    </html>
  )
}
