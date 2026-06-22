import { buildLlmsBody, LLMS_CACHE_HEADERS } from '@/lib/llms-body'

export function GET() {
  const body = buildLlmsBody({ deep: true })
  return new Response(body, { headers: LLMS_CACHE_HEADERS })
}
