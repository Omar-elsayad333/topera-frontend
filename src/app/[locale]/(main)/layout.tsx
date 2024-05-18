import { PropsWithChildren } from 'react'

// Components
import Layout from '@/components/layout'

// MUI
import Container from '@mui/material/Container'

interface IProps extends PropsWithChildren {}

export default function RootLayout({ children }: IProps) {
  return (
    <Layout>
      <main>
        <Container maxWidth={false}>{children}</Container>
      </main>
    </Layout>
  )
}
