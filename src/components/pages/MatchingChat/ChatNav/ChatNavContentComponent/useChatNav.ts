import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

// Hooks
import useRequestHandlers from '@/hooks/useRequestHandlers'

// Stores
import { useMatching } from '@/stores'
import { Routes } from '@/routes/routes'

const useChatNav = (ChatType: any) => {
  const router = useRouter()
  const type = useMatching((state) => state.type)

  const updateWorkData = useMatching((state) => state.updateWorkNavData)
  const updateLearnData = useMatching((state) => state.updateLearnNavData)

  const workArchiveState = useMatching((state) => state.workArchiveState)
  const learnArchiveState = useMatching((state) => state.learnArchiveState)

  const updateWorkArchiveState = useMatching((state) => state.updateWorkArchiveState)
  const updateLearnArchiveState = useMatching((state) => state.updateLearnArchiveState)

  const updateWorkArchiveData = useMatching((state) => state.updateWorkArchiveData)
  const updateLearnArchiveData = useMatching((state) => state.updateLearnArchiveData)

  const [dialogLoading, setDialogLoading] = useState(false)
  const [editChatDialog, setEditChatDialog] = useState(false)
  const [dialogId, setDialogId] = useState<null | string>(null)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { loading, getHandler, deleteHandler, putHandler, postHandler } = useRequestHandlers()
  const open = Boolean(anchorEl)

  useEffect(() => {
    getPageData()
  }, [type, workArchiveState, learnArchiveState])

  const getPageData = async (noLoading: boolean = false) => {
    try {
      let endpoint = ''
      if (ChatType === 0) {
        endpoint = workArchiveState ? `/matching/archived/${ChatType}` : `/matching/${ChatType}`
      } else {
        endpoint = learnArchiveState ? `/matching/archived/${ChatType}` : `/matching/${ChatType}`
      }

      const res = await getHandler({ endpoint, noLoading })

      const body = [
        { id: 1, name: 'Today', data: res.today },
        { id: 2, name: 'Last 7 days', data: res.lastWeek },
        { id: 3, name: 'Last months', data: res.lastMonths },
      ]

      if (ChatType === 0) {
        workArchiveState ? updateWorkArchiveData(body) : updateWorkData(body)
      } else {
        learnArchiveState ? updateLearnArchiveData(body) : updateLearnData(body)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const startNewChat = () => {
    if (ChatType === 0) {
      workArchiveState && updateWorkArchiveState()
    } else {
      learnArchiveState && updateLearnArchiveState()
    }
    router.replace(Routes.matchingChat)
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
    startNewChat,
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
