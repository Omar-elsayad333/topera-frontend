'use client'
import { NextPage } from 'next'

// MUI
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

// ASSETS
import MatchingHandLayout from '@/assets/images/matchingHandLayout.svg'
import Typography from '@mui/material/Typography'

// Translation Hook
import { useTranslations } from 'next-intl'

// Container
import useMatchingQuestions from '@/container/MatchingQuestions/useMatchingQuestions'

// Types
import MatchingQuestionsStepOne from '@/components/pages/MatchingQuestions/MatchingQuestionsStepOne'
import MatchingQuestionsStepTwo from '@/components/pages/MatchingQuestions/MatchingQuestionsStepTwo'
import { EMatchingQuestionsSteps } from '@/types/pages/matchingQuestions'

const MatchingQuestions: NextPage = () => {
  const t = useTranslations('matchingQuestions')
  const { states } = useMatchingQuestions()
  const renderComponent: { [key: number]: React.JSX.Element } = {
    [EMatchingQuestionsSteps.StepOne]: <MatchingQuestionsStepOne />,
    [EMatchingQuestionsSteps.StepTwo]: <MatchingQuestionsStepTwo />,
  }
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        height: '100dvh',
        py: { xs: '60px', md: '50px' },
        backgroundImage: `url('${MatchingHandLayout.src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
      }}
    >
      <Box
        sx={{
          maxWidth: '700px',
          width: '700px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffff',
          border: '1px solid transparent',
          borderRadius: '8px',
          gap: '32px',
          padding: {
            lg: '40px 75px',
            md: '40px 75px',
            xs: '34px 55px',
          },
        }}
      >
        <Typography variant={'h5'}>
          {t('head')} : {t('step')} {states.currentStep + 1} {t('of')} 2
        </Typography>
        {renderComponent[states.currentStep]}
      </Box>
    </Container>
  )
}

export default MatchingQuestions
