'use client'

// Next intl
import { useTranslations } from 'next-intl'

// MUI
import Box from '@mui/material/Box'
import MessageComponent from './MessageComponent'
import { useMatching } from '@/stores'
import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const ChatContent = () => {
  const t = useTranslations('matching_chat')
  const [userData, setUserData] = useState<any>(null)
  const userMessage = useMatching((state) => state.userMessage)

  useEffect(() => {
    getUserData()
  }, [])
  useEffect(() => {
    console.log(userMessage)
  }, [userMessage])

  const getUserData = async () => {
    const user: any = await getSession()
    setUserData(user.user)
  }

  return (
    <Box
      sx={{
        py: 3,
        gap: '30px',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {userData && (
        <MessageComponent title={`${userData.firstName} ${userData.lastName}`} body={userMessage} avatar="">
          omar
        </MessageComponent>
      )}
    </Box>
  )
}

export default ChatContent
