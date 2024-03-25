'use client'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import env from '@/config/env'
import { ESocialLogin } from '@/types/enums'
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
  const router = useRouter()
  const { getHandler } = useRequestHandlers()
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
    const res = await signIn('credentials', data)
    if (res) {
      router.push('/')
    }
  }

  const handelLoginWithProvider = async (provider: ESocialLogin) => {
    window.location.href = `${env.api_url}/oauth/${provider}`
  }

  return {
    data: {},
    states: { control, errors, currentStage },
    actions: {
      submit: buttonHandlebar,
      handleSubmit,
      formSubmit,
      handelLoginWithProvider,
    },
  }
}

export default useLogin
