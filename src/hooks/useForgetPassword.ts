'use client'
import { useEffect, useState } from 'react'
import { EForgetPasswordStages } from '@/types/pages/forgetpassword'
import { localStorageGet } from '@/utils'

const useForgetPassword = () => {
  const [currentStage, setCurrentStage] = useState<EForgetPasswordStages>(0)
  const storedEmail = localStorageGet('userEmailToResetPassword')
  const storedToken = localStorageGet('userTokenToResetPassword')
  useEffect(() => {
    if (storedEmail && storedToken) {
      setCurrentStage(EForgetPasswordStages.NewPasswordStage)
    } else if (storedEmail) {
      setCurrentStage(EForgetPasswordStages.OtpStage)
    } else {
      setCurrentStage(EForgetPasswordStages.EmailStage)
    }
  }, [])
  return {
    data: {},
    states: { currentStage },
    actions: { setCurrentStage },
  }
}

export default useForgetPassword
