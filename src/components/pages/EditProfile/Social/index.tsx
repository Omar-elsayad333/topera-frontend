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
import { ISocial } from '@/components/pages/EditProfile/types'

export default function Social({ data }: { data: ISocial[] | undefined }) {
  const tEditProfile = useTranslations('edit_profile')

  const iconsMap: any = {
    0: <AlternateEmailIcon />,
    4: <LinkedInIcon />,
    1: <GitHubIcon />,
    5: <AlternateEmailIcon />,
  }

  const arrayToMap = data
    ? [
        ...data,
        { socialPlatform: 0, id: '0', email: null },
        { socialPlatform: 4, id: '4', email: null },
        { socialPlatform: 1, id: '1', email: null },
        { socialPlatform: 5, id: '5', email: null },
      ]
    : []

  const uniqueBySocialPlatform = Array.from(
    arrayToMap
      .reduce((map, item) => {
        if (!map.has(item.socialPlatform)) {
          map.set(item.socialPlatform, item)
        }
        return map
      }, new Map())
      .values()
  )

  return (
    <Card sx={{ padding: '32px', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography sx={{ fontWeight: 500 }} variant={'subtitle2'}>
        {tEditProfile('on_the_web')}
      </Typography>
      {Array.isArray(uniqueBySocialPlatform) &&
        uniqueBySocialPlatform.map((ele) => (
          <SocialComponent
            id={ele.id}
            key={ele.socialPlatform}
            icon={iconsMap[ele.socialPlatform]}
            text={tEditProfile(ESocialPlatform[ele.socialPlatform].toLowerCase())}
            name={ESocialPlatform[ele.socialPlatform]}
            socialId={ele.socialPlatform}
            value={ele?.email}
          />
        ))}
    </Card>
  )
}
