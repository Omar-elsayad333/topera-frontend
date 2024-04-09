'use client'

import { useEffect, useState } from 'react'

// Types
import { MatchingEnum } from '@/types/enums'

// Store
import { useMatching } from '@/stores'

// Components
import EditChatComponent from '../EditChatComponent'
import ChatContentComponent from '../ChatContentComponent'
import InnerLoadingComponent from '@/components/shared/InnerLoadingComponent'

// Containers
import useChatNav from '../useChatNav'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import ToggleButton from '@mui/material/ToggleButton'
import InventoryIcon from '@mui/icons-material/Inventory'

const WorkTabComponent = () => {
  const theme = useTheme()
  const matching = useMatching()
  const [data, setData] = useState([])
  const { loading, menu, editDialog, startNewChat } = useChatNav(MatchingEnum.WORK)

  useEffect(() => {
    matching.workArchiveState ? setData(matching.workArchiveData) : setData(matching.workNavData)
  }, [matching.workNavData, matching.workArchiveData, matching.workArchiveState])

  return (
    <Box sx={{ px: 3 }}>
      <Box sx={{ py: 2, display: 'flex', gap: '16px' }}>
        <Button onClick={() => startNewChat()} startIcon={<AddIcon />} variant="grayButton">
          new chat
        </Button>
        <ToggleButton
          color="primary"
          value="check"
          selected={matching.workArchiveState}
          sx={{ borderColor: matching.workArchiveState ? theme.palette.primary.main : '' }}
          onChange={() => {
            matching.updateWorkArchiveState()
          }}
        >
          <InventoryIcon />
        </ToggleButton>
      </Box>
      {loading ? <InnerLoadingComponent /> : <ChatContentComponent {...{ data, menu }} />}
      <EditChatComponent
        dialogId={editDialog.dialogId}
        loading={editDialog.dialogLoading}
        editChatDialog={editDialog.editChatDialog}
        submitEditDialog={editDialog.submitEditDialog}
        handleCloseEditDialog={editDialog.handleCloseEditDialog}
      />
    </Box>
  )
}

export default WorkTabComponent
