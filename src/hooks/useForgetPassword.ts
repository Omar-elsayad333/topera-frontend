'use client'
import { useEffect, useState } from 'react'
import { TForgetPasswordStages } from '@/types/pages/forgetpassword'

const useForgetPassword = () => {
  const [currentStage, setCurrentStage] = useState<TForgetPasswordStages>(1)
  const [email, setEmail] = useState<string>('')

  return {
    data: { email },
    states: { currentStage },
    actions: { setCurrentStage, setEmail },
  }
}

export default useForgetPassword
