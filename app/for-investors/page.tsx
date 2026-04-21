'use client'
import Nav from '@/app/components/Nav'
import Link from 'next/link'
const TEAL = '#0EA5C8'

export default function ForInvestors() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Nav />
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: 'clamp(60px, 8vw, 100px) 20px 40px' }}>
        <div style={{ display: 'inline-block', background: `rgba(14,165,200,0.12)`, border: `1px solid rgba(14,165,200,0.3)`, borderRadius: '20px', padding: '6px 18px', marginBottom: '28px' }}>
          <span style={{ color: TEAL, fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em' }}>FOR HEDGE FUNDS & ASSET MANAGERS</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.02em' }}>
          Cross-domain signals<br /><span style={{ color: TEAL }}>before the market moves.</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#888', lineHeight: 1.75, maxWidth: '620px', marginBottom: '48px' }}>
          Phoebex delivers statistically validated cross-domain signals — connecting economic domains that traditional analysis treats as separate. The connections you find here don&apos;t appear in Bloomberg or Quandl.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {[
            { title: 'Sector Rotation Signal', value: 'GROWTH', desc: 'Current positioning: tech/consumer/industrials favored over defensive', badge: 'Live' },
            { title: 'Risk-On/Off Dashboard', value: 'NEUTRAL', desc: 'Composite of financial stress, recession probability, and volatility signals', badge: 'Live' },
            { title: 'M&A Timing Indicator', value: '80/100', desc: 'Credit conditions and economic regime signal favorable M&A environment', badge: 'Favorable' },
            { title: 'Yield Curve Intelligence', value: '75.5% AUC', desc: 'Composite model predicts yield spread direction 3 months ahead', badge: 'Validated' },
            { title: 'Recession Probability', value: '5%', desc: 'Composite of 13 leading indicators — no recession signal currently', badge: 'Low Risk' },
            { title: 'Cross-Domain Alpha', value: '15 signals', desc: 'XGBoost composite signals validated at 60-75% directional accuracy', badge: 'Institutional' },
          ].map(({ title, value, desc, badge }) => (
            <div key={title} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '22px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '12px', color: '#888' }}>{title}</span>
                <span style={{ fontSize: '10px', color: TEAL, border: `1px solid ${TEAL}44`, borderRadius: '8px', padding: '2px 8px' }}>{badge}</span>
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>{value}</div>
              <div style={{ fontSize: '12px', color: '#555', lineHeight: 1.5 }}>{desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px' }}>Available Signal Domains</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '48px' }}>
          {['Financial Markets', 'Labor Market', 'Economic Indicators', 'Consumer Sentiment', 'Political Risk', 'GDELT/Geopolitical', 'Commodities & Energy', 'FX/Currency', 'Sovereign Debt', 'Supply Chain', 'Credit Markets', 'Cryptocurrency', 'Manufacturing PMI', 'Small Business'].map(d => (
            <span key={d} style={{ background: 'rgba(14,165,200,0.08)', border: '1px solid rgba(14,165,200,0.2)', borderRadius: '6px', padding: '6px 14px', fontSize: '13px', color: '#aaa' }}>{d}</span>
          ))}
        </div>

        <div style={{ background: 'rgba(14,165,200,0.06)', border: '1px solid rgba(14,165,200,0.2)', borderRadius: '16px', padding: '36px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px' }}>Institutional API Access</h3>
          <p style={{ color: '#888', marginBottom: '28px', fontSize: '14px', lineHeight: 1.7 }}>
            REST API · JSON responses · Bearer token auth · 25,000 requests/day on Institutional tier · Walk-forward validated signals
          </p>
          <Link href="/contact" style={{ background: TEAL, color: '#000', padding: '14px 36px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'inline-block' }}>
            Request Access →
          </Link>
        </div>
        <p style={{ color: '#333', fontSize: '11px', textAlign: 'center', marginTop: '16px' }}>
          For informational purposes only. Not investment advice. Past performance does not guarantee future results.
        </p>
      </section>
    </main>
  )
}
