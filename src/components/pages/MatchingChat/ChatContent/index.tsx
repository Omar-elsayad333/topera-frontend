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
import DelayedComponent from '@/components/shared/AnimationComponents/DelayedComponent'

// MUI
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const ChatContent = ({ data }: any) => {
  const theme = useTheme()
  const t = useTranslations('matching_chat')
  const [pageData, setPageData] = useState<any>(null)
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    getUserData()
  }, [])

  useEffect(() => {
    data && setPageData(data)
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
      {userData && pageData && (
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
            body={pageData.data}
            avatar={userData.image}
            title={`${userData.firstName} ${userData.lastName}`}
          />
          <DelayedComponent delay={3000}>
            <MessageComponent title={'Topera'} avatar={AvatarLogo} body={'We recommend working with...'}>
              <Stack alignItems={'start'} spacing={2}>
                <Stack direction="row" alignItems={'center'} spacing={2}>
                  <Chip datatype="trackChip" label={pageData.data} onDelete={handleDelete} />
                  <Button variant="contained">edit</Button>
                </Stack>
                <Typography>
                  If you are happy with this list please click on confirm button to start matching
                </Typography>
                <Button variant="contained" sx={{ background: theme.palette.success.main }}>
                  confirm
                </Button>
              </Stack>
            </MessageComponent>
          </DelayedComponent>
        </Box>
      )}
    </>
  )
}

export default ChatContent
