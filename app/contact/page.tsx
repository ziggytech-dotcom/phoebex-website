'use client'
import Nav from '@/app/components/Nav'
import { useState } from 'react'
const TEAL = '#0EA5C8'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', type: 'access', message: '' })
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      setStatus(res.ok ? 'sent' : 'error')
    } catch { setStatus('error') }
  }

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Nav />
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(60px, 8vw, 100px) 20px 60px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>Get in touch</h1>
        <p style={{ color: '#888', fontSize: '1.1rem', marginBottom: '48px', lineHeight: 1.7 }}>
          Request API access, ask about pricing, or tell us about a custom signal use case. We respond within 24 hours.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          <div>
            {status === 'sent' ? (
              <div style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>✓</div>
                <div style={{ fontWeight: 700, marginBottom: '8px' }}>Message sent</div>
                <div style={{ color: '#888', fontSize: '14px' }}>We&apos;ll respond within 24 hours.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '13px', color: '#888', display: 'block', marginBottom: '6px' }}>Name *</label>
                  <input required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px', color: '#fff', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ fontSize: '13px', color: '#888', display: 'block', marginBottom: '6px' }}>Business Email *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px', color: '#fff', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ fontSize: '13px', color: '#888', display: 'block', marginBottom: '6px' }}>Company</label>
                  <input value={form.company} onChange={e => setForm({...form, company: e.target.value})}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px', color: '#fff', fontSize: '14px', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ fontSize: '13px', color: '#888', display: 'block', marginBottom: '6px' }}>I&apos;m interested in</label>
                  <select value={form.type} onChange={e => setForm({...form, type: e.target.value})}
                    style={{ width: '100%', background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px', color: '#fff', fontSize: '14px', boxSizing: 'border-box' }}>
                    <option value="access">API access / pricing</option>
                    <option value="pilot">Pilot program</option>
                    <option value="enterprise">Enterprise pricing</option>
                    <option value="custom">Custom signal development</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '13px', color: '#888', display: 'block', marginBottom: '6px' }}>Message</label>
                  <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={4}
                    placeholder="Tell us about your use case, data needs, or questions..."
                    style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px', color: '#fff', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }} />
                </div>
                <button type="submit" disabled={status === 'sending'}
                  style={{ background: TEAL, color: '#000', padding: '14px', borderRadius: '8px', border: 'none', fontSize: '15px', fontWeight: 700, cursor: 'pointer' }}>
                  {status === 'sending' ? 'Sending...' : 'Send Message →'}
                </button>
                {status === 'error' && <p style={{ color: '#EF4444', fontSize: '13px' }}>Something went wrong. Email jordan@ziggytechventures.com directly.</p>}
              </form>
            )}
          </div>

          <div>
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>Direct Contact</div>
              <div style={{ color: '#888', fontSize: '14px' }}>jordan@ziggytechventures.com</div>
            </div>
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>API Documentation</div>
              <a href="/docs" style={{ color: TEAL, fontSize: '14px', textDecoration: 'none' }}>View full API reference →</a>
            </div>
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>Patent</div>
              <div style={{ color: '#888', fontSize: '13px' }}>Proprietary methodology<br />Patent Pending US #64/030,255</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: TEAL, marginBottom: '8px' }}>Custom Signal Development</div>
              <div style={{ color: '#888', fontSize: '13px', lineHeight: 1.6 }}>
                Don&apos;t see your industry covered? We build custom cross-domain signal packages. Select &quot;Custom signal development&quot; in the form.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
