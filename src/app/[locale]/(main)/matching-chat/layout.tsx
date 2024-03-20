import { Metadata } from 'next'

// MUI
import Grid from '@mui/material/Grid'

interface IProps {
  nav: any
  content: any
}

export const metadata: Metadata = {
  title: 'Matching Chat',
}

const MatchingChatLayout = ({ content, nav }: IProps) => {
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
