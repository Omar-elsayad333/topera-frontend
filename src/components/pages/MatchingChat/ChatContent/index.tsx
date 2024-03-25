'use client'
import { useEffect, useState } from 'react'

// Next intl
import { useTranslations } from 'next-intl'

// Next auth
import { getSession } from 'next-auth/react'

// Assests
import AvatarLogo from '@/assets/images/avatar_logo.svg'

// Components
import MessageComponent from './MessageComponent'

// MUI
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const ChatContent = ({ data }: any) => {
  const t = useTranslations('matching_chat')
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    getUserData()
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  const getUserData = async () => {
    const user: any = await getSession()
    setUserData(user.user)
  }

  const handleDelete = () => {
    console.info('You clicked the delete icon.')
  }

  return (
    <>
      {userData && (
        <Box
          sx={{
            py: 3,
            gap: '30px',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <MessageComponent
            body={data.data}
            avatar={userData.image}
            title={`${userData.firstName} ${userData.lastName}`}
          />
          <MessageComponent title={'Topera'} avatar={AvatarLogo} body={'We recommend working with...'}>
            <Stack direction="row" spacing={2}>
              <Chip datatype="trackChip" label="Deletable" onDelete={handleDelete} />
              <Button variant="primary">confirm</Button>
            </Stack>
            <Typography>If you are happy with this list please click on confirm button to start matching</Typography>
            <Button variant="primary">confirm</Button>
          </MessageComponent>
        </Box>
      )}
    </>
  )
}

export default ChatContent
