import { ReactNode } from 'react'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useTranslations } from 'next-intl'

interface IProps {
  children: ReactNode
  title: string
}
const ComponentHolder = ({ children, title }: IProps) => {
  const t = useTranslations('profile')

  return (
    <Grid item xs={12}>
      <List sx={{ backgroundColor: '#ffff', borderRadius: '10px' }}>
        <ListItem sx={{ padding: '32px' }}>
          <Typography variant={'h6'} sx={{ fontWeight: '600' }}>
            {t(title?.toString())}
          </Typography>
        </ListItem>
        <Divider component={'li'} />
        <div style={{ padding: '24px 32px' }}>{children}</div>
      </List>
    </Grid>
  )
}

export default ComponentHolder
