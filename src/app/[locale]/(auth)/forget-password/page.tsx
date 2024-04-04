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
  switch (states.currentStage) {
    case 0:
      return <EmailComponent changeStage={actions.setCurrentStage} />
    case 1:
      return <OtpComponent back={actions.setCurrentStage} />
    case 2:
      return <NewPasswordComponent />
  }
}

export default ForgetPassword
