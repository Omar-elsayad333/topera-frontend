'use client'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { getServerAuthSession } from '@/services/auth'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

interface TLoginForm {
  email: string
  password: string
}

const useLogin = () => {
  const [currentStage, setCurrentStage] = useState<number>(1)
  const user = getServerAuthSession()
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<TLoginForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'mohammedsherif@gmail.com',
      password: 'password1234',
    },
  })

  const buttonHandlebar = (e: any) => {
    e.preventDefault()
    if (currentStage === 1) {
      setCurrentStage(2)
    }
  }

  const formSubmit = async (data: any) => {
    await signIn('credentials', data)
  }

  return {
    data: {},
    states: { control, errors, currentStage },
    actions: {
      submit: buttonHandlebar,
      handleSubmit,
      formSubmit,
    },
  }
}

export default useLogin
