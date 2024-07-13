'use client'
import Image from 'next/image'
import { CSSProperties, forwardRef, useImperativeHandle } from 'react'

// Containers
import useAddPost from './useAddPost'

// Containers
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import MultiSelectComponent from '@/components/FormInputs/MultieSelectComponent'

// MUI
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Typography from '@mui/material/Typography'
import DialogContentText from '@mui/material/DialogContentText'
import SelectComponent from '@/components/FormInputs/SelectComponent'

const avatarStyle: CSSProperties = {
  borderRadius: '50%',
  background: 'black',
}

const FormDialog = ({ organizationId }: { organizationId: string }, ref: any) => {
  const { handleClose, handleOpen, open, control, errors, handleSubmit, onSubmit, tagsData, categoriesData } =
    useAddPost(organizationId)

  useImperativeHandle(ref, () => {
    return {
      open: open,
      handleOpen: handleOpen,
      handleClose: handleClose,
    }
  })

  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container sx={{ padding: '32px', borderRadius: '12px' }} spacing={'12px'} rowGap={'12px'}>
          <Typography variant="h5" fontWeight={500}>
            Create Post
          </Typography>
          <Grid item sm={12}>
            <Stack direction={'row'} gap={1} alignItems={'center'}>
              <Image src={''} alt="" style={avatarStyle} width={40} height={40} />
              <DialogContentText variant="h6" fontWeight={500}>
                google
              </DialogContentText>
            </Stack>
          </Grid>
          <Grid item sm={12}>
            <TextFieldComponent
              name="title"
              control={control}
              label="title"
              error={errors['title']}
              placeholder="Write your title"
            />
          </Grid>
          <Grid item sm={12}>
            <TextFieldComponent
              name="body"
              control={control}
              label="body"
              error={errors['body']}
              placeholder="Write your body"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <MultiSelectComponent
              label="select tags"
              inputLabel="name"
              inputValue="id"
              options={tagsData}
              control={control}
              name="TagIds"
              errors={errors['TagIds']}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <SelectComponent
              label="select categories"
              inputLabel="name"
              inputValue="id"
              options={categoriesData}
              control={control}
              name="NewsCategoryId"
              errors={errors['NewsCategoryId']}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <SelectComponent
              label="select categories"
              inputLabel="name"
              inputValue="id"
              options={categoriesData}
              control={control}
              name="NewsCategoryId"
              errors={errors['NewsCategoryId']}
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <SelectComponent
              label="select categories"
              inputLabel="name"
              inputValue="id"
              options={categoriesData}
              control={control}
              name="NewsCategoryId"
              errors={errors['NewsCategoryId']}
            />
          </Grid>
          <Button type="submit" variant="contained" fullWidth>
            Post
          </Button>
        </Grid>
      </form>
    </Dialog>
  )
}

export default forwardRef(FormDialog)
