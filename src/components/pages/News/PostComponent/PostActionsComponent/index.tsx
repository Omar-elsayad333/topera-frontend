'use client'
import { useRef } from 'react'

// Assets
import ShareIcon from '@mui/icons-material/Share'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// Types
import { EVoteType, IShareDialogRef } from '@/types/pages/news'

// Components
import PostShareComponent from '../PostShareComponent'

// MUI
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

// Hooks
import useHandleError from '@/hooks/useHandleError'
import useRequestHandlers from '@/hooks/useRequestHandlers'

const PostActionsComponent = ({ postId, votes }: { votes: number; postId: string }) => {
  const ShareRef = useRef<IShareDialogRef>(null)
  const { handleError } = useHandleError()
  const { postHandler, loading } = useRequestHandlers()

  const handleVote = async (value: EVoteType) => {
    const body = { id: postId, vote: value }
    const { error } = await postHandler({ endpoint: 'news/post/vote', body })
    if (error) handleError(error)
  }

  return (
    <Stack direction={'row'} gap={2}>
      <PostShareComponent postId={postId} ref={ShareRef} />
      <Button
        disabled={loading}
        variant="postActions"
        startIcon={
          <IconButton onClick={() => handleVote(EVoteType.Up)}>
            <ExpandLessIcon />
          </IconButton>
        }
        endIcon={
          <IconButton onClick={() => handleVote(EVoteType.Down)}>
            <ExpandMoreIcon />
          </IconButton>
        }
      >
        {votes}
      </Button>
      <Button onClick={() => ShareRef.current?.handleOpen()} variant="postActions" startIcon={<ShareIcon />}>
        share
      </Button>
    </Stack>
  )
}

export default PostActionsComponent
