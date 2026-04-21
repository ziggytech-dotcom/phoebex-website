'use client'
import Nav from '@/app/components/Nav'
import Link from 'next/link'
const TEAL = '#0EA5C8'

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter', price: '$299', period: '/month',
      desc: 'For individual analysts and family offices getting started with cross-domain signals.',
      domains: '1-2 domains', requests: '1,000/day',
      features: ['1-2 signal domains', 'JSON API access', 'Email support', 'API documentation'],
      cta: 'Get Started', highlight: false,
    },
    {
      name: 'Professional', price: '$999', period: '/month',
      desc: 'For investment teams and research groups needing multi-domain coverage.',
      domains: '5 domains', requests: '5,000/day',
      features: ['5 signal domains', 'Metro real estate forecasts', 'JSON API + alerts', 'Priority email support'],
      cta: 'Get Started', highlight: false,
    },
    {
      name: 'Institutional', price: '$2,999', period: '/month',
      desc: 'Full platform access for institutional investors, hedge funds, and enterprise teams.',
      domains: 'All 19 domains', requests: '25,000/day',
      features: ['All 19 signal domains', '7 composite economic scores', '28 product intelligence scores', '27 US metro real estate forecasts', 'Cross-domain signal pairs', 'Live accuracy tracking', 'Priority support + onboarding'],
      cta: 'Get Institutional Access', highlight: true,
    },
    {
      name: 'Enterprise', price: 'Custom', period: '',
      desc: 'Dedicated infrastructure, custom signals, and SLA for large institutions.',
      domains: 'All + custom', requests: 'Unlimited',
      features: ['Everything in Institutional', 'Dedicated EC2 instance', 'Custom signal development', 'SLA guarantee', 'White-label options', 'Quarterly strategy calls'],
      cta: 'Contact Us', highlight: false,
    },
  ]

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Nav />
      <section style={{ maxWidth: '1060px', margin: '0 auto', padding: 'clamp(60px, 8vw, 100px) 20px 60px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, textAlign: 'center', marginBottom: '16px', letterSpacing: '-0.02em' }}>
          Simple, transparent pricing
        </h1>
        <p style={{ color: '#888', textAlign: 'center', fontSize: '1.1rem', marginBottom: '60px' }}>
          Start with the tier that fits your needs. Upgrade anytime.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {tiers.map(({ name, price, period, desc, domains, requests, features, cta, highlight }) => (
            <div key={name} style={{
              background: highlight ? 'rgba(14,165,200,0.08)' : 'rgba(255,255,255,0.03)',
              border: highlight ? `2px solid ${TEAL}` : '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px', padding: '32px', position: 'relative'
            }}>
              {highlight && <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: TEAL, color: '#000', fontSize: '11px', fontWeight: 700, padding: '4px 14px', borderRadius: '10px', letterSpacing: '0.05em' }}>MOST POPULAR</div>}
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '12px' }}>
                <span style={{ fontSize: '2.8rem', fontWeight: 800, color: highlight ? TEAL : '#fff' }}>{price}</span>
                <span style={{ color: '#555', fontSize: '14px' }}>{period}</span>
              </div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.5, marginBottom: '20px' }}>{desc}</p>
              <div style={{ fontSize: '12px', color: '#888', marginBottom: '20px' }}>
                <div>📡 {domains}</div>
                <div style={{ marginTop: '6px' }}>⚡ {requests} API requests</div>
              </div>
              <ul style={{ margin: '0 0 28px', padding: '0 0 0 0', listStyle: 'none' }}>
                {features.map(f => (
                  <li key={f} style={{ fontSize: '13px', color: '#aaa', marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <span style={{ color: TEAL, flexShrink: 0 }}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <Link href={name === 'Enterprise' ? '/contact?type=enterprise' : '/contact'} style={{
                display: 'block', textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: 700,
                background: highlight ? TEAL : 'transparent',
                color: highlight ? '#000' : TEAL,
                border: highlight ? 'none' : `1px solid ${TEAL}`,
              }}>{cta} →</Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', color: '#555', fontSize: '13px' }}>
          <p>All plans include API documentation, JSON responses, and Bearer token authentication.</p>
          <p>Annual plans available with 2 months free. Contact us for academic and non-profit pricing.</p>
          <p style={{ marginTop: '8px', color: '#333' }}>For informational purposes only. Not investment advice. Past performance does not guarantee future results.</p>
        </div>
      </section>
    </main>
  )
}
