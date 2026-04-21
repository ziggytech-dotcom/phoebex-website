'use client'
import Nav from '@/app/components/Nav'
export default function Privacy() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Nav />
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(60px, 8vw, 100px) 20px 80px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px' }}>Privacy Policy</h1>
        <p style={{ color: '#555', marginBottom: '40px', fontSize: '13px' }}>Last updated: April 2026</p>
        {[
          ['Information We Collect', 'We collect information you provide when requesting API access, including your name, email, and company. We collect API usage data including request counts, endpoints accessed, and timestamps. We do not sell personal information.'],
          ['How We Use Information', 'We use your information to provide API access, communicate about your account, and improve our service. Usage data is used to enforce rate limits and for billing verification.'],
          ['API Data', 'All signal data served by the Phoebex API is derived from publicly available institutional economic data sources. We do not store any personal or private data through our API.'],
          ['Data Security', 'API keys are stored securely. We use HTTPS for all data transmission. We do not store raw request data beyond 90 days.'],
          ['Contact', 'For privacy questions, contact jordan@ziggytechventures.com'],
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
