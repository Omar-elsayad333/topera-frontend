import React from 'react'

// Components
import Layout from '@/components/layout'

// MUI
import { Container } from '@mui/material'
interface LProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LProps) {
  return (
    <Layout>
      <main>
        <Container maxWidth={false}>{children}</Container>
      </main>
    </Layout>
  )
}
