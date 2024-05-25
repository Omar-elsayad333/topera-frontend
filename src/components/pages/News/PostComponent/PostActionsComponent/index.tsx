'use client'

// Assets
import ShareIcon from '@mui/icons-material/Share'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

// MUI
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

const PostActionsComponent = () => {
  return (
    <Stack direction={'row'} gap={2}>
      <Button
        variant="postActions"
        startIcon={
          <IconButton onClick={() => console.log('up')}>
            <ExpandLessIcon />
          </IconButton>
        }
        endIcon={
          <IconButton onClick={() => console.log('down')}>
            <ExpandMoreIcon />
          </IconButton>
        }
      >
        61
      </Button>
      <Button variant="postActions" startIcon={<ShareIcon />}>
        share
      </Button>
    </Stack>
  )
}

export default PostActionsComponent
