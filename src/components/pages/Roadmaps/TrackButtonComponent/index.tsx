// Types
import { CSSProperties } from 'react'
import { ITrack } from '@/types/pages/roadmaps'

// MUI
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'

interface IProps {
  selected: boolean
  selectedItem: ITrack
  selectTab: (selectedItem: ITrack) => void
}

const TrackButtonComponent: React.FC<IProps> = ({ selectedItem, selected, selectTab }) => {
  const theme = useTheme()

  const style: CSSProperties = {
    minWidth: 'fit-content',
    padding: '18px 25px',
    textAlign: 'center',
    borderRadius: '4px',
    border: selected ? 'none' : `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: selected ? theme.palette.primary.main : 'transparent',
    color: selected ? theme.palette.common.white : theme.palette.common.black,
  }

  return (
    <Box sx={style} onClick={() => selectTab(selectedItem)}>
      <Typography variant="h6">{selectedItem.name}</Typography>
    </Box>
  )
}

export default TrackButtonComponent
