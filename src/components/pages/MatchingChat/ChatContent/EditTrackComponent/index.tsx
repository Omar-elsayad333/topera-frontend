'use client'

// Validation
import { array, object } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'

// MUI
import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import MultiSelectComponent from '@/components/FormInputs/MultieSelectComponent'

interface IProps {
  data: ITrack[]
  selectedTracks: ITrack[]
  editTrackDialog: boolean
  handleCloseEditDialog: () => void
  submitEditDialog: (data: ITrack[]) => void
}

interface ITrack {
  id: string
  name: string
}

interface IFormInput {
  track: ITrack[]
}

const validationSchema = object({
  track: array(),
})

const EditTrackComponent: React.FC<IProps> = ({
  data,
  editTrackDialog,
  handleCloseEditDialog,
  submitEditDialog,
  selectedTracks,
}) => {
  const theme = useTheme()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      track: selectedTracks,
    },
  })

  const onSubmit: SubmitHandler<any> = async (data) => {
    submitEditDialog(data)
  }

  return (
    <Dialog fullWidth maxWidth="xs" open={editTrackDialog} onClose={handleCloseEditDialog}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>Edit Chat Name</DialogTitle>
        <DialogContent sx={{ mt: '20px' }}>
          <MultiSelectComponent
            label="select tracks"
            inputLabel="name"
            inputValue="id"
            options={data}
            control={control}
            name="track"
          />
          {errors && errors['name']?.message && (
            <label style={{ fontSize: '14px', color: theme.palette.error.main }}>
              {errors['name']?.message?.toString()}
            </label>
          )}
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleCloseEditDialog} sx={{ py: '10px', px: '20px' }}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" sx={{ borderRadius: '4px' }}>
            Edit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}

export default EditTrackComponent
