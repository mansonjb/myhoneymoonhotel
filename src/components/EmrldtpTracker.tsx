'use client'
import Script from 'next/script'
import { useEffect, useState } from 'react'

const COOKIE_KEY = 'mhh_cookie_consent'

/**
 * Consent-gated emrldtp loader. Same pattern as GA4 + Clarity.
 * Loads only after explicit cookie acceptance — required for GDPR/ePrivacy
 * since the script drops a tracking cookie under EU jurisdiction.
 */
export default function EmrldtpTracker() {
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
    <Script
      id="emrldtp-loader"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function () {
    var script = document.createElement("script");
    script.async = 1;
    script.src = 'https://emrldtp.com/NTMwOTEw.js?t=530910';
    document.head.appendChild(script);
})();`,
      }}
    />
  )
}
