import { FC } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTranslations } from 'next-intl'
import useNewPasswordComponents from '@//hooks/useNewPasswordComponents'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import Button from '@mui/material/Button'
import OuterLoadingComponent from '@/components/shared/OuterLoadingComponent'
import PasswordInputComponent from '@/components/FormInputs/PasswordInputComponent'
const NewPasswordComponent: FC = () => {
  const t = useTranslations('forgetPassword')
  const { data, states, actions } = useNewPasswordComponents()
  return (
    <form onSubmit={actions.submit} style={{ width: '100%' }}>
      <Stack sx={{ height: '700px', padding: '40px 0px 40px' }} gap={'24px'} justifyItems={'space-around'}>
        <Stack gap={'40px'} sx={{ width: '100%' }}>
          <Typography variant={'h4'}>{t('enterNewPassword')}</Typography>
          {data.form.map((formElement) => (
            <PasswordInputComponent
              label={t(formElement.label)}
              key={formElement.name}
              control={states.control}
              name={formElement.name}
              error={states.errors[formElement.name]}
            />
          ))}
        </Stack>
        <Stack sx={{ width: '100%' }} alignItems={'end'}>
          <Button type={'submit'} disabled={states.loading} variant={'contained'} size={'small'}>
            {states.loading ? <OuterLoadingComponent size={24} /> : t('backToSignIn')}
          </Button>
        </Stack>
      </Stack>
    </form>
  )
}

export default NewPasswordComponent
