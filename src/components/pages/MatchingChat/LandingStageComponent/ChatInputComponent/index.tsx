'use client'

// Validation
import { object, string } from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import useRequestHandlers from '@/hooks/useRequestHandlers'

// MUI
import SendIcon from '@mui/icons-material/Send'
import TextField from '@mui/material/TextField'
import { FormControl, SxProps, useTheme } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'

interface IFormInput {
  data: string
}

const validationSchema = object({
  data: string().required('Please enter message'),
})

const ChatInputComponent = () => {
  const theme = useTheme()
  const { loading, postHandler } = useRequestHandlers()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      data: '',
    },
  })

  const sendMessage = async (data: IFormInput) => {
    try {
      const body = {
        ...data,
        type: 0,
      }
      const res = await postHandler({ endpoint: '/matching', body })
      console.log('res', res)
    } catch (error) {
      console.log(error)
    }
  }

  const style: SxProps = {
    flexGrow: 1,
    overflow: 'hidden',
    borderRadius: '18px',
    background: theme.palette.background.paper,
    '& .MuiOutlinedInput-notchedOutline': { borderWidth: '2px' },
    '& .MuiInputBase-root': { borderRadius: '18px', overflow: 'hidden' },
  }

  return (
    <form style={{ width: '80%' }} onSubmit={handleSubmit(sendMessage)}>
      <FormControl error={!!errors['data']} fullWidth>
        <TextField
          sx={style}
          disabled={loading}
          variant="outlined"
          {...register('data')}
          placeholder="Ask me anything..."
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SendIcon />
              </InputAdornment>
            ),
          }}
        />
        {errors && errors['data']?.message && (
          <label style={{ fontSize: '14px', color: theme.palette.error.main }}>
            {errors['data']?.message?.toString()}
          </label>
        )}
      </FormControl>
    </form>
  )
}

export default ChatInputComponent
