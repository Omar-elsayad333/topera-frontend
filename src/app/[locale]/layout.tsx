import Head from 'next/head'
import type { Metadata } from 'next'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export const metadata: Metadata = {
  title: {
    template: '%s | Topera',
    default: 'Topera - High with Sci-AI',
  },
  description:
    'The coming era of Artificial Intelligence will not be the era of war, but be the era of deep compassion, non-violence, and love.',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: any
}) {
  return (
    <html lang={params.locale} dir={params.locale === 'ar' ? 'rtl' : 'ltr'}>
      <Head>
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#4285f4" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#4285f4" />
      </Head>
      <body>
        <Typography component={'h1'} variant="h2">
          This Is My Layout
        </Typography>
        <Button href="/ar/test" variant="contained">
          Arabic
        </Button>
        <Button href="/en/test" variant="contained">
          English
        </Button>

        {children}
      </body>
    </html>
  )
}
