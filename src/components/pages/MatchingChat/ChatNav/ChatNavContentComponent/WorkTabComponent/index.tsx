'use client'

import { useRouter, useSearchParams } from 'next/navigation'

// Types
import { EChatStatus, MatchingEnum } from '@/types/enums'

// Components
import ChatMenuComponent from '../ChatMenuComponent'
import InnerLoadingComponent from '@/components/shared/InnerLoadingComponent'

// Containers
import useChatNav from '../useChatNav'

// MUI
import List from '@mui/material/List'
import { Box, useTheme } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded'

const WorkTabComponent = ({ archive }: { archive: boolean }) => {
  const theme = useTheme()
  const router = useRouter()
  const searchParams = useSearchParams()
  const chatId = searchParams.get('chatId')
  const { matchingData, loading, menu } = useChatNav(MatchingEnum.WORK, archive)

  return (
    <>
      {loading ? (
        <InnerLoadingComponent />
      ) : (
        <List>
          {matchingData?.length > 0 &&
            matchingData.map((section: any) => (
              <Box key={section.id}>
                <Typography sx={{ my: '16px' }} variant="subtitle1" fontWeight={500} color={'gray'}>
                  {section.name}
                </Typography>
                {section.data.map((chat: any) => (
                  <ListItem key={chat.id} disablePadding>
                    <ListItemButton
                      selected={chatId === chat.id}
                      onClick={() => router.replace(`matching-chat?chatId=${chat.id}`)}
                      sx={{
                        height: '38px',
                        borderRadius: '6px',
                        alignItems: 'center',
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: '35px' }}>
                        <ChatBubbleRoundedIcon
                          sx={{
                            fontSize: '16px',
                            minWidth: '25px',
                            color:
                              chat.requestStatus === EChatStatus.Open
                                ? theme.palette.error.main
                                : theme.palette.success.main,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={chat.name} sx={{ fontSize: '14px' }} />
                      <ListItemIcon
                        sx={{ color: 'inherit', minWidth: 'unset' }}
                        onClick={menu.handleClick}
                        aria-haspopup="true"
                        aria-expanded={menu.open ? 'true' : undefined}
                        aria-controls={menu.open ? 'account-menu' : undefined}
                      >
                        <MoreHorizRoundedIcon />
                      </ListItemIcon>
                      <ChatMenuComponent
                        open={menu.open}
                        itemId={chat.id}
                        anchorEl={menu.anchorEl}
                        handleClose={menu.handleClose}
                        handleSelect={menu.handleSelect}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </Box>
            ))}
        </List>
      )}
    </>
  )
}

export default WorkTabComponent
