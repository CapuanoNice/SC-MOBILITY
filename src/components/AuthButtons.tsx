"use client"

import React from 'react'
import { SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-2">
      <SignInButton>
        <button className="px-3 py-2 rounded-md bg-white/5">Iniciar sesión</button>
      </SignInButton>
      <SignOutButton>
        <button className="px-3 py-2 rounded-md border">Cerrar sesión</button>
      </SignOutButton>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}
