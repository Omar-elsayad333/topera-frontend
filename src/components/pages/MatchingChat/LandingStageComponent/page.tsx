import Image from 'next/image'

// Next intl
import { useTranslations } from 'next-intl'

import LogoIcon from '@/assets/icons/logoIcon.svg'

import { Box, Typography } from '@mui/material'

const LandingStageComponent = () => {
  const t = useTranslations('matching_chat')

  return (
    <Box
      sx={{
        gap: '30px',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Image src={LogoIcon} alt="Topera" loading="lazy" />
      <Typography variant="h4">{t('landing_title')}</Typography>
    </Box>
  )
}

export default LandingStageComponent
