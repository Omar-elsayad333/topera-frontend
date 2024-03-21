'use client'

import { useEffect, useState } from 'react'

// Types
import { EChatStatus, MatchingEnum } from '@/types/enums'

// Hooks
import useRequestHandlers from '@/hooks/useRequestHandlers'

// Components
import InnerLoadingComponent from '@/components/shared/InnerLoadingComponent'

// MUI
import List from '@mui/material/List'
import { useTheme } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded'

const WorkTabComponent = ({ archive }: { archive: boolean }) => {
  const theme = useTheme()
  const { loading, getHandler } = useRequestHandlers()
  const [weekMatchingData, setWeekMatchingData] = useState<any>(null)

  useEffect(() => {
    getPageData()
  }, [])

  const getPageData = async () => {
    try {
      const endpoint = archive ? `/matching/archived/${MatchingEnum.WORK}` : `/matching/${MatchingEnum.WORK}`
      const res = await getHandler({ endpoint })
      setWeekMatchingData([
        { name: 'Today', data: res.data.today },
        { name: 'Last 7 days', data: res.data.lastWeek },
        { name: 'Last months', data: res.data.lastMonths },
      ])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {loading ? (
        <InnerLoadingComponent />
      ) : (
        <List>
          {weekMatchingData?.length > 0 &&
            weekMatchingData.map((section: any) => {
              section.data?.length > 0 && (
                <>
                  <Typography sx={{ my: '16px' }} variant="subtitle1" fontWeight={500} color={'gray'}>
                    {section.name}
                  </Typography>
                  {section.data.map((chat: any) => (
                    <ListItem key={chat.id} disablePadding>
                      <ListItemButton sx={{ borderRadius: '6px', alignItems: 'center' }}>
                        <ListItemIcon sx={{ minWidth: '35px' }}>
                          <ChatBubbleRoundedIcon
                            sx={{
                              fontSize: '18px',
                              color:
                                chat.requestStatus === EChatStatus.Open
                                  ? theme.palette.error.main
                                  : theme.palette.success.main,
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
                </>
              )
            })}
        </List>
      )}
    </>
  )
}

export default WorkTabComponent
