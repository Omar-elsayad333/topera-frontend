import React from 'react'

import Layout from '@/components/layout'
interface LProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LProps) {
  return (
    <Layout>
      <main>{children}</main>
    </Layout>
  )
}
