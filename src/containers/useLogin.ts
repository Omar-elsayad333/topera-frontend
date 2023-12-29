'use client'

// Validation Controllers
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

interface IFormInput {
  email: string
  password: string
}

const validationSchema = object({
  email: string().email('Enter a valid email').required('Email is required'),
  password: string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

const useLogin = () => {
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: any) => console.log(data)

  return {
    data: {},
    states: {
      control,
      errors,
    },
    actions: {
      reset,
      onSubmit,
      handleSubmit,
    },
  }
}

export default useLogin
