import Image from 'next/image'
import { NextPage } from 'next'

// Next intl
import { useTranslations } from 'next-intl'

// Assets
import LogoIcon from '@/assets/icons/logoIcon.svg'

// Components
import ChatContent from '@/components/pages/MatchingChat/ChatContent'
import ChatInputComponent from '@/components/pages/MatchingChat/ChatContent/ChatInputComponent'

// MUI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

interface IProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

const MatchingChatContent: NextPage<IProps> = ({ searchParams }) => {
  const chatId = searchParams.chatId
  const t = useTranslations('matching_chat')

  return (
    <>
      {!chatId ? (
        <Container className="full-screen" sx={{ display: 'flex' }}>
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
            <ChatInputComponent />
          </Box>
        </Container>
      ) : (
        <Container maxWidth="md">
          <ChatContent />
        </Container>
      )}
    </>
  )
}

export default MatchingChatContent
