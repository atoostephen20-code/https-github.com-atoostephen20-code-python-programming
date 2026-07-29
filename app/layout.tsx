import './styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'SetSmart Homes and Solutions',
  description: 'SetSmart Homes and Solutions — Smart home design, installation and managed services.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
