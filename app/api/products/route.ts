import { NextResponse } from 'next/server'

const products = [
  { id: '140p', name: 'Monociclo Eléctrico 140 P', price_usd: 2689 },
  { id: '16p', name: 'Monociclo Eléctrico 16 P', price_usd: 2889 },
  { id: '36', name: 'Monociclo Eléctrico 36', price_usd: 1455 },
  { id: '522pre', name: 'Monociclo Eléctrico 522 Pre', price_usd: 1479 },
  { id: '313jha', name: 'Monociclo Eléctrico 313 Jha', price_usd: 3345 },
  { id: 'ntakse', name: 'Scooter Eléctrico NTAKSE', price_usd: 1355 },
  { id: '12prese', name: 'Scooter Eléctrico 12 PRESE', price_usd: 1025 },
  { id: 'n1212', name: 'Scooter Eléctrico N1212', price_usd: 1159 },
  { id: 'm2', name: 'Scooter Eléctrico M2', price_usd: 825 },
  { id: 'm19', name: 'Scooter Eléctrico M19', price_usd: 464 }
]

export async function GET() {
  return NextResponse.json({ products })
}
