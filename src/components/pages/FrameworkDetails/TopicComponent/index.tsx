import { memo } from 'react'

// Types
import { ITopic } from '@/types/pages/framework'

// MUI
import Typography from '@mui/material/Typography'

const TopicComponent = ({ topics }: { topics: ITopic[] }) => {
  return (
    <ul>
      {topics?.length > 0 &&
        topics.map((item) => (
          <li key={item.id} style={{ marginBottom: '16px' }}>
            <Typography variant="h5" fontWeight={400}>
              {item.name}
            </Typography>
          </li>
        ))}
    </ul>
  )
}

export default memo(TopicComponent)
