import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CLAYBOY - Handcrafted Luxury Ceramics',
  description: 'Luxury ceramic sculptures merging pop culture with sacred art. Limited edition handcrafted pieces.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ClayBoy Ceramics - Handcrafted Pottery',
  description: 'Discover handcrafted ceramic masterpieces...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}