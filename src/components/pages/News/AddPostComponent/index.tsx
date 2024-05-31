'use client'
import { useRef } from 'react'

// Types
import { IAddPostRef } from '@/types/pages/news'

// Comeponents
import FormDialog from './FormDialog'

// MUI
import Button from '@mui/material/Button'

const AddPostComponent = () => {
  const dialogRef = useRef<IAddPostRef>()

  const openDialog = () => {
    dialogRef.current?.handleOpen()
  }

  return (
    <>
      <Button variant="contained" onClick={openDialog}>
        add Post
      </Button>
      <FormDialog ref={dialogRef} />
    </>
  )
}

export default AddPostComponent
