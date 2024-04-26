// Translation
import { useTranslations } from 'next-intl'

// Mui
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import DescriptionIcon from '@mui/icons-material/Description'

// Icon
import DownloadIcon from '@/assets/icons/downloadIcon.svg'
import Image from 'next/image'
const Resume = () => {
  const t = useTranslations('profile')

  return (
    <Grid item xs={12}>
      <List sx={{ backgroundColor: '#ffff', borderRadius: '10px' }}>
        <ListItem sx={{ padding: '20px' }}>
          <Typography variant={'h6'} sx={{ fontWeight: '600' }}>
            {t('resume')}
          </Typography>
        </ListItem>
        <Divider component={'li'} />
        <ListItem sx={{ display: 'flex', gap: '16px', padding: '24px 24px', justifyContent: 'space-between' }}>
          <span style={{ display: 'flex', gap: '16px' }}>
            <DescriptionIcon color={'disabled'} />
            <Typography variant={'subtitle1'} sx={{ fontWeight: '500', color: '#fffff' }}>
              Example-resume.pdf
            </Typography>
          </span>
          <Image loading={'lazy'} src={DownloadIcon} alt={'download-icon'} height={26} width={24} />
        </ListItem>
      </List>
    </Grid>
  )
}

export default Resume
