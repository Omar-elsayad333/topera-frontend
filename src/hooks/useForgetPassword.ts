'use client'
import { useState } from 'react'

const useForgetPassword = () => {
  const [currentStage, setCurrentStage] = useState<number>(1)
  return {
    data: {},
    states: { currentStage },
    actions: {},
  }
}

export default useForgetPassword
