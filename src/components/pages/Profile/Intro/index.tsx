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

const Intro = () => {
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
        <ListItem sx={{ display: 'flex', gap: '16px' }}>
          <BusinessCenterIcon color={'disabled'} />
          <Typography variant={'subtitle1'} sx={{ fontWeight: '500' }}>
            mohamed salah
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'flex', gap: '16px' }}>
          <SchoolIcon color={'disabled'} />
          <Typography variant={'subtitle1'} sx={{ fontWeight: '500' }}>
            graduation of
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'flex', gap: '16px' }}>
          <LocationOnIcon color={'disabled'} />
          <Typography variant={'subtitle1'} sx={{ fontWeight: '500' }}>
            locate in
          </Typography>
        </ListItem>
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
