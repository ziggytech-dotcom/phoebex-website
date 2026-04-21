'use client'
import Nav from '@/app/components/Nav'
import Link from 'next/link'
const TEAL = '#0EA5C8'

export default function Methodology() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Nav />
      <section style={{ maxWidth: '820px', margin: '0 auto', padding: 'clamp(60px, 8vw, 100px) 20px 80px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.02em' }}>Methodology</h1>
        <p style={{ color: '#888', fontSize: '1rem', marginBottom: '48px' }}>How Phoebex discovers, validates, and delivers cross-domain predictive signals.</p>

        {[
          {
            title: 'Data Sources',
            body: `All Phoebex signals are derived exclusively from institutional-grade public data sources including U.S. government economic databases, Federal Reserve publications, Bureau of Labor Statistics releases, and established financial market data. No proprietary, purchased, or synthetic data is used in signal generation. Every input can be independently verified.\n\nData is collected daily and weekly according to each domain's release cadence. Financial market data updates each trading day. Labor, supply chain, and economic indicators update on official release schedules. All signals display the date of the most recent underlying data.`
          },
          {
            title: 'Cross-Domain Signal Discovery',
            body: `Traditional economic analysis examines each domain in isolation. Phoebex systematically tests relationships between domains — whether conditions in one economic area statistically predict outcomes in another, and with what lead time.\n\nSignal pairs are validated using established statistical methods requiring significance thresholds before inclusion. Only relationships that meet these thresholds and demonstrate consistent behavior across multiple time periods are included in the signal library. The methodology is designed to minimize false positives and avoid overfitting to any single historical period.`
          },
          {
            title: 'Composite Intelligence',
            body: `Beyond pairwise domain relationships, Phoebex builds composite models that consider multiple domains simultaneously. These models are trained using machine learning techniques with walk-forward cross-validation — models are always tested on data they were never trained on.\n\nThis out-of-sample validation approach is the same methodology used by institutional quantitative research teams. It ensures that reported accuracy figures reflect real predictive performance, not in-sample curve-fitting.`
          },
          {
            title: 'Validation and Accuracy',
            body: `All signal accuracy figures reported by Phoebex are out-of-sample results from walk-forward validation on 15 years of real economic data. The validation period spans multiple economic cycles including expansion, contraction, rate shock, and recovery phases.\n\nPhoebex began logging live forward predictions in April 2026. These predictions are timestamped and stored. As time elapses, actual outcomes are compared against predictions to build a live track record. This live validation is available to clients via the /v1/accuracy API endpoint.`
          },
          {
            title: 'Limitations',
            body: `Phoebex signals reflect patterns visible in measured economic data. They are designed to identify conditions that resemble historical precursors to economic shifts.\n\nSudden external shocks — geopolitical events, natural disasters, unprecedented policy changes — may not be reflected in signals until their effects appear in measured economic data, which can lag real-world events by weeks or months. No signal system can reliably predict events with no historical precedent.\n\nThese limitations are features of the methodology, not defects. Transparent disclosure of limitations is essential to responsible use of predictive intelligence.`
          },
          {
            title: 'Intellectual Property',
            body: `The Phoebex cross-domain signal discovery methodology is proprietary and patent pending (US Patent Application #64/030,255). The specific statistical relationships identified, the composite model architecture, and the signal delivery system represent original intellectual property of ZiggyTech Ventures LLC.\n\nAPI clients receive signal outputs. The underlying methodology, training data, and model parameters are not disclosed and are protected as trade secrets in addition to pending patent protection.`
          },
        ].map(({ title, body }) => (
          <div key={title} style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, color: TEAL, marginBottom: '14px' }}>{title}</h2>
            {body.split('\n\n').map((para, i) => (
              <p key={i} style={{ color: '#888', fontSize: '14px', lineHeight: 1.8, marginBottom: '12px' }}>{para}</p>
            ))}
          </div>
        ))}

        <div style={{ background: 'rgba(14,165,200,0.06)', border: '1px solid rgba(14,165,200,0.2)', borderRadius: '12px', padding: '28px', marginTop: '8px' }}>
          <p style={{ color: '#888', fontSize: '13px', lineHeight: 1.7, margin: 0 }}>
            For institutional due diligence inquiries, methodology documentation requests, or questions about data sourcing and validation procedures, contact <a href="mailto:jordan@ziggytechventures.com" style={{ color: TEAL }}>jordan@ziggytechventures.com</a>. Additional technical documentation is available to qualified institutional clients and data marketplace reviewers upon request.
          </p>
        </div>
      </section>
    </main>
  )
}
