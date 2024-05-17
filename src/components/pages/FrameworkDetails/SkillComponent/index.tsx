import { memo } from 'react'

// Types
import { ISkill } from '@/types/pages/framework'

// Components
import TopicComponent from '../TopicComponent'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const SkillComponent = ({ skills }: { skills: ISkill[] }) => {
  return (
    <div>
      {skills?.length > 0 &&
        skills.map((item) => (
          <Box sx={{ mb: '32px' }}>
            <Typography sx={{ mb: '24px' }} color={'primary'} variant="h5" fontWeight={600}>
              {item.name}
            </Typography>
            <Box sx={{ pl: '40px' }}>
              <TopicComponent topics={item.topics} key={item.id} />
            </Box>
          </Box>
        ))}
    </div>
  )
}

export default memo(SkillComponent)
