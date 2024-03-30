'use client'
import { FC } from 'react'

// Components
import EmailComponent from '@/components/pages/ForgetPassword/EmailComponent'
import OtpComponent from '@/components/pages/ForgetPassword/OtpComponent'
import NewPasswordComponent from '@/components/pages/ForgetPassword/NewPasswordComponent'

// Hooks
import useForgetPassword from '@/hooks/useForgetPassword'
const ForgetPassword: FC = () => {
  const { data, states, actions } = useForgetPassword()
  switch (states.currentStage) {
    case 1:
      return <EmailComponent changeStage={actions.setCurrentStage} />
    case 2:
      return <OtpComponent />
    case 3:
      return <NewPasswordComponent />
  }
}

export default ForgetPassword
