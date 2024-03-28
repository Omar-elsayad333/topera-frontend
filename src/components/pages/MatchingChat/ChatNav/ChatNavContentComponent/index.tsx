'use client'
import { useRouter } from 'next/navigation'

// Next intl
import { useTranslations } from 'next-intl'

// Routes
import { Routes } from '@/routes/routes'

// Stores
import { useMatching } from '@/stores'

// Components
import WorkTabComponent from './WorkTabComponent'
import LearnTabComponent from './LearnTabComponent'

// MUI
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Toolbar from '@mui/material/Toolbar'

const ChatNavContentComponent = () => {
  const router = useRouter()
  const t = useTranslations('matching_chat_nav')

  const type = useMatching((state) => state.type)
  const updateTypeNav = useMatching((state) => state.updateTypeNav)

  const handleChange = () => {
    updateTypeNav()
  }

  const startNewChat = () => {
    router.replace(Routes.matchingChat)
  }

  return (
    <Box>
      <Toolbar sx={{ p: '0px !important' }}>
        <Tabs
          value={type}
          variant="fullWidth"
          sx={{ width: '100%' }}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={t('learn')}
            value={1}
            sx={{
              textTransform: 'capitalize',
              fontWeight: type === 0 ? 600 : 400,
              fontSize: type === 0 ? '14px' : '12px',
            }}
          />
          <Tab
            label={t('work')}
            value={0}
            sx={{
              textTransform: 'capitalize',
              fontWeight: type === 1 ? 600 : 400,
              fontSize: type === 1 ? '14px' : '12px',
            }}
          />
        </Tabs>
      </Toolbar>
      {type === 1 ? <LearnTabComponent /> : <WorkTabComponent />}
    </Box>
  )
}

export default ChatNavContentComponent
