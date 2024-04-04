'use client'
import { useEffect, useState } from 'react'

// Types
import { MatchingEnum } from '@/types/enums'

// Stores
import { useMatching } from '@/stores'

// Containers
import useChatNav from '../useChatNav'

// Components
import EditChatComponent from '../EditChatComponent'
import ChatContentComponent from '../ChatContentComponent'
import InnerLoadingComponent from '@/components/shared/InnerLoadingComponent'

// MUI
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import ToggleButton from '@mui/material/ToggleButton'
import InventoryIcon from '@mui/icons-material/Inventory'

const LearnTabComponent = () => {
  const theme = useTheme()
  const matching = useMatching()
  const [data, setData] = useState([])
  const { loading, menu, editDialog, startNewChat } = useChatNav(MatchingEnum.LEARN)

  useEffect(() => {
    matching.learnArchiveState ? setData(matching.learnArchiveData) : setData(matching.learnNavData)
  }, [matching.learnNavData, matching.learnArchiveData, matching.learnArchiveState])

  return (
    <Box sx={{ px: 3 }}>
      <Box sx={{ py: 2, display: 'flex', gap: '16px' }}>
        <Button onClick={() => startNewChat()} startIcon={<AddIcon />} variant="grayButton">
          new chat
        </Button>
        <ToggleButton
          color="primary"
          value="check"
          selected={matching.learnArchiveState}
          sx={{ borderColor: matching.learnArchiveState ? theme.palette.primary.main : '' }}
          onChange={() => {
            matching.updateLearnArchiveState()
          }}
        >
          <InventoryIcon />
        </ToggleButton>
      </Box>
      <Box>
        {loading ? <InnerLoadingComponent /> : <ChatContentComponent {...{ data, menu }} />}
        <EditChatComponent
          dialogId={editDialog.dialogId}
          loading={editDialog.dialogLoading}
          editChatDialog={editDialog.editChatDialog}
          submitEditDialog={editDialog.submitEditDialog}
          handleCloseEditDialog={editDialog.handleCloseEditDialog}
        />
      </Box>
    </Box>
  )
}

export default LearnTabComponent
