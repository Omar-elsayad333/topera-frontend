'use client'

// MUI
import SendIcon from '@mui/icons-material/Send'
import TextField from '@mui/material/TextField'
import { SxProps, useTheme } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'

const ChatInputComponent = () => {
  const theme = useTheme()

  const style: SxProps = {
    width: '80%',
    background: theme.palette.background.paper,
    '& .MuiInputBase-root': { borderRadius: '18px' },
  }

  return (
    <TextField
      sx={style}
      variant="outlined"
      placeholder="Ask me anything..."
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SendIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default ChatInputComponent
