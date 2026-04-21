'use client'
import Nav from '@/app/components/Nav'
import Link from 'next/link'
const TEAL = '#0EA5C8'

const metros = [
  { city: 'Houston', signal: 'UP', conf: 99, acc: 94 },
  { city: 'Nashville', signal: 'UP', conf: 89, acc: 83 },
  { city: 'San Antonio', signal: 'UP', conf: 96, acc: 83 },
  { city: 'Salt Lake City', signal: 'UP', conf: 97, acc: 81 },
  { city: 'Raleigh', signal: 'UP', conf: 52, acc: 81 },
  { city: 'Boston', signal: 'UP', conf: 76, acc: 92 },
  { city: 'Chicago', signal: 'UP', conf: 89, acc: 95 },
  { city: 'Detroit', signal: 'UP', conf: 82, acc: 87 },
  { city: 'Minneapolis', signal: 'UP', conf: 79, acc: 92 },
  { city: 'Las Vegas', signal: 'UP', conf: 77, acc: 77 },
  { city: 'Atlanta', signal: 'UP', conf: 73, acc: 77 },
  { city: 'Austin', signal: 'DOWN', conf: 94, acc: 64 },
  { city: 'Denver', signal: 'NEUTRAL', conf: 56, acc: 56 },
  { city: 'San Francisco', signal: 'NEUTRAL', conf: 55, acc: 55 },
]

export default function ForRealEstate() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Nav />
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: 'clamp(60px, 8vw, 100px) 20px 40px' }}>
        <div style={{ display: 'inline-block', background: `rgba(14,165,200,0.12)`, border: `1px solid rgba(14,165,200,0.3)`, borderRadius: '20px', padding: '6px 18px', marginBottom: '28px' }}>
          <span style={{ color: TEAL, fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em' }}>FOR REAL ESTATE FIRMS & REITs</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.02em' }}>
          Know which markets<br /><span style={{ color: TEAL }}>are moving next.</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#888', lineHeight: 1.75, maxWidth: '620px', marginBottom: '48px' }}>
          27 US metro market forecasts validated against 20 years of real data. Labor market signals, mortgage rate forecasts, and national real estate health — all in one API.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '12px' }}>
          {[
            { label: 'RE Market Health', value: '64/100', sub: 'National — reasonably healthy' },
            { label: 'Mortgage Rate Outlook', value: 'STABLE', sub: '3-6 month forecast' },
            { label: 'REIT Signal', value: 'NEUTRAL', sub: 'Rate environment watch' },
            { label: 'Commercial vs Residential', value: 'RESIDENTIAL', sub: 'Residential outperforming' },
          ].map(({ label, value, sub }) => (
            <div key={label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>{label}</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>{value}</div>
              <div style={{ fontSize: '11px', color: '#555' }}>{sub}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '40px 0 20px' }}>Metro Market Forecasts — 6 Month Outlook</h2>
        <p style={{ color: '#555', fontSize: '13px', marginBottom: '20px' }}>Directional forecast only. Full confidence scores and historical accuracy via API.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', marginBottom: '16px' }}>
          {metros.map(({ city, signal, conf, acc }) => (
            <div key={city} style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '10px', padding: '14px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: '#ccc', fontWeight: 500 }}>{city}</span>
              <span style={{
                fontSize: '11px', fontWeight: 700, padding: '3px 10px', borderRadius: '8px',
                color: signal === 'UP' ? '#10B981' : signal === 'DOWN' ? '#EF4444' : '#F59E0B',
                background: signal === 'UP' ? '#10B98122' : signal === 'DOWN' ? '#EF444422' : '#F59E0B22'
              }}>{signal}</span>
            </div>
          ))}
        </div>
        <p style={{ color: '#333', fontSize: '11px', marginBottom: '40px' }}>
          Sample of 14 markets shown. Full 27-metro dataset with confidence scores and model accuracy available via API. For informational purposes only. Not investment advice.
        </p>

        <div style={{ background: 'rgba(14,165,200,0.06)', border: '1px solid rgba(14,165,200,0.2)', borderRadius: '16px', padding: '36px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>Full Real Estate Intelligence API</h3>
          <p style={{ color: '#888', marginBottom: '28px', fontSize: '14px', lineHeight: 1.7 }}>
            All 27 metros · Confidence scores · Model accuracy · Historical forecasts · National composite scores · Mortgage rate outlook
          </p>
          <Link href="/contact" style={{ background: TEAL, color: '#000', padding: '14px 36px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'inline-block' }}>
            Request Access →
          </Link>
        </div>
      </section>
    </main>
  )
}
