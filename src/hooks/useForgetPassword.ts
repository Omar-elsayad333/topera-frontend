import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

const schema = yup.object({
  email: yup.string().email().required(),
})

interface TForgetPasswordForm {
  email: string
}

const useForgetPassword = () => {
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<TForgetPasswordForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'mohammedsherif@gmail.com',
    },
  })

  const submit = () => {
    console.log('sweat')
  }

  return {
    data: {},
    states: { control, errors },
    actions: { handleSubmit, submit },
  }
}

export default useForgetPassword
