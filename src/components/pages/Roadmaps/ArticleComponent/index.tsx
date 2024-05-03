import { memo, useEffect, useState } from 'react'

// Types
import { IArticleDetails } from '@/types/pages/roadmaps'

// Hooks
import useHandleError from '@/hooks/useHandleError'
import useRequestHandlers from '@/hooks/useRequestHandlers'

// MUI
import Stack from '@mui/material/Stack'
import Drawer from '@mui/material/Drawer'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'

interface IProps {
  id: string
  open: boolean
  handleDrawer: (state: boolean) => void
}

const ArticleComponent: React.FC<IProps> = ({ id, open, handleDrawer }) => {
  const { handleError } = useHandleError()
  const { getHandler } = useRequestHandlers()
  const [data, setData] = useState<IArticleDetails | null>(null)

  useEffect(() => {
    if (id) getData()
  }, [id])

  const getData = async () => {
    const { error, data } = await getHandler({ endpoint: `/roadmaps/article/${id}` })
    if (error) return handleError(error)
    setData(data)
  }

  if (!data) return ''

  return (
    <div>
      <Drawer anchor="left" open={open} onClose={() => handleDrawer(false)}>
        <Container sx={{ position: 'relative', backgroundColor: '#F4F4FF', pt: 4, height: '100%' }}>
          <CloseIcon
            color="primary"
            onClick={() => handleDrawer(false)}
            sx={{ position: 'absolute', top: '20px', right: '20px' }}
          />
          <Typography variant="h2" color={'primary'} mb={'50px'}>
            {data.name}
          </Typography>
          <Stack gap={'53px'} color={'primary'}>
            {data.sections.map((item) => (
              <Stack key={item.id} id={item.id} gap={'24px'}>
                <Typography variant="h5" color={'primary'}>
                  {item.head}
                </Typography>
                <Typography variant="h6" color={'black'}>
                  {item.body}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Container>
      </Drawer>
    </div>
  )
}

export default memo(ArticleComponent)
