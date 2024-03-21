'use client'

import { useEffect, useState } from 'react'

// Types
import { EChatStatus, MatchingEnum } from '@/types/enums'

// Hooks
import useRequestHandlers from '@/hooks/useRequestHandlers'

// Components
import InnerLoadingComponent from '@/components/shared/InnerLoadingComponent'

// MUI
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import { useTheme } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded'

const LearnTabComponent = () => {
  const theme = useTheme()
  const { loading, getHandler } = useRequestHandlers()
  const [learnMatchingData, setlearnMatchingData] = useState<any>(null)

  useEffect(() => {
    getPageData()
  }, [])

  const getPageData = async () => {
    try {
      const res = await getHandler({ endpoint: `/matching/${MatchingEnum.LEARN}` })
      setlearnMatchingData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (loading) {
    return <InnerLoadingComponent />
  }

  return (
    <List>
      {learnMatchingData?.today.length > 0 && (
        <Box>
          <Typography sx={{ my: '16px' }} variant="subtitle1" fontWeight={500} color={'gray'}>
            Today
          </Typography>
          {learnMatchingData.today.map((chat: any) => (
            <ListItem key={chat.id} disablePadding>
              <ListItemButton sx={{ borderRadius: '6px', alignItems: 'center' }}>
                <ListItemIcon sx={{ minWidth: '35px' }}>
                  <ChatBubbleRoundedIcon
                    sx={{
                      fontSize: '18px',
                      color:
                        chat.requestStatus === EChatStatus.Open ? theme.palette.error.main : theme.palette.success.main,
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={chat.name} />
                <ListItemIcon sx={{ minWidth: 'unset' }}>
                  <MoreHorizRoundedIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      )}
      {learnMatchingData?.lastWeek.length > 0 && (
        <Box>
          <Typography sx={{ my: '16px' }} variant="subtitle1" fontWeight={500} color={'gray'}>
            Last 7 days
          </Typography>
          {learnMatchingData.lastWeek.map((chat: any) => (
            <ListItem key={chat.id} disablePadding>
              <ListItemButton sx={{ borderRadius: '6px', alignItems: 'center' }}>
                <ListItemIcon sx={{ minWidth: '35px' }}>
                  <ChatBubbleRoundedIcon
                    sx={{
                      fontSize: '18px',
                      color:
                        chat.requestStatus === EChatStatus.Open ? theme.palette.error.main : theme.palette.success.main,
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={chat.name} />
                <ListItemIcon sx={{ minWidth: 'unset' }}>
                  <MoreHorizRoundedIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      )}
      {learnMatchingData?.lastMonths.length > 0 && (
        <Box>
          <Typography sx={{ my: '16px' }} variant="subtitle1" fontWeight={500} color={'gray'}>
            Last months
          </Typography>
          {learnMatchingData.lastMonths.map((chat: any) => (
            <ListItem key={chat.id} disablePadding>
              <ListItemButton sx={{ borderRadius: '6px', alignItems: 'center' }}>
                <ListItemIcon sx={{ minWidth: '35px' }}>
                  <ChatBubbleRoundedIcon
                    sx={{
                      fontSize: '18px',
                      color:
                        chat.requestStatus === EChatStatus.Open ? theme.palette.error.main : theme.palette.success.main,
                    }}
                  />
                </ListItemIcon>
                <ListItemText primary={chat.name} />
                <ListItemIcon sx={{ minWidth: 'unset' }}>
                  <MoreHorizRoundedIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </Box>
      )}
    </List>
  )
}

export default LearnTabComponent
