import { useEffect, useState } from 'react'

// Hooks
import useRequestHandlers from '@/hooks/useRequestHandlers'

const useChatNav = (ChatType: any, archive: boolean) => {
  const [matchingData, setMatchingData] = useState<any>([])
  const [dialogLoading, setDialogLoading] = useState(false)
  const [editChatDialog, setEditChatDialog] = useState(false)
  const [dialogId, setDialogId] = useState<null | string>(null)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { loading, getHandler, deleteHandler, putHandler, postHandler } = useRequestHandlers()
  const open = Boolean(anchorEl)

  useEffect(() => {
    getPageData()
  }, [archive])

  const getPageData = async (noLoading: boolean = false) => {
    try {
      const endpoint = archive ? `/matching/archived/${ChatType}` : `/matching/${ChatType}`
      const res = await getHandler({ endpoint, noLoading })
      setMatchingData([
        { id: 1, name: 'Today', data: res.data.today },
        { id: 2, name: 'Last 7 days', data: res.data.lastWeek },
        { id: 3, name: 'Last months', data: res.data.lastMonths },
      ])
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(null)
  }

  const handleSelect = (selectedChatId: string, eventType: string) => {
    setAnchorEl(null)
    if (eventType === 'delete') return deleteChat(selectedChatId)
    if (eventType === 'archive') return archiveChat(selectedChatId)
    if (eventType === 'edit') return handleOpenEditDialog(selectedChatId)
  }

  const deleteChat = async (selectedChatId: string) => {
    try {
      await deleteHandler({ endpoint: `/matching/${selectedChatId}` })
      getPageData(true)
    } catch (error) {
      console.log(error)
    }
  }

  const archiveChat = async (selectedChatId: string) => {
    try {
      await putHandler({ endpoint: `/matching/archived/${selectedChatId}` })
      getPageData(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleOpenEditDialog = (selectedChatId: string) => {
    setDialogId(selectedChatId)
    setEditChatDialog(true)
  }

  const handleCloseEditDialog = () => {
    setEditChatDialog(false)
  }

  const submitEditDialog = async (selectedChatId: string, newValue: string) => {
    try {
      setDialogLoading(true)
      const body = { id: selectedChatId, name: newValue }
      const endpoint = `/matching/chatname/${selectedChatId}`
      await postHandler({ endpoint, body, noLoading: true })
      getPageData(true)
      handleCloseEditDialog()
    } catch (error) {
      console.log(error)
    } finally {
      setDialogLoading(false)
    }
  }

  return {
    loading,
    matchingData,
    editDialog: {
      dialogId,
      dialogLoading,
      editChatDialog,
      submitEditDialog,
      handleCloseEditDialog,
    },
    menu: {
      open,
      anchorEl,
      handleClick,
      handleClose,
      handleSelect,
    },
  }
}

export default useChatNav
