'use client'
import { useRouter } from 'next/navigation'

// Validation
import { object, string } from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// Hooks
import useRequestHandlers from '@/hooks/useRequestHandlers'

// Stores
import { useMatching } from '@/stores'

// MUI
import SendIcon from '@mui/icons-material/Send'
import TextField from '@mui/material/TextField'
import { SxProps, useTheme } from '@mui/material'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'

interface IFormInput {
  data: string
}

const validationSchema = object({
  data: string().required('Please enter message'),
})

const ChatInputComponent = () => {
  const theme = useTheme()
  const router = useRouter()
  const { loading, postHandler } = useRequestHandlers()

  const type = useMatching((state) => state.type)
  const updateUserMessage = useMatching((state) => state.updateUserMessage)

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
        type,
      }
      const res = await postHandler({ endpoint: '/matching', body })
      console.log('create res', res)
      router.replace(`matching-chat?chatId=${res.id}`)
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
        <label style={{ fontSize: '14px', color: theme.palette.error.main }}>
          {errors && errors['data']?.message && errors['data']?.message?.toString()}
        </label>
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
      </FormControl>
    </form>
  )
}

export default ChatInputComponent
