'use client'
import { useState, FormEvent } from 'react'
import { object, string } from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import env from '@/config/env'
import { ESocialLogin } from '@/types/enums'
import GoogleIcon from '@/assets/icons/google.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import GithubIcon from '@/assets/icons/github.svg'
import { Routes } from '@/routes/routes'
const schema = object({
  email: string().email().required(),
  password: string().required(),
})

interface ILoginForm {
  email: string
  password: string
}
interface IOAuthProvider {
  id: number
  label: string
  icon: any
  providerId: ESocialLogin
}
const OAuthProviders: IOAuthProvider[] = [
  { id: 0, label: 'sigin_in_with_google', icon: GoogleIcon, providerId: 0 },
  { id: 1, label: 'sigin_in_with_linkdin', icon: LinkedinIcon, providerId: 1 },
  { id: 2, label: 'sigin_in_with_github', icon: GithubIcon, providerId: 2 },
]
const useLogin = () => {
  const [currentStage, setCurrentStage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()
  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'mohammedsherif@gmail.com',
      password: 'password1234',
    },
  })

  const formSubmit = async (data: any) => {
    try {
      setLoading(true)
      const res = await signIn('credentials', data)
      if (res) {
        router.push(Routes.home)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  const stagesHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentStage === 1) {
      setCurrentStage(2)
    } else {
      handleSubmit(formSubmit)()
    }
  }
  const handelLoginWithProvider = async (provider: ESocialLogin) => {
    window.location.href = `${env.api_url}/oauth/${provider}`
  }

  return {
    data: { OAuthProviders },
    states: { control, errors, currentStage, loading },
    actions: {
      stagesHandler,
      handleSubmit,
      formSubmit,
      handelLoginWithProvider,
    },
  }
}

export default useLogin
