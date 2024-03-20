// MUI
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'

const InnerLoadingComponent = () => {
  return (
    <Box sx={{ width: '100%' }} color={'primary'}>
      <LinearProgress />
    </Box>
  )
}

export default InnerLoadingComponent
