import React from 'react'

interface LProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LProps) {
  return <main className={'without-auth'}>{children}</main>
}
