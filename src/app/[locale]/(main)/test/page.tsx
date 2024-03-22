'use client'
import { NextPage } from 'next'

// Components
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'

// Container
import { useTest } from './useTest'
import { Button } from '@mui/material'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'

const Test: NextPage = () => {
  const { control, errors, onsubmit, handleSubmit } = useTest()
  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)}>
        <TextFieldComponent control={control} name={'email'} error={errors['email']} label={'email'} />
        <Button type={'submit'} variant={'contained'}>
          omar
        </Button>
        <Button variant={'socialButton'} startIcon={<AccessAlarmIcon />}>
          omar
        </Button>
      </form>
    </>
  )
}

export default Test
