'use client'
import { PropsWithChildren } from 'react'

// MUI
import Container from '@mui/material/Container'
import { usePathname } from 'next/navigation'

const LayoutWrapper = ({ children }: PropsWithChildren) => {
  const pathname = usePathname()
  const withoutContainer = ['/en/chat', '/en']

  return (
    <main>{withoutContainer.includes(pathname) ? children : <Container maxWidth={false}>{children}</Container>}</main>
  )
}

export default LayoutWrapper
