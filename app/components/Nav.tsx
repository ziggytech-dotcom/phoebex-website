'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const TEAL = '#0EA5C8'
  const links = [
    { href: '/for-investors', label: 'For Investors' },
    { href: '/for-real-estate', label: 'For Real Estate' },
    { href: '/for-corporate', label: 'For Corporate' },
    { href: '/for-insurance', label: 'For Insurance' },
    { href: '/other-industries', label: 'Other Industries' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/docs', label: 'Docs' },
  ]
  return (
    <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '0 20px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '22px', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
            Phoe<span style={{ color: TEAL }}>bex</span>
          </span>
        </Link>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ color: '#888', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" style={{ background: TEAL, color: '#000', padding: '8px 20px', borderRadius: '6px', textDecoration: 'none', fontSize: '14px', fontWeight: 700 }}>
            Get Access
          </Link>
        </div>
      </div>
    </nav>
  )
}
