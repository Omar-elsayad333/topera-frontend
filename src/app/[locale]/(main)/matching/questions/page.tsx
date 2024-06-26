'use client'
import { NextPage } from 'next'

// MUI
import Container from '@mui/material/Container'

// ASSETS
import MatchingHandLayout from '@/assets/images/matchingHandLayout.svg'
import Typography from '@mui/material/Typography'

// Translation Hook
import { useTranslations } from 'next-intl'

// Container
import useMatchingQuestions from '@/container/MatchingQuestions/useMatchingQuestions'

// Types
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import MultieSelectComponent from '@/components/FormInputs/MultieSelectComponent'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import SelectComponent from '@/components/FormInputs/SelectComponent'
import {
  EMatchingQuestionsSteps,
  IMatchingQuestionsForm,
  StepOneForm,
  StepTwoForm,
} from '@/types/pages/matchingQuestions'
import Slack from 'next-auth/providers/slack'

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
              if (question?.type === 'number') {
                return (
                  <TextFieldComponent
                    key={question.name}
                    type={'number'}
                    control={states.control}
                    name={question.name}
                    label={question.label}
                    error={states.errors[question.name as keyof (StepOneForm | StepTwoForm)] as any}
                  />
                )
              } else if (question.type === 'single') {
                return (
                  <SelectComponent<{ name: string; value: string; disabled?: boolean; default?: boolean }>
                    key={question.name}
                    name={question.name}
                    label={question.label}
                    inputLabel={'name'}
                    control={states.control}
                    inputValue={'value'}
                    options={question?.QuestionChoices ?? []}
                    errors={states.errors[question.name as keyof (StepOneForm | StepTwoForm)]}
                  />
                )
              } else {
                return (
                  <MultieSelectComponent
                    key={question.name}
                    options={question?.QuestionChoices ?? []}
                    minSelect={1}
                    maxSelect={question?.maxLength}
                    name={question.name}
                    label={question.label}
                    inputLabel={'name'}
                    inputValue={'name'}
                    control={states.control}
                    errors={states.errors[question.name as keyof (StepOneForm | StepTwoForm)]}
                  />
                )
              }
            })}
          </Stack>
          <Stack alignSelf={'end'} direction={'row-reverse'}>
            <Button
              sx={{ margin: '24px', width: '100px', alignSelf: 'end' }}
              variant={'contained'}
              size={'small'}
              type={'submit'}
            >
              {t('continue')}
            </Button>
            {states.currentStep === EMatchingQuestionsSteps.StepTwo && (
              <Button
                onClick={() => actions.setCurrentStep(EMatchingQuestionsSteps.StepOne)}
                sx={{
                  color: '#9999',
                  '&:hover': {
                    backgroundColor: 'unset',
                  },
                }}
              >
                {t('back')}
              </Button>
            )}
          </Stack>
        </Stack>
      </Container>
    </form>
  )
}

export default MatchingQuestions
