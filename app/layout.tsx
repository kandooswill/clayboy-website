import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClayBoy Ceramics - Handcrafted Pottery',
  description: 'Discover handcrafted ceramic masterpieces that bring warmth and character to everyday life.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}