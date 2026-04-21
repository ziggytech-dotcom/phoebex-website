'use client'
import Nav from '@/app/components/Nav'
import Link from 'next/link'
const TEAL = '#0EA5C8'

export default function ForCorporate() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Nav />
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: 'clamp(60px, 8vw, 100px) 20px 40px' }}>
        <div style={{ display: 'inline-block', background: `rgba(14,165,200,0.12)`, border: `1px solid rgba(14,165,200,0.3)`, borderRadius: '20px', padding: '6px 18px', marginBottom: '28px' }}>
          <span style={{ color: TEAL, fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em' }}>FOR CFOs, SUPPLY CHAIN & CORPORATE TEAMS</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.02em' }}>
          Economic intelligence<br /><span style={{ color: TEAL }}>90 days before you need it.</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#888', lineHeight: 1.75, maxWidth: '620px', marginBottom: '48px' }}>
          Phoebex gives corporate teams leading indicators on hiring conditions, pricing power, supply chain risk, and capital expenditure timing — so decisions are made on data, not gut.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {[
            { title: 'Hiring Signal', value: 'MAINTAIN', color: '#F59E0B', desc: 'Labor market cooling — maintain headcount, selective hiring' },
            { title: 'Pricing Power', value: 'LOW', color: '#EF4444', desc: 'Consumer spending weak — hold prices, risk volume loss if raised' },
            { title: 'CapEx Timing', value: '61/100', color: '#10B981', desc: 'Favorable investment environment — recession risk low' },
            { title: 'M&A Timing', value: '80/100', color: '#10B981', desc: 'Credit conditions favorable — good environment for deals' },
            { title: 'Supply Chain Risk', value: '4.1/10', color: '#10B981', desc: 'Below midpoint — supply chain manageable currently' },
            { title: 'Consumer Spending', value: 'WEAK', color: '#EF4444', desc: 'Consumers pulling back — plan inventory conservatively' },
          ].map(({ title, value, color, desc }) => (
            <div key={title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '22px' }}>
              <div style={{ fontSize: '12px', color: '#888', marginBottom: '10px' }}>{title}</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color, marginBottom: '8px' }}>{value}</div>
              <div style={{ fontSize: '12px', color: '#555', lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
        </div>

        <div style={{ background: 'rgba(14,165,200,0.06)', border: '1px solid rgba(14,165,200,0.2)', borderRadius: '16px', padding: '36px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>Corporate Intelligence API</h3>
          <p style={{ color: '#888', marginBottom: '28px', fontSize: '14px', lineHeight: 1.7 }}>
            28 product scores · Updated daily · JSON API · Integrate into dashboards, planning tools, and board reports
          </p>
          <Link href="/contact" style={{ background: TEAL, color: '#000', padding: '14px 36px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'inline-block' }}>
            Request Access →
          </Link>
        </div>
        <p style={{ color: '#333', fontSize: '11px', textAlign: 'center', marginTop: '16px' }}>For informational purposes only. Not investment advice.</p>
      </section>
    </main>
  )
}
