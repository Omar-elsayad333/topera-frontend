'use client'
import { useState } from 'react'

// Next intl
import { useTranslations } from 'next-intl'

// Components
import WorkTabComponent from './WorkTabComponent'
import LearnTabComponent from './LearnTabComponent'

// MUI
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import AddIcon from '@mui/icons-material/Add'
import ToggleButton from '@mui/material/ToggleButton'
import InventoryIcon from '@mui/icons-material/Inventory'

const ChatNavContentComponent = () => {
  const t = useTranslations('matching_chat_nav')
  const theme = useTheme()
  const [value, setValue] = useState(0)
  const [archive, setArchive] = useState(false)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    setArchive(false)
  }

  return (
    <Box>
      <Toolbar sx={{ p: '0px !important' }}>
        <Tabs
          value={value}
          variant="fullWidth"
          sx={{ width: '100%' }}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label={t('learn')}
            value={0}
            sx={{
              textTransform: 'capitalize',
              fontWeight: value === 0 ? 600 : 400,
              fontSize: value === 0 ? '14px' : '12px',
            }}
          />
          <Tab
            label={t('work')}
            value={1}
            sx={{
              textTransform: 'capitalize',
              fontWeight: value === 1 ? 600 : 400,
              fontSize: value === 1 ? '14px' : '12px',
            }}
          />
        </Tabs>
      </Toolbar>
      <Box sx={{ px: 3 }}>
        <Box sx={{ py: 2, display: 'flex', gap: '16px' }}>
          <Button startIcon={<AddIcon />} variant="grayButton">
            new chat
          </Button>
          <ToggleButton
            color="primary"
            value="check"
            selected={archive}
            sx={{ borderColor: archive ? theme.palette.primary.main : '' }}
            onChange={() => {
              setArchive(!archive)
            }}
          >
            <InventoryIcon />
          </ToggleButton>
        </Box>
        {value === 0 && <LearnTabComponent {...{ archive }} />}
        {value === 1 && <WorkTabComponent {...{ archive }} />}
      </Box>
    </Box>
  )
}

export default ChatNavContentComponent
