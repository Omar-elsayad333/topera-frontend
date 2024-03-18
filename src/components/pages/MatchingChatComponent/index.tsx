// MUI
import Grid from '@mui/material/Grid'

// Componetns
import ChatNav from './ChatNav'
import ChatContentComponent from './ChatContentComponent'

const MatchingChatComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={0} md={3} xl={2}>
        <ChatNav />
      </Grid>
      <Grid item xs={12} md={9} xl={10}>
        <ChatContentComponent />
      </Grid>
    </Grid>
  )
}

export default MatchingChatComponent
