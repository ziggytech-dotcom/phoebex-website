'use client'
import Nav from '@/app/components/Nav'
import Link from 'next/link'
const TEAL = '#0EA5C8'
const C = ({ children }: { children: React.ReactNode }) => (
  <code style={{ background: 'rgba(14,165,200,0.1)', border: '1px solid rgba(14,165,200,0.2)', borderRadius: '4px', padding: '2px 8px', fontFamily: 'monospace', fontSize: '13px', color: TEAL }}>{children}</code>
)
const Block = ({ code }: { code: string }) => (
  <pre style={{ background: '#050D1A', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '20px', overflowX: 'auto', fontSize: '13px', lineHeight: 1.6, color: '#ccc', margin: '12px 0 24px' }}><code>{code}</code></pre>
)

export default function Docs() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Nav />
      <section style={{ maxWidth: '820px', margin: '0 auto', padding: 'clamp(60px, 8vw, 100px) 20px 80px' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.02em' }}>API Documentation</h1>
        <p style={{ color: '#888', fontSize: '1rem', marginBottom: '48px' }}>
          Phoebex REST API · Base URL: <C>https://api.phoebex.io</C> · Patent Pending US #64/030,255
        </p>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>Authentication</h2>
        <p style={{ color: '#888', fontSize: '14px', marginBottom: '8px', lineHeight: 1.7 }}>All requests require a Bearer token. <Link href="/contact" style={{ color: TEAL }}>Request an API key →</Link></p>
        <Block code={`curl https://api.phoebex.io/v1/status \\
  -H "Authorization: Bearer YOUR_API_KEY"`} />

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>Endpoints</h2>

        {[
          { method: 'GET', path: '/v1/status', desc: 'API health check — no auth required', code: `{"status":"healthy","version":"1.0.0","available_domains":21}` },
          { method: 'GET', path: '/v1/domains', desc: 'List all 19 available signal domains', code: `{"domains":[{"id":"financial","name":"Financial Market Timing"},...],"count":19}` },
          { method: 'GET', path: '/v1/signals/{domain}', desc: 'Get current signal for a domain. Domains: financial, labor, economic, real-estate, consumer, political, gdelt, commodities, fx, supplychain, sovereign_debt, climate, earnings, airline, crypto, mortgage, credit, pmi, smallbiz', code: `{"domain":"labor","signal":{"direction":"bearish","strength":0.785,"lag_months":6}}` },
          { method: 'GET', path: '/v1/composite', desc: 'All 7 composite economic scores', code: `{"composite_scores":{"recession_probability":{"current_value":5.0},"economic_health":{"current_value":46.1},...},"count":7}` },
          { method: 'GET', path: '/v1/composite/{score_name}', desc: 'Specific composite score. Names: recession_probability, economic_health, financial_stress, labor_stress, inflation_pressure, re_market_health, supplychain_risk', code: `{"score_name":"recession_probability","current_value":5.0,"as_of":"2025-12","scale":"0-100"}` },
          { method: 'GET', path: '/v1/products', desc: 'All 28 commercial product scores', code: `{"products":{"hiring_signal":{"current_value":53.6,"current_label":"MAINTAIN"},...},"count":21}` },
          { method: 'GET', path: '/v1/products/{product_name}', desc: 'Specific product score. Examples: sector_rotation, hiring_signal, ma_timing, pricing_power, capex_timing', code: `{"product":"hiring_signal","current_value":53.6,"current_label":"MAINTAIN headcount","buyer":"HR directors, CFOs"}` },
          { method: 'GET', path: '/v1/real-estate', desc: 'All 27 US metro market forecasts', code: `{"metros":{"las-vegas":{"prediction":"UP","confidence_pct":77},...},"count":27,"lag":"2 quarters (6 months)"}` },
          { method: 'GET', path: '/v1/real-estate/{metro}', desc: 'Specific metro. Use hyphens: las-vegas, new-york, san-francisco, houston, nashville', code: `{"metro":"las-vegas","prediction":"UP","confidence_pct":77,"model_accuracy_pct":77}` },
          { method: 'GET', path: '/v1/cross-domain', desc: 'Top validated cross-domain signal pairs with accuracy', code: `{"strong_signals":15,"top_signals":[{"target":"supplychain_inventory","auc_roc":0.748,"lag_months":6},...]}` },
          { method: 'GET', path: '/v1/accuracy', desc: 'Live accuracy tracking — predictions vs actual outcomes', code: `{"periods_tracked":1,"note":"Accuracy tracking started April 2026. First verification May 2026."}` },
        ].map(({ method, path, desc, code }) => (
          <div key={path} style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ background: 'rgba(14,165,200,0.15)', color: TEAL, fontSize: '11px', fontWeight: 700, padding: '3px 8px', borderRadius: '4px', letterSpacing: '0.05em' }}>{method}</span>
              <C>{path}</C>
            </div>
            <p style={{ color: '#888', fontSize: '13px', marginBottom: '8px', lineHeight: 1.5 }}>{desc}</p>
            <Block code={code} />
          </div>
        ))}

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>Error Codes</h2>
        <div style={{ display: 'grid', gap: '8px', marginBottom: '40px' }}>
          {[['401','Invalid or missing API key'],['403','Domain not included in your tier'],['404','Domain or metric not found'],['429','Rate limit exceeded'],['500','Internal server error']].map(([code, msg]) => (
            <div key={code} style={{ display: 'flex', gap: '16px', padding: '10px', background: 'rgba(255,255,255,0.02)', borderRadius: '6px' }}>
              <span style={{ color: '#EF4444', fontFamily: 'monospace', fontWeight: 700, fontSize: '13px', minWidth: '32px' }}>{code}</span>
              <span style={{ color: '#888', fontSize: '13px' }}>{msg}</span>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>Python Quick Start</h2>
        <Block code={`import requests

API_KEY = "your_api_key_here"
BASE = "https://api.phoebex.io"
headers = {"Authorization": f"Bearer {API_KEY}"}

# Get economic health score
r = requests.get(f"{BASE}/v1/composite/economic_health", headers=headers)
print(r.json()["current_value"])  # e.g. 46.1

# Get all metro forecasts
r = requests.get(f"{BASE}/v1/real-estate", headers=headers)
metros = r.json()["metros"]
bullish = [m for m,d in metros.items() if d["prediction"] == "UP"]
print(f"Bullish metros: {bullish}")`} />

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/contact" style={{ background: TEAL, color: '#000', padding: '14px 36px', borderRadius: '8px', textDecoration: 'none', fontSize: '15px', fontWeight: 700 }}>
            Request API Key →
          </Link>
        </div>
      </section>
    </main>
  )
}
