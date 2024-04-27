// Types
import { IArticleDetails } from '@/types/pages/roadmaps'

// MUI
import Stack from '@mui/material/Stack'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface IProps {
  open: boolean
  data: IArticleDetails
  handleDrawer: (state: boolean) => void
}

const ArticleComponent: React.FC<IProps> = ({ open, handleDrawer, data }) => {
  return (
    <div>
      <Button onClick={() => handleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={() => handleDrawer(false)}>
        <Typography variant="h2" color={'primary'} mb={'50px'}>
          {data.name}
        </Typography>
        <Stack gap={'53px'} color={'primary'}>
          {data.sections.map((item) => (
            <Stack id={item.id} gap={'24px'}>
              <Typography variant="h5" color={'black'}>
                {item.head}
              </Typography>
              <Typography variant="h6" color={'black'}>
                {item.body}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Drawer>
    </div>
  )
}

export default ArticleComponent
