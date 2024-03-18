'use client'

import Link from 'next/link'
import { Orbitron } from 'next/font/google'
import { useParams, usePathname } from 'next/navigation'

// Next intl
import { useTranslations } from 'next-intl'

// Constants
import { navigations } from '@/constants'

// MUI
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'

const orbitron = Orbitron({
  display: 'swap',
  subsets: ['latin'],
})

const DesktopLayoutComponent: React.FC = () => {
  const theme = useTheme()
  const params = useParams()
  const pathname = usePathname()
  const t = useTranslations('nav')

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'space-evenly',
      }}
    >
      {navigations.map((page: any, index: number) => (
        <Link key={index} href={page.value}>
          <Button
            sx={{
              my: 2,
              display: 'block',
              fontSize: '16px',
              textTransform: 'capitalize',
              fontWeight: (page.name != 'Home' ? pathname.startsWith(page.value, 3) : pathname === `/${params.locale}`)
                ? 700
                : 400,
              color: (page.name != 'Home' ? pathname.startsWith(page.value, 3) : pathname === `/${params.locale}`)
                ? theme.palette.primary.main
                : theme.palette.secondary.main,
            }}
          >
            <p
              className={`${orbitron.className} ${
                (page.name != 'Home' ? pathname.startsWith(page.value, 3) : pathname === `/${params.locale}`) &&
                'active-nav-link'
              }`}
            >
              {t(page.text)}
            </p>
          </Button>
        </Link>
      ))}
    </Box>
  )
}

export default DesktopLayoutComponent
