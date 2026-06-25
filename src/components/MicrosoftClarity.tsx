'use client'
import Script from 'next/script'
import { useEffect, useState } from 'react'

const COOKIE_KEY = 'mhh_cookie_consent'
// Microsoft Clarity project ID — set when you create the project at
// https://clarity.microsoft.com. Heatmaps + session recordings, free,
// no sampling, GDPR-compliant when gated by consent.
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID || 'wtntak1br9'

/**
 * GDPR-compliant Microsoft Clarity loader.
 * Same consent gate as GA4 — only loads after explicit "accepted".
 * Gives us heatmaps, scroll depth, session replays, dead-click reports
 * for free. Critical for understanding why 0.12% CTR converts.
 */
export default function MicrosoftClarity() {
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

  if (!enabled || !CLARITY_ID) return null

  // Next.js docs: `beforeInteractive` ONLY works in the root layout as a
  // server component. In a `'use client'` component it is silently
  // downgraded / ignored — which is why Clarity recorded zero sessions
  // for 3 weeks while GA4 (using `afterInteractive`) captured 22.
  // `afterInteractive` is the correct strategy for a consent-gated client
  // component.
  return (
    <Script
      id="ms-clarity"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}");`,
      }}
    />
  )
}
