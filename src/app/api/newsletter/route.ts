import { NextResponse } from 'next/server'

/**
 * Newsletter capture endpoint.
 * Stub implementation — logs to server console.
 * Swap for ConvertKit, Mailchimp, Buttondown, or similar when ready.
 */
export async function POST(req: Request) {
  try {
    const { email } = await req.json() as { email?: string }
    if (!email || !email.includes('@')) {
      return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 })
    }
    // TODO: forward to your ESP. For now, log so Vercel captures it.
    console.log(`[newsletter] new subscriber: ${email} at ${new Date().toISOString()}`)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
