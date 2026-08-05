import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware()

export const config = {
  // Protect all routes except _next/static, _next/image and the API routes
  matcher: ['/', '/((?!_next/static|_next/image|api|favicon.ico).*)']
}
