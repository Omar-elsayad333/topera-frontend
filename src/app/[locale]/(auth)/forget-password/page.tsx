'use client'
import { NextPage } from 'next'

// Components
import EmailComponent from '@/components/pages/ForgetPassword/EmailComponent'
import OtpComponent from '@/components/pages/ForgetPassword/OtpComponent'
import NewPasswordComponent from '@/components/pages/ForgetPassword/NewPasswordComponent'

// Hooks
import useForgetPassword from '@/container/ForgetPassword/useForgetPassword'
const ForgetPassword: NextPage = () => {
  const { data, states, actions } = useForgetPassword()
  const getComponent = {
    0: <EmailComponent changeStage={actions.setCurrentStage} />,
    1: <OtpComponent back={actions.setCurrentStage} />,
    2: <NewPasswordComponent />,
  }
  return getComponent[states.currentStage]
}

export default ForgetPassword
