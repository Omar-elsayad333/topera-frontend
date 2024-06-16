// Mui
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'

// Mui Icons
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

// Hooks
import { useTranslations } from 'next-intl'

// Component
import SocialComponent from '@/components/pages/EditProfile/Social/SocialComponent'

// Types
import { ESocialPlatform } from '@/types/enums'
import { TSocials } from '@/components/pages/EditProfile/types'

interface ISocialCProps {
  email: string | null
  linkedin: string | null
  github: string | null
  discord: string | null
}
export default function Social({ value }: { value: ISocialCProps }) {
  const tEditProfile = useTranslations('edit_profile')

  const iconsMap: Record<string, any> = {
    email: <AlternateEmailIcon />,
    linkedin: <LinkedInIcon />,
    github: <GitHubIcon />,
    discord: <AlternateEmailIcon />,
  }
  const SocialIds: Record<string, ESocialPlatform> = {
    email: ESocialPlatform.Google,
    linkedin: ESocialPlatform.LinkedIn,
    github: ESocialPlatform.GitHub,
    discord: ESocialPlatform.Discord,
  }
  return (
    <Card sx={{ padding: '32px', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography sx={{ fontWeight: 500 }} variant={'subtitle2'}>
        {tEditProfile('on_the_web')}
      </Typography>
      {['email', 'linkedin', 'github', 'discord'].map((ele) => (
        <SocialComponent
          id={SocialIds[ele]}
          key={ele}
          icon={iconsMap[ele]}
          text={tEditProfile(ele)}
          name={ele}
          value={value[ele as TSocials]}
        />
      ))}
    </Card>
  )
}
