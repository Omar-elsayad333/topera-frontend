// Mui
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'
import TextAreaComponent from '@/components/FormInputs/TextAreaComponet'

// Hooks
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import useRequestHandlers from '@/hooks/useRequestHandlers'

// Yup
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'
import { useEffect } from 'react'

export default function DescriptionComponent({ value }: { value: string | undefined }) {
  const { loading, putHandler } = useRequestHandlers()

  const tEditProfile = useTranslations('edit_profile')
  const schema = object({
    description: string().required(),
  })
  const {
    formState: { errors },
    control,
    handleSubmit,
    setValue,
  } = useForm<{ description: string }>({
    resolver: yupResolver(schema),
    defaultValues: {
      description: value ?? '',
    },
  })
  const submit = async (data: { description: string }) => {
    const body = { bio: data.description }
    await putHandler({ endpoint: 'profile/bio', body })
  }

  useEffect(() => {
    if (value) setValue('description', value)
  }, [value])

  return (
    <Card
      id={'about_me'}
      sx={{ padding: '32px', display: 'flex', flexDirection: 'column', width: '100%', gap: '16px' }}
    >
      <Typography sx={{ fontWeight: 500 }} variant={'subtitle2'}>
        {tEditProfile('about_me')}
      </Typography>
      <TextAreaComponent
        rows={9}
        label={tEditProfile('description')}
        error={errors['description']}
        control={control}
        name={'description'}
      />
      <Stack justifyContent={'end'} direction={'row'} alignItems={'center'} gap={'16px'}>
        <Button variant={'contained'} onClick={handleSubmit(submit)} sx={{ height: '26px' }}>
          {loading ? <CircularProgress size={'1.5rem'} /> : tEditProfile('submit')}
        </Button>
        <CloseIcon fontSize={'small'} />
      </Stack>
    </Card>
  )
}
