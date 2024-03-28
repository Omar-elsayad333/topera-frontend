import { ESocialLogin } from '@/types/enums'
import GoogleIcon from '@/assets/icons/google.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import GithubIcon from '@/assets/icons/github.svg'
import env from '@/config/env'
import { useState } from 'react'

interface IOAuthProvider {
  id: number
  label: string
  icon: SVGElement
  providerId: ESocialLogin
}
const OAuthProviders: IOAuthProvider[] = [
  { id: 0, label: 'signup_with_google', icon: GoogleIcon, providerId: 0 },
  { id: 1, label: 'signup_with_linkdin', icon: LinkedinIcon, providerId: 1 },
  { id: 2, label: 'signup_with_github', icon: GithubIcon, providerId: 2 },
]
const useSignUp = () => {
  const [inForm, setInForm] = useState<boolean>(false)
  const handelSignUpWithProvider = async (provider: ESocialLogin) => {
    window.location.href = `${env.api_url}/oauth/${provider}`
  }
  return {
    data: { OAuthProviders },
    states: { inForm },
    actions: { handelSignUpWithProvider, setInForm },
  }
}

export default useSignUp
