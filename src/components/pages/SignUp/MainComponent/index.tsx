import Image from 'next/image'

// MUI
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

// Types
import { IMainComponentProps } from '@/types/pages/signup'

// Hooks
import { useTranslations } from 'next-intl'

const MainComponent = ({ providers, handelSignUp, switchToForm }: IMainComponentProps) => {
  const t = useTranslations('signUp')
  return (
    <Stack useFlexGap spacing={'40px'} sx={{ margin: '10px 0 100px' }}>
      <Button sx={{ fontSize: '16px', fontWeight: '600' }} onClick={() => switchToForm(true)} variant={'socialButton'}>
        {t('signUpWithEmail')}
      </Button>
      <Stack spacing={'32px'} useFlexGap>
        <Divider sx={{ width: '100%', color: 'gray' }} color={'gray'} flexItem>
          {t('or_sigin_in_with_email')}
        </Divider>
        {providers.map((provider) => (
          <Button
            sx={{ width: '100%', height: '52px', borderRadius: '24px', color: 'black', padding: '18px 0' }}
            key={provider.id}
            variant={'socialButton'}
            onClick={() => handelSignUp(provider.providerId)}
            startIcon={<Image src={provider.icon} alt={provider.label} />}
          >
            {t(provider.label)}
          </Button>
        ))}
      </Stack>
    </Stack>
  )
}

export default MainComponent
