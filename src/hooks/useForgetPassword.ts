'use client'
import { useState } from 'react'
import { TForgetPasswordStages } from '@/types/pages/forgetpassword'

const useForgetPassword = () => {
  const [currentStage, setCurrentStage] = useState<TForgetPasswordStages>(1)
  return {
    data: {},
    states: { currentStage },
    actions: { setCurrentStage },
  }
}

export default useForgetPassword
