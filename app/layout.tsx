import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Phoebex — Cross-Domain Predictive Intelligence',
  description: 'Phoebex identifies hidden signals across 19 economic domains that predict market outcomes 30-180 days before they appear in traditional data. 74 validated signals. Patent pending.',
  openGraph: {
    title: 'Phoebex — Cross-Domain Predictive Intelligence',
    description: '74 validated cross-domain signals. 27 US metro forecasts. Institutional-grade predictive intelligence.',
    url: 'https://phoebex.io',
    siteName: 'Phoebex',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: '#0a0a0a', color: '#fff', fontFamily: 'Inter, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
