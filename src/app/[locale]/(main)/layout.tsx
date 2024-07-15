import { PropsWithChildren } from 'react'

// Components
import Layout from '@/components/layout'

// MUI
import LayoutWrapper from '@/components/layout/LayoutWrapper'

interface IProps extends PropsWithChildren {}

export default function RootLayout({ children }: IProps) {
  return (
    <Layout>
      <LayoutWrapper>{children}</LayoutWrapper>
    </Layout>
  )
}
