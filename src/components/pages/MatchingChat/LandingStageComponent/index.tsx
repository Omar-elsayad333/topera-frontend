import Image from 'next/image'

// Next intl
import { useTranslations } from 'next-intl'

// Assets
import LogoIcon from '@/assets/icons/logoIcon.svg'

// MUI
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ChatInputComponent from './ChatInputComponent'
import MessageComponent from './MessageComponent'

const LandingStageComponent = () => {
  const t = useTranslations('matching_chat')

  return (
    <Box
      sx={{
        py: 3,
        gap: '30px',
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          gap: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Image src={LogoIcon} alt="Topera" loading="lazy" />
        <Typography variant="h4">{t('landing_title')}</Typography>
      </Box>
      {/* <MessageCompon/ent title='' body='' > */}

      {/* </MessageComponent> */}
      <ChatInputComponent />
    </Box>
  )
}

export default LandingStageComponent
