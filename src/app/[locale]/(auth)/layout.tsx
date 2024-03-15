import React from 'react'

interface LProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LProps) {
  return <main className={'auth-layout'}>{children}</main>
}
