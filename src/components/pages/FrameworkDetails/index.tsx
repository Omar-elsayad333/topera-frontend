'use client'

// Types
import { IFramework } from '@/types/pages/framework'

// Containers
import useFramework from '@/container/roadmapsFramework/useFramework'

// Components
import LevelSelect from './LevelSelect'
import SkillComponent from './SkillComponent'
import StagesComponent from './StagesComponent'
import BlurComponent from '@/components/shared/AnimationComponents/BlurComponent'

// MUI
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

const FrameworkDetails = ({ data }: { data: IFramework }) => {
  const { states, actions } = useFramework(data)

  return (
    <BlurComponent>
      <Stack gap={'50px'} sx={{ mt: 4 }}>
        <LevelSelect
          levels={data.levels}
          selectedLevel={states.selectedLevel}
          handleSelecteLevel={actions.handleSelecteLevel}
        />
        <Grid container spacing={2}>
          <Grid item xs={10} lg={7}>
            {states?.selectedStage && <SkillComponent skills={states.selectedStage.skills} />}
          </Grid>
          <Grid item lg={3} sx={{ display: { xs: 'none', lg: 'block' } }}>
            video
          </Grid>
          <Grid item xs={2}>
            {states?.selectedLevel && (
              <StagesComponent
                stages={states.selectedLevel.stages}
                selectedStageId={states.selectedStage.id}
                handleSelecteStage={actions.handleSelecteStage}
              />
            )}
          </Grid>
        </Grid>
      </Stack>
    </BlurComponent>
  )
}

export default FrameworkDetails
