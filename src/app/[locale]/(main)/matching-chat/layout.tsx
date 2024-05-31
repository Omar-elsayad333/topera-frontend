import { Metadata } from 'next'
import { redirect } from 'next/navigation'

// Services
import { getServerAuthSession } from '@/services/auth'

// MUI
import Grid from '@mui/material/Grid'

interface IProps {
  nav: any
  content: any
}

export const metadata: Metadata = {
  title: 'Matching Chat',
}

const MatchingChatLayout = async ({ content, nav }: IProps) => {
  const user = await getServerAuthSession()
  if (!user) redirect('/login')

  return (
    <Grid container spacing={2}>
      <Grid item xs={0} md={3} xl={2}>
        {nav}
      </Grid>
      <Grid item xs={12} md={9} xl={10}>
        {content}
      </Grid>
    </Grid>
  )
}

export default MatchingChatLayout
