'use client'
import { NextPage } from 'next'
import useFinishSignUp from '@/container/FinishSignUp/useFinishSignUp'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import MultieSelectComponent from '@/components/FormInputs/MultieSelectComponent'
const FinishSignUp: NextPage = () => {
  const {
    data,
    actions: { t },
    states,
  } = useFinishSignUp()
  return (
    <>
      <Stack sx={{ width: '100%' }} flexDirection={'column'} gap={'24px'}>
        <Typography variant={'h4'} sx={{ fontWeight: '500' }}>
          {t('head')}
        </Typography>
        <Stack gap={'32px'}>
          {data.list.map((question) => (
            <MultieSelectComponent
              label={question.Text}
              variant={'standard'}
              options={question.QuestionChoices}
              name={question.name}
              inputLabel={'Text'}
              inputValue={'Text'}
              control={states.control}
            />
          ))}
        </Stack>
      </Stack>
    </>
  )
}

export default FinishSignUp
