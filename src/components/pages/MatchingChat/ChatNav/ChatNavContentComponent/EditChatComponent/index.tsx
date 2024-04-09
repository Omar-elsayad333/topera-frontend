'use client'

// Validation
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'

// Components
import OuterLoadingComponent from '@/components/shared/OuterLoadingComponent'

// MUI
import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'

interface IProps {
  loading: boolean
  dialogId: string | null
  editChatDialog: boolean
  handleCloseEditDialog: () => void
  submitEditDialog: (selectedChatId: string, newValue: string) => void
}

interface IFormInput {
  name: string
}

const validationSchema = object({
  name: string().required(),
})

const EditChatComponent: React.FC<IProps> = ({
  loading,
  dialogId,
  editChatDialog,
  handleCloseEditDialog,
  submitEditDialog,
}) => {
  const theme = useTheme()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
    },
  })

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    dialogId && submitEditDialog(dialogId, data.name)
  }

  return (
    <Dialog fullWidth maxWidth="xs" open={editChatDialog} onClose={handleCloseEditDialog}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Edit Chat Name</DialogTitle>
        <DialogContent sx={{ mt: '20px' }}>
          <TextField
            autoFocus
            fullWidth
            label="Chat Name"
            variant="standard"
            {...register('name')}
            error={errors && !!errors['name']?.message}
          />
          {errors && errors['name']?.message && (
            <label style={{ fontSize: '14px', color: theme.palette.error.main }}>
              {errors['name']?.message?.toString()}
            </label>
          )}
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleCloseEditDialog}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" disabled={loading}>
            {loading ? <OuterLoadingComponent variant="secondary" size={15} /> : 'Edit'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default EditChatComponent
