import { CSSProperties, memo } from 'react'

// Types
import { IStage } from '@/types/pages/framework'

// MUI
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import DragHandleIcon from '@mui/icons-material/DragHandle'

interface IProps {
  stages: IStage[]
  selectedStageId: string
  handleSelecteStage: (stage: IStage) => void
}

const StagesComponent = ({ stages, selectedStageId, handleSelecteStage }: IProps) => {
  const theme = useTheme()

  const dotStyle: CSSProperties = {
    width: '10px',
    height: '10px',
    minWidth: '10px',
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: theme.palette.grey[400],
  }

  return (
    <Stack gap={3}>
      {stages?.length > 0 &&
        stages.map((item) => (
          <Stack
            gap={2}
            key={item.id}
            direction={'row'}
            alignItems={'end'}
            justifyContent={'flex-end'}
            onClick={() => handleSelecteStage(item)}
          >
            {selectedStageId === item.id && <Typography variant="h6">{item.name}</Typography>}
            {selectedStageId !== item.id && <Box sx={dotStyle} />}
          </Stack>
        ))}
      <Stack alignItems={'end'} sx={{ alignSelf: 'end' }}>
        <DragHandleIcon />
        <Typography variant="h6">Meun</Typography>
      </Stack>
    </Stack>
  )
}

export default memo(StagesComponent)
