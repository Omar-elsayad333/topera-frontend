import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

const SplashComponent = () => {
  return (
    <Backdrop sx={{ color: '#fff' }} open>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default SplashComponent
