'use client'
import { usePathname } from 'next/navigation'
import { forwardRef, Ref, useImperativeHandle, useState } from 'react'

// Config
import env from '@/config/env'

// Assets
import ContentCopyIcon from '@mui/icons-material/ContentCopy'

// Stores
import { useAlert } from '@/stores/AlertContext'

// Types
import { IShareDialogRef } from '@/types/pages/news'

// MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'

const PostShareComponent = ({ postId, ...args }: { postId: string }, ref: Ref<IShareDialogRef>) => {
  const pathname = usePathname()
  const { setMessage } = useAlert()
  const [open, setOpen] = useState(false)
  const PostLink = `${env.appBase}${pathname}/${postId}`

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(PostLink)
      setMessage('Text copied successfully', 'success')
      handleClose()
    } catch (error) {
      setMessage('Something went wrong', 'error')
    }
  }

  useImperativeHandle(ref, () => {
    return {
      open,
      handleClose,
      handleOpen,
    }
  })

  return (
    <Dialog open={open} onClose={handleClose} aria-describedby="alert-dialog-description" {...args}>
      <DialogContent>
        <DialogTitle sx={{ p: 0, mb: 4, fontSize: '18px', fontWeight: 600 }}>Share post link with others</DialogTitle>
        <DialogContentText sx={{ display: 'flex', gap: 2 }} id="alert-dialog-description">
          <Box
            onClick={() => handleCopyLink}
            sx={{
              p: 1,
              height: '100%',
              maxHeight: '100%',
              borderRadius: '10px',
              border: '1px solid gray',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <ContentCopyIcon />
          </Box>
          <Box
            sx={{
              p: 1,
              overflow: 'hidden',
              borderRadius: '10px',
              whiteSpace: 'nowrap',
              border: '1px solid gray',
              textOverflow: 'ellipsis',
            }}
          >
            {PostLink}
          </Box>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default forwardRef(PostShareComponent)
