'use client'
import { useState } from 'react'

// Types
import { ILevel, IStage } from '@/types/pages/framework'

// Components
import LevelSelect from './LevelSelect'
import SkillComponent from './SkillComponent'

// MUI
import Box from '@mui/material/Box'

const FrameworkDetails = ({ data }: { data: ILevel[] }) => {
  const [selectedLevel, setSelectedLevel] = useState<ILevel>()
  const [selectedStage, setSelectedStage] = useState<IStage>()

  return (
    <section>
      <LevelSelect levels={data} />
      <Box>
        <Box>
          {selectedStage &&
            selectedStage.skills?.length > 0 &&
            selectedStage?.skills.map((item) => <SkillComponent key={item.id} skill={item} />)}
        </Box>
        <Box>video</Box>
        <Box>stages</Box>
      </Box>
    </section>
  )
}

export default FrameworkDetails
