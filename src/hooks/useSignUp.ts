'use client'
import { FormEvent, useState } from 'react'
import env from '@/config/env'
// Icons
import GoogleIcon from '@/assets/icons/google.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import GithubIcon from '@/assets/icons/github.svg'

// Validation
import { object, string, ref } from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// Types
import { IOAuthProvider, IFormInput, ISignUpForm } from '@/types/pages/signup'
import { ESocialLogin } from '@/types/enums'

// HTTP handler
import useRequestHandlers from '@/hooks/useRequestHandlers'

const OAuthProviders: IOAuthProvider[] = [
  { id: 0, label: 'signup_with_google', icon: GoogleIcon, providerId: 0 },
  { id: 1, label: 'signup_with_linkdin', icon: LinkedinIcon, providerId: 1 },
  { id: 2, label: 'signup_with_github', icon: GithubIcon, providerId: 2 },
]

const FormInputs: IFormInput[] = [
  { id: 1, name: 'firstname', type: 'text', xs: 6 },
  { id: 2, name: 'lastname', type: 'text', xs: 6 },
  { id: 3, name: 'email', type: 'text', xs: 12 },
  { id: 4, name: 'password', type: 'password', xs: 12 },
  { id: 5, name: 'confirmPassword', type: 'password', xs: 12 },
]

const schema = object({
  firstname: string().required(),
  lastname: string().required(),
  email: string(),
  password: string().required(),
  confirmPassword: string()
    .required()
    .oneOf([ref('password'), ''], 'Passwords must match'),
})

const defaultValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const useSignUp = () => {
  const [inForm, setInForm] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const { postHandler } = useRequestHandlers()
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<ISignUpForm>({
    resolver: yupResolver(schema),
    defaultValues,
  })
  const handelSignUpWithProvider = (provider: ESocialLogin) => {
    window.location.href = `${env.api_url}/oauth/${provider}`
  }

  const callServerFunction = async (body: ISignUpForm) => {
    setLoading(true)
    try {
      const res = await postHandler({ endpoint: '/account', body })
      console.log(res)
    } catch (err: any) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await handleSubmit(callServerFunction)()
  }
  return {
    data: { OAuthProviders, FormInputs },
    states: { inForm, control, errors, loading },
    actions: { handelSignUpWithProvider, setInForm, submit },
  }
}

export default useSignUp
