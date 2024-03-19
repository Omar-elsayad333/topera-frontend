'use client'

import { Suspense, useEffect, useState } from 'react'

// Services
import { getData } from '@/services/requestHandler'

// Types
import { MatchingEnum } from '@/types/matching'

// MUI
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded'
import SplashComponent from '@/components/shared/SplashComponent'

const WorkTabComponent = () => {
  const [weekMatchingData, setWeekMatchingData] = useState<any>(null)

  useEffect(() => {
    getPageData()
  }, [])

  const getPageData = async () => {
    const res = await getData(`/matching/${MatchingEnum.LEARN}`)
    setWeekMatchingData(res.data)
  }

  return (
    <List>
      <Suspense fallback={<SplashComponent />}>
        {weekMatchingData?.lastWeek.length > 0 &&
          weekMatchingData.lastWeek.map((chat: any) => (
            <ListItem key={chat.id} disablePadding>
              <ListItemButton sx={{ borderRadius: '6px', alignItems: 'center' }}>
                <ListItemIcon sx={{ minWidth: '35px' }}>
                  <ChatBubbleRoundedIcon />
                </ListItemIcon>
                <ListItemText primary={chat.name} />
                <ListItemIcon sx={{ minWidth: 'unset' }}>
                  <MoreHorizRoundedIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
      </Suspense>
    </List>
  )
}

export default WorkTabComponent
