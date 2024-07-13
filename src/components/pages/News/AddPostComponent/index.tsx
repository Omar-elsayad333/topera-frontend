'use client'
import { useRef } from 'react'

// Types
import { IAddPostRef } from '@/types/pages/news'

// Comeponents
import FormDialog from './FormDialog'

// MUI
import Button from '@mui/material/Button'

const AddPostComponent = ({ organizationId = 'bf6c39d7-9c8f-42b1-ade7-301941b4947e' }: { organizationId: string }) => {
  const dialogRef = useRef<IAddPostRef>()

  const openDialog = () => {
    dialogRef.current?.handleOpen()
  }

  return (
    <>
      <Button variant="contained" onClick={openDialog}>
        add Post
      </Button>
      <FormDialog organizationId={organizationId} ref={dialogRef} />
    </>
  )
}

export default AddPostComponent
