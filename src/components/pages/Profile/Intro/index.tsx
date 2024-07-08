// MUI
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import SchoolIcon from '@mui/icons-material/School'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

// Icons
import Discord from '@/assets/icons/discord.svg'

// Translation Hook
import { useTranslations } from 'next-intl'

// Next Image
import Image from 'next/image'

// Types
import { TIntro } from '@/container/Profile/types'
import { ReactNode } from 'react'
import Link from 'next/link'

const RenderRow = ({ children, icon }: { children: ReactNode; icon: ReactNode }) => {
  return (
    <ListItem sx={{ display: 'flex', gap: '16px' }}>
      {icon}
      <Typography variant={'subtitle1'} sx={{ fontWeight: '500' }}>
        {children}
      </Typography>
    </ListItem>
  )
}

const Intro = ({ occupation, company, education, city, country, linkedIn, gitHub, email, discord }: TIntro) => {
  const t = useTranslations('profile')

  return (
    <Grid item xs={12}>
      <List sx={{ backgroundColor: '#ffff', borderRadius: '10px' }}>
        <ListItem sx={{ padding: '20px' }}>
          <Typography variant={'h6'} sx={{ fontWeight: '600' }}>
            {t('intro')}
          </Typography>
        </ListItem>
        <Divider component={'li'} />
        {occupation && company && (
          <RenderRow icon={<BusinessCenterIcon color={'disabled'} />}>
            {t('work_at', { title: occupation, company })}
          </RenderRow>
        )}

        {education && (
          <RenderRow icon={<SchoolIcon color={'disabled'} />}>
            <div style={{ display: 'flex', gap: '4px' }}>
              <Typography variant={'subtitle1'} sx={{ fontWeight: 500 }}>
                {t('went_to')}
              </Typography>
              <Typography variant={'h6'} sx={{ fontWeight: 700 }}>
                {education}
              </Typography>
            </div>
          </RenderRow>
        )}

        {city && country && (
          <RenderRow icon={<LocationOnIcon color={'disabled'} />}>
            <div style={{ display: 'flex', gap: '4px' }}>
              <Typography variant={'subtitle1'} sx={{ fontWeight: 500 }}>
                {t('lives_in')}
              </Typography>
              <Typography variant={'h6'} sx={{ fontWeight: 700 }}>
                {country},{city}
              </Typography>
            </div>
          </RenderRow>
        )}

        {linkedIn && (
          <RenderRow icon={<LinkedInIcon color={'disabled'} />}>
            <Link href={linkedIn}>{linkedIn}</Link>
          </RenderRow>
        )}
        {gitHub && (
          <RenderRow icon={<GitHubIcon color={'disabled'} />}>
            <Link href={gitHub}>{gitHub}</Link>
          </RenderRow>
        )}
        {discord && (
          <RenderRow icon={<GitHubIcon color={'disabled'} />}>
            <Link href={discord}>{discord}</Link>
          </RenderRow>
        )}

        {email && (
          <RenderRow icon={<GitHubIcon color={'disabled'} />}>
            <Link href={email}>{email}</Link>
          </RenderRow>
        )}
      </List>
    </Grid>
  )
}

export default Intro
