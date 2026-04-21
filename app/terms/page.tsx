'use client'
import Nav from '@/app/components/Nav'
export default function Terms() {
  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a' }}>
      <Nav />
      <section style={{ maxWidth: '720px', margin: '0 auto', padding: 'clamp(60px, 8vw, 100px) 20px 80px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '8px' }}>Terms of Service</h1>
        <p style={{ color: '#555', marginBottom: '40px', fontSize: '13px' }}>Last updated: April 2026 | ZiggyTech Ventures LLC</p>

        {[
          ['1. Acceptance of Terms', 'By accessing or using the Phoebex API, website, or any related services (collectively, the "Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service. These terms constitute a legally binding agreement between you and ZiggyTech Ventures LLC ("Company," "we," "us," or "our").'],
          ['2. Description of Service', 'Phoebex provides cross-domain predictive signal intelligence through a REST API and web interface. The Service delivers statistical signals derived from publicly available economic data sources. All signals are for informational and research purposes only.'],
          ['3. Not Investment Advice', 'THE PHOEBEX SERVICE DOES NOT PROVIDE INVESTMENT, FINANCIAL, LEGAL, TAX, ACTUARIAL, OR ANY OTHER PROFESSIONAL ADVICE. Nothing in the Service constitutes a recommendation to buy, sell, or hold any security, commodity, currency, or other financial instrument. You acknowledge that all investment and financial decisions are made solely at your own risk. Past signal performance does not guarantee future results. Signal accuracy figures represent historical out-of-sample validation results and do not constitute a promise of future performance.'],
          ['4. No Warranty; Disclaimer', 'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, COMPLETENESS, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS. SIGNAL DATA MAY CONTAIN ERRORS, OMISSIONS, OR INACCURACIES.'],
          ['5. Limitation of Liability', 'TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ZIGGYTECCH VENTURES LLC AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNTS PAID BY YOU TO US IN THE THREE MONTHS PRECEDING THE CLAIM.'],
          ['6. API Usage and Restrictions', 'API keys are issued for your authorized use only and may not be shared, sold, or transferred. You may not use the Service to: (a) reverse engineer or reproduce our methodology; (b) create competing products or services using our signals; (c) redistribute signal data to third parties without written permission; (d) violate any applicable laws or regulations; (e) conduct activities that impose unreasonable load on our infrastructure. Violation of these restrictions may result in immediate termination of access.'],
          ['7. Data and Accuracy', 'Phoebex signals are derived from public institutional data sources. While we take reasonable measures to ensure data quality, we make no representations about the accuracy, completeness, or timeliness of signals. Economic data releases from government sources may be revised after initial publication, which may affect signal values. Users are responsible for independently verifying signal data before making decisions.'],
          ['8. Intellectual Property', 'The Phoebex methodology, software, API, website, and all content are the intellectual property of ZiggyTech Ventures LLC. Our cross-domain signal discovery methodology is patent pending (US Patent Application #64/030,255). You receive a limited, non-exclusive, non-transferable license to access the Service for your internal business purposes only. Nothing in these Terms grants you ownership of or rights to our intellectual property.'],
          ['9. Confidentiality', 'You agree to keep confidential any non-public information about our methodology, technology, or business that you may learn through use of the Service. This obligation survives termination of your account.'],
          ['10. Termination', 'We may suspend or terminate your access to the Service at any time for violation of these Terms, non-payment, or abuse of the Service, with or without notice. Upon termination, your right to use the Service immediately ceases.'],
          ['11. Governing Law', 'These Terms shall be governed by the laws of the State of Nevada, without regard to conflict of law principles. Any disputes shall be resolved in the courts of Clark County, Nevada. You waive any objection to jurisdiction or venue in such courts.'],
          ['12. Changes to Terms', 'We reserve the right to modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the updated Terms. We will notify users of material changes via email or the website.'],
          ['13. Contact', 'For questions about these Terms, contact jordan@ziggytechventures.com | ZiggyTech Ventures LLC | Las Vegas, NV'],
        ].map(([title, text]) => (
          <div key={title} style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '10px' }}>{title}</h2>
            <p style={{ color: '#888', lineHeight: 1.75, fontSize: '13px' }}>{text}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
