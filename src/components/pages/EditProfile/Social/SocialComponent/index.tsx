// Component
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import Button from '@mui/material/Button'

// Types
import { ReactNode, useEffect, useState } from 'react'
import { ESocialPlatform } from '@/types/enums'

// Hooks
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import useRequestHandlers from '@/hooks/useRequestHandlers'

// Yup
import { yupResolver } from '@hookform/resolvers/yup'
import { date, object, string } from 'yup'

// Icons
import CloseIcon from '@mui/icons-material/Close'

interface IProps {
  id: string
  text: string
  name: string
  icon: ReactNode
  value: string | null | undefined
  socialId: ESocialPlatform
}
export default function SocialComponent({ icon, text, name, value, id, socialId }: IProps) {
  const [formIsOpen, setFormIsOpen] = useState<boolean>(value !== null)

  // request handler
  const { deleteHandler, putHandler, postHandler } = useRequestHandlers()

  const tEditProfile = useTranslations('edit_profile')

  const schema = object({ input: string().required() })

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<{ input: string }>({
    resolver: yupResolver(schema),
    defaultValues: {
      input: value ?? '',
    },
  })

  // On Update
  const onUpdate = async (value: string) => {
    await putHandler({ endpoint: `profile/social/${id}`, body: { id, email: value, userName: value } })
  }

  // On Submit New
  const onSubmit = async (value: string) => {
    await postHandler({ endpoint: 'profile/social', body: { email: value, socialPlatform: socialId } })
  }

  const submit = async (data: { input: string }) => {
    if (value) {
      await onUpdate(data.input)
    } else await onSubmit(data.input)
  }
  const handelDelete = async () => {
    const { data } = await deleteHandler({ endpoint: `profile/social/${id}` })
    setFormIsOpen(false)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0, 0, 0, 0.2)',
        padding: '16px 0',
      }}
    >
      <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center', color: 'gray' }}>
        {icon}
        <Typography variant={'subtitle1'} sx={{ fontWeight: 600, fontSize: '13px' }}>
          {text}
        </Typography>
      </Box>
      {formIsOpen ? (
        <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <TextFieldComponent control={control} name={'input'} placeholder={text} error={errors['input']} />
          <Button sx={{ height: '26px' }} variant={'contained'} onClick={handleSubmit(submit)}>
            {tEditProfile('submit')}
          </Button>
          <CloseIcon sx={{ cursor: 'pointer' }} fontSize={'small'} onClick={handelDelete} />
        </Box>
      ) : (
        <Button
          sx={{ height: '26px', maxWidth: '100px', alignSelf: 'end' }}
          variant={'contained'}
          onClick={() => setFormIsOpen(true)}
        >
          {tEditProfile('link')}
        </Button>
      )}
    </Box>
  )
}