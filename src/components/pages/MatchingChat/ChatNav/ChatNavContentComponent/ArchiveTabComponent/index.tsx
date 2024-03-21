'use client'

import { useEffect, useState } from 'react'

// Types
import { MatchingEnum } from '@/types/enums'

// Hooks
import useRequestHandlers from '@/hooks/useRequestHandlers'

// Components
import InnerLoadingComponent from '@/components/shared/InnerLoadingComponent'

// MUI
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded'

const ArchiveTabComponent = () => {
  const [learnMatchingData, setlearnMatchingData] = useState<any>(null)
  const { loading, getHandler } = useRequestHandlers()

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
      {learnMatchingData?.lastWeek.length > 0 &&
        learnMatchingData.lastWeek.map((chat: any) => (
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
    </List>
  )
}

export default ArchiveTabComponent
