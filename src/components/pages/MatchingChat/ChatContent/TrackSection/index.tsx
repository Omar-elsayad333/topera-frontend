// Types
import { IRecomondations } from '../types'

// Components
import UserCard from '../UserCard'

// MUI
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const TrackSection = ({ data }: { data: IRecomondations }) => {
  return (
    <Stack gap={2} sx={{ width: '100%', mt: 2 }}>
      <Typography fontWeight={600} variant="h6">
        {data.name}
      </Typography>
      <Grid container spacing={3}>
        {data.recommendedUsers?.length > 0 &&
          data.recommendedUsers.map((user) => (
            <Grid item key={user.id} lg={4} sm={6} xs={12}>
              <UserCard data={user} />
            </Grid>
          ))}
      </Grid>
    </Stack>
  )
}

export default TrackSection
