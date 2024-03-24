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
  const { loading, menu, editDialog, startNewChat } = useChatNav(MatchingEnum.WORK)

  const [data, setData] = useState([])

  const workData = useMatching((state) => state.workNavData)
  const workArchiveData = useMatching((state) => state.workArchiveData)

  const workArchiveState = useMatching((state) => state.workArchiveState)
  const updateWorkArchiveState = useMatching((state) => state.updateWorkArchiveState)

  useEffect(() => {
    workArchiveState ? setData(workArchiveData) : setData(workData)
  }, [workData, workArchiveData])

  return (
    <Box sx={{ px: 3 }}>
      <Box sx={{ py: 2, display: 'flex', gap: '16px' }}>
        <Button onClick={() => startNewChat()} startIcon={<AddIcon />} variant="grayButton">
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
