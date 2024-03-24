'use client'

import { useRouter, useSearchParams } from 'next/navigation'

// Types
import { EChatStatus, MatchingEnum } from '@/types/enums'

// Store
import { useMatching } from '@/stores'

// Components
import ChatMenuComponent from '../ChatMenuComponent'
import InnerLoadingComponent from '@/components/shared/InnerLoadingComponent'

// Containers
import useChatNav from '../useChatNav'

// MUI
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded'
import ToggleButton from '@mui/material/ToggleButton'
import AddIcon from '@mui/icons-material/Add'
import InventoryIcon from '@mui/icons-material/Inventory'

const WorkTabComponent = () => {
  const theme = useTheme()
  const router = useRouter()
  const searchParams = useSearchParams()
  const chatId = searchParams.get('chatId')
  const { loading, menu } = useChatNav(MatchingEnum.WORK)

  const workData = useMatching((state) => state.workNavData)
  const workArchiveData = useMatching((state) => state.workArchiveData)

  const workArchiveState = useMatching((state) => state.workArchiveState)
  const updateWorkArchiveState = useMatching((state) => state.updateWorkArchiveState)

  return (
    <Box sx={{ px: 3 }}>
      <Box sx={{ py: 2, display: 'flex', gap: '16px' }}>
        <Button onClick={() => {}} startIcon={<AddIcon />} variant="grayButton">
          new chat
        </Button>
        <ToggleButton
          color="primary"
          value="check"
          selected={workArchiveState}
          sx={{ borderColor: workArchiveState ? theme.palette.primary.main : '' }}
          onChange={() => {
            updateWorkArchiveState()
          }}
        >
          <InventoryIcon />
        </ToggleButton>
      </Box>
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
                      <ListItemIcon sx={{ minWidth: '30px' }}>
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
                      <Tooltip title={chat.name}>
                        <Typography variant="h6" sx={{ pr: 2, flexGrow: 1 }} noWrap>
                          {chat.name}
                        </Typography>
                      </Tooltip>
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
    </Box>
  )
}

export default WorkTabComponent
