'use client'
import Nav from '@/app/components/Nav'
import Link from 'next/link'

const TEAL = '#0EA5C8'
const NAVY = '#050D1A'

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Nav />

      {/* Hero */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: 'clamp(60px, 8vw, 120px) 20px clamp(40px, 6vw, 80px)', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: `rgba(14,165,200,0.12)`, border: `1px solid rgba(14,165,200,0.3)`, borderRadius: '20px', padding: '6px 18px', marginBottom: '36px' }}>
          <span style={{ color: TEAL, fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em' }}>PATENT PENDING — US #64/030,255</span>
        </div>

        <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1.05, marginBottom: '28px', letterSpacing: '-0.03em' }}>
          See what markets<br />
          <span style={{ color: TEAL }}>miss by design.</span>
        </h1>

        <p style={{ fontSize: '1.2rem', color: '#888', lineHeight: 1.75, maxWidth: '640px', margin: '0 auto 52px' }}>
          Phoebex identifies hidden connections across 19 economic domains — finding signals that predict market outcomes 30–180 days before they appear in traditional data.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ background: TEAL, color: '#000', padding: '15px 36px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px', fontWeight: 700 }}>
            Request API Access →
          </Link>
          <Link href="/docs" style={{ background: 'transparent', color: '#fff', padding: '15px 36px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.15)' }}>
            View Documentation
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '52px 20px', background: 'rgba(14,165,200,0.03)' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '36px', textAlign: 'center' }}>
          {[
            { num: '74', label: 'Validated Signals', sub: 'statistically significant' },
            { num: '75.5%', label: 'Peak Accuracy', sub: 'out-of-sample validation' },
            { num: '27', label: 'US Metro Markets', sub: 'real estate forecasts' },
            { num: '19', label: 'Signal Domains', sub: 'cross-domain coverage' },
            { num: '15yr', label: 'Historical Data', sub: 'real data, no synthetic' },
          ].map(({ num, label, sub }) => (
            <div key={label}>
              <div style={{ fontSize: '2.6rem', fontWeight: 800, color: TEAL, marginBottom: '8px', letterSpacing: '-0.02em' }}>{num}</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{label}</div>
              <div style={{ fontSize: '11px', color: '#555' }}>{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Current readings */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) 20px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '8px', textAlign: 'center' }}>Current Signal Readings</h2>
        <p style={{ color: '#555', textAlign: 'center', marginBottom: '40px', fontSize: '14px' }}>Updated daily from institutional data sources. Full access via API.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {[
            { label: 'Recession Probability', value: '5%', status: 'LOW', color: '#10B981', desc: 'No recession signal in current data' },
            { label: 'Economic Health Score', value: '46/100', status: 'SOFTENING', color: '#F59E0B', desc: 'Below neutral — mild economic softening' },
            { label: 'Financial Stress Index', value: '58/100', status: 'MODERATE', color: '#F59E0B', desc: 'Elevated but not crisis levels' },
            { label: 'Labor Market Stress', value: '46/100', status: 'STABLE', color: '#10B981', desc: 'Labor market cooling gradually' },
            { label: 'Inflation Pressure', value: '53/100', status: 'MODERATE', color: '#F59E0B', desc: 'Below 2022 peak — moderating' },
            { label: 'RE Market Health', value: '64/100', status: 'HEALTHY', color: '#10B981', desc: 'National real estate holding up' },
          ].map(({ label, value, status, color, desc }) => (
            <div key={label} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <span style={{ fontSize: '13px', color: '#888', fontWeight: 500 }}>{label}</span>
                <span style={{ fontSize: '11px', color, fontWeight: 700, background: `${color}22`, padding: '2px 8px', borderRadius: '10px' }}>{status}</span>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '6px' }}>{value}</div>
              <div style={{ fontSize: '12px', color: '#555' }}>{desc}</div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: '#444', fontSize: '12px', marginTop: '20px' }}>
          For informational purposes only. Not investment advice. Past performance does not guarantee future results.
        </p>
      </section>

      {/* What is cross-domain */}
      <section style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.07)', padding: 'clamp(48px, 6vw, 80px) 20px' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px', textAlign: 'center' }}>Why Cross-Domain Changes Everything</h2>
          <p style={{ color: '#888', textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.7 }}>
            Traditional analysis looks within a single domain. Phoebex looks across domains — finding the signals that others miss because they never thought to look there.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { from: 'Labor Market', to: 'Real Estate', insight: 'Employment conditions predict housing price movements 6 months in advance', validated: true },
              { from: 'Supply Chain', to: 'Market Direction', insight: 'Inventory ratios predict market stress before it appears in financial data', validated: true },
              { from: 'Policy Uncertainty', to: 'Inflation', insight: 'Government policy signals predict inflationary pressure 3 months ahead', validated: true },
            ].map(({ from, to, insight, validated }) => (
              <div key={from} style={{ background: 'rgba(14,165,200,0.05)', border: '1px solid rgba(14,165,200,0.15)', borderRadius: '12px', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff', background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '6px' }}>{from}</span>
                  <span style={{ color: TEAL, fontSize: '18px' }}>→</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff', background: 'rgba(255,255,255,0.1)', padding: '4px 10px', borderRadius: '6px' }}>{to}</span>
                </div>
                <p style={{ color: '#aaa', fontSize: '14px', lineHeight: 1.6, margin: 0 }}>{insight}</p>
                {validated && <div style={{ marginTop: '12px', fontSize: '11px', color: TEAL }}>✓ Statistically validated</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who uses Phoebex */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: 'clamp(48px, 6vw, 80px) 20px' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '48px', textAlign: 'center' }}>Built For</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {[
            { title: 'Hedge Funds', href: '/for-investors', desc: 'Alpha signals across macro domains' },
            { title: 'Real Estate', href: '/for-real-estate', desc: '27 metro market forecasts' },
            { title: 'Corporate', href: '/for-corporate', desc: 'Supply chain, hiring, pricing signals' },
            { title: 'Insurance', href: '/for-insurance', desc: 'Credit stress & claims indicators' },
            { title: 'Other Industries', href: '/other-industries', desc: 'Custom signals for your use case' },
          ].map(({ title, href, desc }) => (
            <a key={title} href={href} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '24px', textDecoration: 'none', display: 'block', transition: 'border-color 0.2s' }}>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{title}</div>
              <div style={{ fontSize: '13px', color: '#666' }}>{desc}</div>
              <div style={{ marginTop: '16px', color: TEAL, fontSize: '13px', fontWeight: 600 }}>Learn more →</div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: 'clamp(48px, 6vw, 80px) 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '16px' }}>Ready to see what you&apos;ve been missing?</h2>
          <p style={{ color: '#888', marginBottom: '36px', lineHeight: 1.7 }}>Access 74 validated cross-domain signals via REST API. Institutional pricing starting at $299/month.</p>
          <Link href="/contact" style={{ background: TEAL, color: '#000', padding: '16px 40px', borderRadius: '8px', textDecoration: 'none', fontSize: '16px', fontWeight: 700, display: 'inline-block' }}>
            Request API Access →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '32px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginBottom: '20px' }}>
            {['/pricing', '/docs', '/contact', '/privacy', '/terms'].map(href => (
              <Link key={href} href={href} style={{ color: '#555', textDecoration: 'none', fontSize: '13px' }}>
                {href.replace('/', '').replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </Link>
            ))}
          </div>
          <p style={{ color: '#333', fontSize: '12px', margin: 0 }}>
            Phoebex by ZiggyTech Ventures LLC · Las Vegas, NV · Patent Pending US #64/030,255<br />
            For informational purposes only. Not investment advice.
          </p>
        </div>
      </footer>
    </main>
  )
}
