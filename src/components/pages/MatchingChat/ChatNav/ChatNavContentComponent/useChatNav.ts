import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

// Hooks
import useHandleError from '@/hooks/useHandleError'
import useRequestHandlers from '@/hooks/useRequestHandlers'

// Stores
import { useMatching } from '@/stores'
import { Routes } from '@/routes/routes'

const useChatNav = (ChatType: any) => {
  const router = useRouter()
  const { handleError } = useHandleError()
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
    let endpoint = ''
    if (ChatType === 0) {
      endpoint = workArchiveState ? `/matching/archived/${ChatType}` : `/matching/${ChatType}`
    } else {
      endpoint = learnArchiveState ? `/matching/archived/${ChatType}` : `/matching/${ChatType}`
    }

    const { data, error } = await getHandler({ endpoint, noLoading })
    if (error) return handleError(error)

    const body = [
      { id: 1, name: 'Today', data: data.today },
      { id: 2, name: 'Last 7 days', data: data.lastWeek },
      { id: 3, name: 'Last months', data: data.lastMonths },
    ]

    if (ChatType === 0) {
      workArchiveState ? updateWorkArchiveData(body) : updateWorkData(body)
    } else {
      learnArchiveState ? updateLearnArchiveData(body) : updateLearnData(body)
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
    const { error } = await deleteHandler({ endpoint: `/matching/${selectedChatId}` })
    if (error) return handleError(error)
    getPageData(true)
  }

  const archiveChat = async (selectedChatId: string) => {
    const { error } = await putHandler({ endpoint: `/matching/archived/${selectedChatId}` })
    if (error) return handleError(error)
    getPageData(true)
  }

  const handleOpenEditDialog = (selectedChatId: string) => {
    setDialogId(selectedChatId)
    setEditChatDialog(true)
  }

  const handleCloseEditDialog = () => {
    setEditChatDialog(false)
  }

  const submitEditDialog = async (selectedChatId: string, newValue: string) => {
    setDialogLoading(true)
    const body = { id: selectedChatId, name: newValue }
    const endpoint = `/matching/chatname/${selectedChatId}`
    const { error } = await postHandler({ endpoint, body, noLoading: true })
    setDialogLoading(false)
    if (error) return handleError(error)
    getPageData(true)
    handleCloseEditDialog()
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
