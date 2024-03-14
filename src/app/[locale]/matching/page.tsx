import Link from 'next/link'
import Image from 'next/image'
import { NextPage } from 'next'

// Config
import { getDictionary } from '@/config/locale'

// Assets
import MatchingHandLayout from '@/../public/images/matchingHandLayout.svg'

// Routes
import routes from '@/routes/routes'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

interface IProps {
  params: {
    locale: string
  }
}

const Matching: NextPage<IProps> = async ({ params }) => {
  const { matching: dict, general: general_dict } = await getDictionary(params.locale || 'ar')

  return (
    <Container maxWidth="xl" sx={{ py: { xs: '60px', md: '100px' } }}>
      <Box sx={{ mb: '64px' }}>
        <Typography color={'primary'} variant="h1" sx={{ mb: '32px' }}>
          {dict.what_is_matching_title}
        </Typography>
        <Typography variant="h5">{dict.what_is_matching_body}</Typography>
      </Box>
      <Box sx={{ mb: '48px' }}>
        <Typography color={'primary'} variant="h4" sx={{ mb: '32px' }}>
          {dict.how_to_use_title}
        </Typography>
        <Typography variant="h5">{dict.how_to_use_body}</Typography>
      </Box>
      <Link href={routes.matchingQuestions}>
        <Button
          variant="contained"
          sx={{ borderRadius: '50px', p: { xs: '18px 120px', md: '18px 190px' }, maxWidth: '100%' }}
        >
          {general_dict.start}
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
