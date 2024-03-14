import { NextPage } from 'next'

// Config
import { getDictionary } from '@/config/locale'

// Assets
import MatchingHandLayout from '@/../public/images/matchingHandLayout.svg'

// MUI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import Image from 'next/image'

interface IProps {
  params: {
    locale: string
  }
}

const Matching: NextPage<IProps> = async ({ params }) => {
  const { matching_questions: dict, general: general_dict } = await getDictionary(params.locale || 'ar')

  return <Container maxWidth="xl" sx={{ py: { xs: '60px', md: '100px' } }}></Container>
}

export default Matching
