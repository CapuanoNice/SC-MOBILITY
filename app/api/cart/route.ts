import { NextResponse } from 'next/server'

export async function GET() {
  // Mock: return empty cart structure
  return NextResponse.json({ items: [], total: 0 })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}))
  // In a real app you would persist the cart per user/session.
  return NextResponse.json({ ok: true, cart: { items: [body], total: body?.price ?? 0 } })
}
