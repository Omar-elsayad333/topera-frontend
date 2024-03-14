// Stores
import { useAppStore } from '@/stores'

// Hooks
import { useEventSwitchDarkMode } from '@/hooks'

// MUI
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

const ThemeSwitchComponent: React.FC = () => {
  const [state] = useAppStore()
  const onSwitchDarkMode = useEventSwitchDarkMode()
  return (
    <IconButton aria-label="Switch Dark Mode" onClick={onSwitchDarkMode} color="inherit">
      {state.darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

export default ThemeSwitchComponent
