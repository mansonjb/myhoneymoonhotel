'use client'
import Script from 'next/script'
import { useEffect, useState } from 'react'

const COOKIE_KEY = 'mhh_cookie_consent'
const GA_ID = 'G-HFH7HZZJBR'

/**
 * GDPR-compliant GA4 loader.
 * Reads the same `mhh_cookie_consent` localStorage flag set by CookieBanner.
 * Only loads gtag.js after explicit "accepted" consent. Listens for the live
 * `mhh:consent` event so consent given mid-session takes effect immediately
 * without requiring a page reload.
 */
export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem(COOKIE_KEY) === 'accepted') setEnabled(true)
    } catch {}
    const onConsent = (e: Event) => {
      const detail = (e as CustomEvent<'accepted' | 'rejected'>).detail
      if (detail === 'accepted') setEnabled(true)
    }
    window.addEventListener('mhh:consent', onConsent)
    return () => window.removeEventListener('mhh:consent', onConsent)
  }, [])

  if (!enabled) return null

  return (
    <>
      <Script
        id="ga-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`,
        }}
      />
    </>
  )
}
