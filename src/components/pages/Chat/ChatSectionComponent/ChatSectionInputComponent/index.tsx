'use client'

import { InputAdornment, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { useEffect, useState } from 'react'

interface IChatSectionInputComponentProps {
  selectedChat: string | null
  setSelectedChat: (conversationId: string | null) => void
}

const ChatSectionInputComponent = ({ selectedChat, setSelectedChat }: IChatSectionInputComponentProps) => {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setInputValue('')
  }, [selectedChat])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSend = () => {
    if (inputValue.trim()) {
      // Handle sending the message
      console.log('Send message:', inputValue)
      setInputValue('')
    }
  }

  const inputStyle = {
    width: '100%',
    height: '62px',
    border: 'none',
    '& fieldset': { border: 'none' },
    borderRadius: '38px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  }

  return (
    <TextField
      value={inputValue}
      onChange={handleInputChange}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          handleSend()
        }
      }}
      placeholder="Ask me anything"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SendIcon onClick={handleSend} style={{ cursor: 'pointer' }} />
          </InputAdornment>
        ),
      }}
      sx={inputStyle}
    />
  )
}

export default ChatSectionInputComponent
