import { NextResponse } from 'next/server'

/**
 * Newsletter capture endpoint.
 * Stub implementation — logs to server console.
 * Swap for ConvertKit, Mailchimp, Buttondown, or similar when ready.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json() as {
      email?: string
      source?: string
      hotelSlug?: string
      hotelName?: string
      currentPrice?: number
    }
    const { email, source, hotelSlug, hotelName, currentPrice } = body
    if (!email || !email.includes('@')) {
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 })
    }
    // TODO: forward to your ESP. For now, log so Vercel captures it.
    if (source === 'price-drop') {
      console.log(`[newsletter] price-drop alert: ${email} for ${hotelSlug} (${hotelName}) @ $${currentPrice} at ${new Date().toISOString()}`)
    } else {
      console.log(`[newsletter] new subscriber: ${email} at ${new Date().toISOString()}`)
    }
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
