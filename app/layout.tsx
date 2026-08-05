import './globals.css'
import React from 'react'

export const metadata = {
  title: 'SC-MOBILITY',
  description: 'Redefiniendo la movilidad eléctrica.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased bg-white text-black dark:bg-brandBlack dark:text-white">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
