'use client'
import Nav from '@/app/components/Nav'
import Link from 'next/link'
const TEAL = '#0EA5C8'

export default function ForInsurance() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Nav />
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: 'clamp(60px, 8vw, 100px) 20px 40px' }}>
        <div style={{ display: 'inline-block', background: `rgba(14,165,200,0.12)`, border: `1px solid rgba(14,165,200,0.3)`, borderRadius: '20px', padding: '6px 18px', marginBottom: '28px' }}>
          <span style={{ color: TEAL, fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em' }}>FOR INSURERS, REINSURERS & ACTUARIES</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.02em' }}>
          Credit stress signals<br /><span style={{ color: TEAL }}>before claims arrive.</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#888', lineHeight: 1.75, maxWidth: '620px', marginBottom: '48px' }}>
          Phoebex delivers leading indicators for insurance and actuarial teams — credit stress, property claims risk, workers comp trends, and underwriting cycle position — validated on institutional data.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {[
            { title: 'Financial Stress Index', value: '58/100', color: '#F59E0B', desc: 'Moderate — elevated but not crisis. Monitor credit conditions.' },
            { title: 'Property Claims Predictor', value: 'NORMAL', color: '#10B981', desc: 'Claims risk within normal range based on economic stress indicators' },
            { title: 'Underwriting Cycle', value: 'SOFT MARKET', color: '#F59E0B', desc: 'Transitioning toward competitive pricing conditions' },
            { title: 'Workers Comp Trend', value: 'NORMAL', color: '#10B981', desc: 'Labor market and industrial signals within normal range' },
            { title: 'Credit Default Warning', value: '70/100', color: '#F59E0B', desc: 'Corporate credit spread signal — 6 month advance indicator' },
            { title: 'Catastrophe Bond Pricing', value: 'TIGHT SPREADS', color: '#10B981', desc: 'Favorable issuance conditions — low systemic stress indicators' },
          ].map(({ title, value, color, desc }) => (
            <div key={title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '22px' }}>
              <div style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>{title}</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color, marginBottom: '8px' }}>{value}</div>
              <div style={{ fontSize: '12px', color: '#555', lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(14,165,200,0.06)', border: '1px solid rgba(14,165,200,0.2)', borderRadius: '16px', padding: '36px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>Insurance Intelligence API</h3>
          <p style={{ color: '#888', marginBottom: '28px', fontSize: '14px', lineHeight: 1.7 }}>
            Credit stress · Claims indicators · Underwriting cycle · Workers comp trends · Cat bond pricing inputs · Updated daily
          </p>
          <Link href="/contact" style={{ background: TEAL, color: '#000', padding: '14px 36px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'inline-block' }}>
            Request Access →
          </Link>
        </div>
        <p style={{ color: '#333', fontSize: '11px', textAlign: 'center', marginTop: '16px' }}>For informational purposes only. Not actuarial advice. Past performance does not guarantee future results.</p>
      </section>
    </main>
  )
}
