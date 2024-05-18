'use client'
import { useState } from 'react'

// Types
import { IFramework, ILevel, IStage } from '@/types/pages/framework'

const useFramework = (data: IFramework) => {
  const [selectedLevel, setSelectedLevel] = useState<ILevel>(data?.levels[0])
  const [selectedStage, setSelectedStage] = useState<IStage>(data?.levels[0].stages[0])

  const handleSelecteLevel = (value: ILevel) => {
    setSelectedLevel(value)
    setSelectedStage(value.stages[0])
  }

  const handleSelecteStage = (stage: IStage) => {
    setSelectedStage(stage)
  }

  return {
    states: {
      selectedLevel,
      selectedStage,
    },
    actions: {
      handleSelecteLevel,
      handleSelecteStage,
    },
  }
}

export default useFramework
