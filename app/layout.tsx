import Footer from '@/components/ui/footer'
import './css/style.css'

import { Bricolage_Grotesque, Roboto } from 'next/font/google'


const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: '400'  // You can choose any valid weight: '100', '300', '400', '500', '700', '900'
})


const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage-grotesque',
  display: 'swap',
})


export const metadata = {
  title: 'Shree Akshar',
  description: 'Printing simplified - Affordable plates delivered in 24 hours',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${bricolage.variable} font-bricolage antialiased bg-white text-slate-800 tracking-wide`}>
        {children}
      </body>
    </html>
  )
}
