'use client'

import { InputAdornment, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { useEffect, useState } from 'react'
import { IMessage } from '@/types/pages/chat'

interface IChatSectionInputComponentProps {
  selectedChat: string | null
  addMessage: (chatId: string, message: IMessage) => Promise<void>
  createConversation: (content: string) => Promise<void>
}

const ChatSectionInputComponent = ({
  selectedChat,
  addMessage,
  createConversation,
}: IChatSectionInputComponentProps) => {
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    setInputValue('')
  }, [selectedChat])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSend = async () => {
    // need to handle this method, if the chatId == null this mean a new conversation, else
    // create message chat
    if (inputValue.trim()) {
      const newMessage = {
        id: Date.now().toString(), // Temporary ID
        content: inputValue,
        sender: 0, // Assuming 0 is for user
        createdAt: new Date().toISOString(),
      }

      if (selectedChat) {
        await addMessage(selectedChat, newMessage)
      } else {
        await createConversation(newMessage.content)
      }

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
