// Types
import { EFollowType } from '@/types/pages/news'

// Assets
import AddIcon from '@mui/icons-material/Add'

// Hooks
import useHandleError from '@/hooks/useHandleError'
import useRequestHandlers from '@/hooks/useRequestHandlers'

// MUI
import Button from '@mui/material/Button'

const OrganizationActionsComponent = ({
  isFollower,
  organizationId,
}: {
  isFollower: boolean
  organizationId: string
}) => {
  const { handleError } = useHandleError()
  const { postHandler } = useRequestHandlers()

  const handleFollow = async () => {
    const body = {
      id: organizationId,
      type: isFollower ? EFollowType.UnFollow : EFollowType.Follow,
    }
    const { error } = await postHandler({ endpoint: 'news/organizations/follow', body })
    if (error) handleError(error)
  }

  return (
    <Button
      color="secondary"
      variant="outlined"
      onClick={handleFollow}
      startIcon={<AddIcon />}
      sx={{ borderRadius: '8px', height: '50px', fontWeight: '500' }}
    >
      {isFollower ? 'Follow' : 'unFollow'}
    </Button>
  )
}

export default OrganizationActionsComponent
