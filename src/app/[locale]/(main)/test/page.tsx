'use client'
import { NextPage } from 'next'

// Container
import { useTest } from './useTest'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import PasswordInputComponent from '@/components/FormInputs/PasswordInputComponent'
import ButtonComponent from '@/components/ButtonComponent'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'

const Test: NextPage = () => {
  const { control } = useTest()
  return (
    <>
      <TextFieldComponent control={control} name={'email'} label={'email'} />
      <PasswordInputComponent control={control} name={'password'} label={'password'} />
      <ButtonComponent variant={'contained'} text={'hallo'} />
      <ButtonComponent text={'Sign in with Google'} variant={'socialButton'} startIcon={<AccessAlarmIcon />} />
    </>
  )
}

export default Test
