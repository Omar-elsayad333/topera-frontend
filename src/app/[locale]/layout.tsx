import type { Metadata } from 'next'

// Components
import NavbarComponent from '@/components/layout/NavbarComponent'
import FooterComponent from '@/components/layout/FooterComponent'

// MUI
import Container from '@mui/material/Container'

interface IProps {
  params: any
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    template: '%s | Topera',
    default: 'Topera - High with Sci-AI',
  },
  description:
    'The coming era of Artificial Intelligence will not be the era of war, but be the era of deep compassion, non-violence, and love.',
}

export default function RootLayout({ children, params }: IProps) {
  return (
    <html lang={params.locale} dir={params.locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <NavbarComponent />
        <main>
          <Container sx={{ mt: '70px' }}>{children}</Container>
        </main>
        <FooterComponent />
      </body>
    </html>
  )
}
