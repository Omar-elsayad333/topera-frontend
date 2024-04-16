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
import { EMatchingQuestionsSteps } from '@/types/pages/matchingQuestions'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import MultieSelectComponent from '@/components/FormInputs/MultieSelectComponent'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'

const MatchingQuestions: NextPage = () => {
  const t = useTranslations('matchingQuestions')
  const { data, states, actions } = useMatchingQuestions()

  return (
    <form onSubmit={actions.submit}>
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
        <Stack
          spacing={'32px'}
          sx={{
            maxWidth: '700px',
            width: '700px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#ffff',
            border: '1px solid transparent',
            height: 'fit-content',
            borderRadius: '8px',
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
          <Stack gap={'40px'}>
            {data.toDisplayQuestions.map((question) => {
              if (!question?.QuestionChoices?.length) {
                return (
                  <TextFieldComponent
                    key={question.name}
                    type={'number'}
                    control={states.control}
                    name={question.name}
                    label={question.label}
                  />
                )
              } else {
                return (
                  <MultieSelectComponent
                    key={question.name}
                    options={question?.QuestionChoices}
                    minSelect={1}
                    name={question.name}
                    label={question.label}
                    inputLabel={'name'}
                    inputValue={'name'}
                    control={states.control}
                    errors={states.errors[question.name]}
                  />
                )
              }
            })}
          </Stack>
          <Button
            sx={{ margin: '24px', width: '100px', alignSelf: 'end' }}
            variant={'contained'}
            size={'small'}
            type={'submit'}
          >
            {t('continue')}
          </Button>
        </Stack>
      </Container>
    </form>
  )
}

export default MatchingQuestions
