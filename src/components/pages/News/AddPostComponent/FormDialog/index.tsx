'use client'
import Image from 'next/image'
import { CSSProperties, FormEvent, forwardRef, useImperativeHandle } from 'react'

// Containers
import useAddPost from './useAddPost'

// MUI
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'

const avatarStyle: CSSProperties = {
  borderRadius: '50%',
  background: 'black',
}

const FormDialog = ({}, ref: any) => {
  const { handleClose, handleOpen, open, control, errors, handleSubmit, onSubmit } = useAddPost()

  useImperativeHandle(ref, () => {
    return {
      open: open,
      handleOpen: handleOpen,
      handleClose: handleClose,
    }
  })

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{ borderRadius: '12px' }}
      PaperProps={{
        component: 'form',
        onSubmit: handleSubmit(onSubmit),
      }}
    >
      <DialogTitle variant="h5" fontWeight={500}>
        Create Post
      </DialogTitle>
      <DialogContent>
        <Stack direction={'row'} gap={1} alignItems={'center'}>
          <Image src={''} alt="" style={avatarStyle} width={40} height={40} />
          <DialogContentText variant="h6" fontWeight={500}>
            google
          </DialogContentText>
        </Stack>
        <TextFieldComponent
          name="title"
          control={control}
          label="title"
          error={errors['title']}
          placeholder="Write your title"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Subscribe</Button>
      </DialogActions>
    </Dialog>
  )
}

export default forwardRef(FormDialog)
