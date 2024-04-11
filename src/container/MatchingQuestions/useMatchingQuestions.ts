import { useState } from 'react'
import { EMatchingQuestionsSteps } from '@/types/pages/matchingQuestions'

const useMatchingQuestions = () => {
  const [currentStep, setCurrentStep] = useState<EMatchingQuestionsSteps>(0)
  return {
    data: {},
    states: { currentStep },
    actions: { setCurrentStep },
  }
}

export default useMatchingQuestions
