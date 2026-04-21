'use client'
import Nav from '@/app/components/Nav'
import Link from 'next/link'
const TEAL = '#0EA5C8'

export default function OtherIndustries() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Nav />
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: 'clamp(60px, 8vw, 100px) 20px 40px' }}>
        <div style={{ display: 'inline-block', background: `rgba(14,165,200,0.12)`, border: `1px solid rgba(14,165,200,0.3)`, borderRadius: '20px', padding: '6px 18px', marginBottom: '28px' }}>
          <span style={{ color: TEAL, fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em' }}>OTHER INDUSTRIES</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '20px', letterSpacing: '-0.02em' }}>
          Your industry.<br /><span style={{ color: TEAL }}>Our signals.</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#888', lineHeight: 1.75, maxWidth: '620px', marginBottom: '52px' }}>
          Phoebex&apos;s cross-domain intelligence applies across industries. If your decisions depend on economic conditions, labor markets, consumer behavior, or geopolitical events — there&apos;s a signal for that.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '60px' }}>
          {[
            { industry: 'Retail & Consumer Brands', signals: ['Consumer spending forecast', 'Holiday season predictor', 'Pricing power signal', 'Inventory planning indicator'], icon: '🛍️' },
            { industry: 'Government & Municipal', signals: ['Revenue forecast model', 'State/local budget signal', 'Unemployment benefit planning', 'Economic policy indicators'], icon: '🏛️' },
            { industry: 'HR & Staffing Firms', signals: ['Talent market tightness', 'Compensation timing signal', 'Workforce risk dashboard', 'Hiring/layoff indicator'], icon: '👥' },
            { industry: 'Media & Financial Publishers', signals: ['Economic health score', 'Recession probability', 'Financial stress index', 'Sector rotation signal'], icon: '📊' },
            { industry: 'Logistics & Supply Chain', signals: ['Supply chain risk score', 'Manufacturing orders signal', 'Inventory ratio indicator', 'Energy price forecasts'], icon: '🚚' },
            { industry: 'Healthcare Systems', signals: ['Healthcare employment trends', 'Medical cost pressure', 'Consumer health spending', 'Labor market for clinical'], icon: '🏥' },
          ].map(({ industry, signals, icon }) => (
            <div key={industry} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{icon}</div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>{industry}</div>
              <ul style={{ margin: 0, padding: '0 0 0 16px' }}>
                {signals.map(s => <li key={s} style={{ fontSize: '13px', color: '#666', marginBottom: '6px', lineHeight: 1.4 }}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Custom signal CTA */}
        <div style={{ background: 'linear-gradient(135deg, rgba(14,165,200,0.08) 0%, rgba(14,165,200,0.04) 100%)', border: '1px solid rgba(14,165,200,0.25)', borderRadius: '20px', padding: '48px', textAlign: 'center' }}>
          <div style={{ fontSize: '36px', marginBottom: '16px' }}>🔬</div>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '16px' }}>Don&apos;t see your industry?</h2>
          <p style={{ color: '#888', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.7, fontSize: '15px' }}>
            We can develop custom cross-domain signal packages for your specific use case. Tell us what decisions you need to make and we&apos;ll identify the signals that matter most.
          </p>
          <Link href="/contact?type=custom" style={{ background: TEAL, color: '#000', padding: '15px 40px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'inline-block', marginBottom: '16px' }}>
            Request Custom Signal Development →
          </Link>
          <p style={{ color: '#444', fontSize: '13px', margin: 0 }}>Custom signal packages typically start at $5,000. Ongoing API licensing after delivery.</p>
        </div>
      </section>
    </main>
  )
}
