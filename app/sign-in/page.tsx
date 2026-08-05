"use client"

import React from 'react'
import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100">
      <div className="w-full max-w-md p-6 bg-gray-800/40 rounded-lg glass">
        <SignIn routing="path" path="/sign-in" />
      </div>
    </div>
  )
}
