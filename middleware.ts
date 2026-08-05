import { authMiddleware } from '@clerk/nextjs/server'

export default authMiddleware()

export const config = {
  // Protect all routes except _next/static, _next/image and the API routes
  matcher: ['/', '/((?!_next/static|_next/image|api|favicon.ico).*)']
}
