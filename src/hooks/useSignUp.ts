'use client'
import { ESocialLogin } from '@/types/enums'
import GoogleIcon from '@/assets/icons/google.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import GithubIcon from '@/assets/icons/github.svg'
import env from '@/config/env'
import { useState } from 'react'

// Validation
import { object, string, ref } from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface IOAuthProvider {
  id: number
  label: string
  icon: SVGElement
  providerId: ESocialLogin
}

interface IFormInput {
  type: 'text' | 'password'
  id: number
  name: keyof ISignUpForm
  xs: 6 | 12
}

interface ISignUpForm {
  firstname: string
  lastname: string
  email: string
  password: string
  confirmPassword: string
}

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
  email: string().email().required(),
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

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<ISignUpForm>({
    resolver: yupResolver(schema),
    defaultValues,
  })
  const handelSignUpWithProvider = async (provider: ESocialLogin) => {
    window.location.href = `${env.api_url}/oauth/${provider}`
  }
  return {
    data: { OAuthProviders, FormInputs },
    states: { inForm, control, errors },
    actions: { handelSignUpWithProvider, setInForm },
  }
}

export default useSignUp
