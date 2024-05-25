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
import { ESocialLogin } from '@/types/enums'
import { ReactNode } from 'react'
import { TEducation, TExperience } from '@/container/Profile/types'
import { object } from 'yup'
export interface IProps {
  currentCompany: TExperience
  school: TEducation
  fullLocation: { city: string; country: string }
}

const Intro = ({ currentCompany, school, fullLocation }: IProps) => {
  const t = useTranslations('profile')

  const renderData: Record<ESocialLogin, ReactNode> = {
    0: (
      <ListItem sx={{ display: 'flex', gap: '16px' }}>
        <AlternateEmailIcon color={'disabled'} />
        <Typography variant={'subtitle1'} sx={{ fontWeight: '500' }}>
          Email
        </Typography>
      </ListItem>
    ),
    1: (
      <ListItem sx={{ display: 'flex', gap: '16px' }}>
        <Image height={'24'} src={Discord} alt={'discord-icon'} />
        <Typography variant={'subtitle1'} sx={{ fontWeight: '500' }}>
          github
        </Typography>
      </ListItem>
    ),
  }
  return (
    <Grid item xs={12}>
      <List sx={{ backgroundColor: '#ffff', borderRadius: '10px' }}>
        <ListItem sx={{ padding: '20px' }}>
          <Typography variant={'h6'} sx={{ fontWeight: '600' }}>
            {t('intro')}
          </Typography>
        </ListItem>
        <Divider component={'li'} />
        <ListItem sx={{ display: 'flex', gap: '16px' }}>
          <BusinessCenterIcon color={'disabled'} />
          <Typography variant={'subtitle1'} sx={{ fontWeight: '500' }}>
            {t('work_at', { title: currentCompany?.title, company: currentCompany?.company })}
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'flex', gap: '16px' }}>
          <SchoolIcon color={'disabled'} />
          <Typography variant={'subtitle1'} sx={{ fontWeight: '500' }}>
            {t('went_to', { school: school?.school })}
          </Typography>
        </ListItem>
        {Object.values(fullLocation).some((e) => e !== '') && (
          <ListItem sx={{ display: 'flex', gap: '16px' }}>
            <LocationOnIcon color={'disabled'} />
            <Typography variant={'subtitle1'} sx={{ fontWeight: '500' }}>
              {t('lives_in', fullLocation)}
            </Typography>
          </ListItem>
        )}
        <ListItem sx={{ display: 'flex', gap: '16px' }}>
          <AlternateEmailIcon color={'disabled'} />
          <Typography variant={'subtitle1'} sx={{ fontWeight: '500' }}>
            Email
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'flex', gap: '16px' }}>
          <LinkedInIcon color={'disabled'} />
          <Typography variant={'subtitle1'} sx={{ fontWeight: '500' }}>
            Linked in
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'flex', gap: '16px' }}>
          <GitHubIcon color={'disabled'} />
          <Typography variant={'subtitle1'} sx={{ fontWeight: '500' }}>
            github
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'flex', gap: '16px' }}>
          <Image height={'24'} src={Discord} alt={'discord-icon'} />
          <Typography variant={'subtitle1'} sx={{ fontWeight: '500' }}>
            github
          </Typography>
        </ListItem>
      </List>
    </Grid>
  )
}

export default Intro
