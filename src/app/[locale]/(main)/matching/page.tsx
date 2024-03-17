import Link from 'next/link'
import Image from 'next/image'
import { NextPage } from 'next'

// Assets
import MatchingHandLayout from '@/assets/images/matchingHandLayout.svg'

// Routes
import { Routes } from '@/routes/routes'

// Next intl
import { useTranslations } from 'next-intl'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Matching: NextPage = () => {
  const tGeneral = useTranslations('general')
  const tMatching = useTranslations('matching')

  return (
    <Container maxWidth="xl" sx={{ py: { xs: '60px', md: '100px' } }}>
      <Box sx={{ mb: '64px' }}>
        <Typography color={'primary'} variant="h1" sx={{ mb: '32px' }}>
          {tMatching('what_is_matching_title')}
        </Typography>
        <Typography variant="h5">{tMatching('what_is_matching_body')}</Typography>
      </Box>
      <Box sx={{ mb: '48px' }}>
        <Typography color={'primary'} variant="h4" sx={{ mb: '32px' }}>
          {tMatching('how_to_use_title')}
        </Typography>
        <Typography variant="h5">{tMatching('how_to_use_body')}</Typography>
      </Box>
      <Link href={Routes.matchingRoom}>
        <Button
          variant="contained"
          sx={{
            color: '#fff',
            fontSize: '24',
            maxWidth: '100%',
            fontWeight: '600',
            borderRadius: '50px',
            p: { xs: '18px 120px', md: '18px 190px' },
          }}
        >
          {tGeneral('start')}
        </Button>
      </Link>
      <Box
        sx={{
          left: '50%',
          maxWidth: '70%',
          position: 'absolute',
          transform: 'translate(-50%, 0%)',
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Image quality={50} loading="lazy" alt="Topera Matching" src={MatchingHandLayout} />
      </Box>
    </Container>
  )
}

export default Matching
