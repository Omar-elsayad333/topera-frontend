import { memo } from 'react'

// Types
import { IStage } from '@/types/pages/framework'

// MUI
import Box from '@mui/material/Box'

const StagesComponent = ({ stages }: { stages: IStage[] }) => {
  return <Box>{stages?.length > 0 && stages.map((item) => <p key={item.id}>{item.name}</p>)}</Box>
}

export default memo(StagesComponent)
