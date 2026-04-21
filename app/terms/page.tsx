'use client'
import Nav from '@/app/components/Nav'
export default function Terms() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Nav />
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(60px, 8vw, 100px) 20px 80px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px' }}>Terms of Service</h1>
        <p style={{ color: '#555', marginBottom: '40px', fontSize: '13px' }}>Last updated: April 2026</p>
        {[
          ['Acceptance', 'By accessing the Phoebex API, you agree to these terms. If you do not agree, do not use the service.'],
          ['API Usage', 'API keys are for authorized use only and may not be shared. You are responsible for all usage under your API key. Rate limits apply per tier.'],
          ['Not Investment Advice', 'All signals and data provided by Phoebex are for informational purposes only. Nothing constitutes investment, financial, legal, or actuarial advice. Past performance does not guarantee future results.'],
          ['Intellectual Property', 'The Phoebex methodology is proprietary and patent pending (US #64/030,255). You may not reverse engineer, reproduce, or redistribute our signals or methodology.'],
          ['Limitation of Liability', 'Phoebex is provided "as is." ZiggyTech Ventures LLC is not liable for any losses arising from use of our signals or data.'],
          ['Termination', 'We may terminate API access for violation of these terms, non-payment, or abuse of the service.'],
          ['Contact', 'For terms questions, contact jordan@ziggytechventures.com'],
        ].map(([title, text]) => (
          <div key={title} style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '10px' }}>{title}</h2>
            <p style={{ color: '#888', lineHeight: 1.7, fontSize: '14px' }}>{text}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
