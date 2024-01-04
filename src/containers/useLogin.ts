'use client'

// Validation Controllers
import { object, string } from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// Hooks
import useErrorHandler from '@/hooks/useErrorHandler'

// Contexts
import { useAlert } from '@/contexts/AlertContext'
import { useDictionary } from '@/contexts/DictionaryContext'

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
  const { dict } = useDictionary()
  const { setSuccessMessage } = useAlert()
  const { errorHandler } = useErrorHandler()

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

  const onSubmit = (data: any) => {
    setSuccessMessage(dict.alert.success)
    console.log(data)
  }

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
      errorHandler,
    },
  }
}

export default useLogin
