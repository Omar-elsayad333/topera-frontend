'use client'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { date } from 'yup'

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

  const buttonHandlebar = () => {
    if (currentStage === 1) {
      setCurrentStage(2)
    }
  }

  const formSubmit = async (data: TLoginForm) => {
    try {
      const res = await
    }
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
