// MUI
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

interface IProps {
  size?: number
  variant?: 'secondary' | 'inherit' | 'primary' | 'error' | 'info' | 'success' | 'warning'
}

const OuterLoadingComponent: React.FC<IProps> = ({ size, variant }) => {
  return (
    <Box sx={{ display: 'grid' }}>
      <CircularProgress size={size} color={variant || 'primary'} />
    </Box>
  )
}

export default OuterLoadingComponent
