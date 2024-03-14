'use client'

import Link from 'next/link'
import { Orbitron } from 'next/font/google'

// Next intl
import { useTranslations } from 'next-intl'

// Hooks
import { useLocale } from '@/hooks'

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
  const t = useTranslations('nav')
  const { comparePathnames, addLocale } = useLocale()

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'space-evenly',
      }}
    >
      {navigations.map((page: any, index: number) => (
        <Link key={index} href={addLocale(page.value)}>
          <Button
            sx={{
              my: 2,
              display: 'block',
              fontSize: '16px',
              textTransform: 'capitalize',
              fontWeight: comparePathnames(page.value) ? 700 : 400,
              color: comparePathnames(page.value) ? theme.palette.primary.main : theme.palette.secondary.main,
            }}
          >
            <p className={`${orbitron.className} ${comparePathnames(page.value) && 'active-nav-link'}`}>
              {t(page.text)}
            </p>
          </Button>
        </Link>
      ))}
    </Box>
  )
}

export default DesktopLayoutComponent
