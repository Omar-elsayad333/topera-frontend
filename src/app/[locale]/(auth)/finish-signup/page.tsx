'use client'
import { NextPage } from 'next'
import useFinishSignUp from '@/container/FinishSignUp/useFinishSignUp'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import MultieSelectComponent from '@/components/FormInputs/MultieSelectComponent'
import Button from '@mui/material/Button'
const FinishSignUp: NextPage = () => {
  const {
    data,
    actions: { t, submit },
    states,
  } = useFinishSignUp()
  return (
    <form style={{ width: '100%' }} onSubmit={submit}>
      <Stack flexDirection={'column'} gap={'24px'} alignContent={'end'} justifyContent={'end'}>
        <Typography variant={'h4'} sx={{ fontWeight: '500' }}>
          {t('head')}
        </Typography>
        <Stack gap={'32px'}>
          {data.list.map((question, i) => (
            <MultieSelectComponent
              key={i}
              label={question.Text}
              options={question.QuestionChoices}
              errors={states.errors[question.name]}
              name={question.name}
              chipSx={data.chipSx}
              inputLabel={'name'}
              inputValue={'id'}
              control={states.control}
            />
          ))}
        </Stack>
        <Button
          type={'submit'}
          variant={'contained'}
          size={'small'}
          sx={{
            color: 'white',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: '500',
            maxWidth: '110px',
            padding: '10px 20px',
            alignSelf: 'end',
          }}
        >
          {t('submit')}
        </Button>
      </Stack>
    </form>
  )
}

export default FinishSignUp
