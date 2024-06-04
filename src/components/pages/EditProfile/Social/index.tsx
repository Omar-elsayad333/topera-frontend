// Mui
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'

// Mui Icons
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

// Hooks
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'

// Yup
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import Button from '@mui/material/Button'
import { Simulate } from 'react-dom/test-utils'
import submit = Simulate.submit

export default function Social() {
  const tEditProfile = useTranslations('edit_profile')

  const schema = object({
    email: string(),
    linkedin: string(),
    github: string(),
    discord: string(),
  })
  const {
    formState: { errors },
    control,
    handleSubmit,
    setValue,
    trigger,
  } = useForm<{ email?: string; linkedin?: string; github?: string; discord?: string }>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      linkedin: '',
      github: '',
      discord: '',
    },
  })

  const submit = (data) => {
    console.log(data)
    // console.log(trigger(ele))
  }

  const handelSubmitEvent = async (ele) => {
    const data = await handleSubmit(submit)(ele)
    console.log(data)
  }
  const iconsMap: Record<string, any> = {
    email: <AlternateEmailIcon />,
    linkedin: <LinkedInIcon />,
    github: <GitHubIcon />,
    discord: <AlternateEmailIcon />,
  }
  return (
    <Card sx={{ padding: '32px', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography sx={{ fontWeight: 500 }} variant={'subtitle2'}>
        {tEditProfile('on_the_web')}
      </Typography>
      {['email', 'linkedin', 'github', 'discord'].map((ele) => (
        <Box
          key={ele}
          sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column' }, justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', gap: '16px' }}>
            {iconsMap[ele]}
            <Typography variant={'subtitle1'}>{tEditProfile(ele)}</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: '16px' }}>
            <TextFieldComponent control={control} name={ele} placeholder={tEditProfile(ele)} />
            <Button sx={{ height: '26px' }} variant={'contained'} onClick={handleSubmit(submit)}>
              {tEditProfile('submit')}
            </Button>
          </Box>
        </Box>
      ))}
    </Card>
  )
}
