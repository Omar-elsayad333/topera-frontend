'use client'

// Assests
import AvatarLogo from '@/assets/images/avatar_logo.svg'

// Hooks
import useChatContent from './useChatContent'

// Components
import TrackSection from './TrackSection'
import MessageComponent from './MessageComponent'
import EditTrackComponent from './EditTrackComponent'
import OuterLoadingComponent from '@/components/shared/OuterLoadingComponent'
import DelayedComponent from '@/components/shared/AnimationComponents/DelayedComponent'

// MUI
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

interface ITrack {
  id: string
  name: string
}

const ChatContent = ({ data }: any) => {
  const theme = useTheme()
  const { userData, selectedTracks, handleDelete, confirmTracks, loading, recommendations, dialog } =
    useChatContent(data)

  return (
    <>
      {userData && (
        <Stack flexGrow={1} spacing={3} sx={{ py: 3 }}>
          <MessageComponent
            body={data.data}
            key={data.createdOn}
            avatar={userData.image}
            title={`${userData.firstName} ${userData.lastName}`}
          />
          {selectedTracks?.length > 0 && (
            <DelayedComponent key={data.id} delay={3000}>
              <MessageComponent
                key={data.id}
                title={'Topera'}
                avatar={AvatarLogo}
                body={'We recommend working with...'}
              >
                <Stack alignItems={'start'} spacing={1}>
                  <Stack direction="row" alignItems={'center'} spacing={1}>
                    {selectedTracks.length > 0 &&
                      selectedTracks.map((track: ITrack) => (
                        <Chip
                          key={track.id}
                          label={track.name}
                          datatype="trackChip"
                          disabled={selectedTracks.length === 1}
                          onDelete={() => handleDelete(track.id)}
                        />
                      ))}
                    <Button variant="contained" onClick={dialog.handleOpenEditDialog}>
                      add
                    </Button>
                  </Stack>
                  <Typography>
                    If you are happy with this list please click on confirm button to start matching
                  </Typography>
                  <Button
                    disabled={loading}
                    variant="contained"
                    onClick={() => confirmTracks()}
                    sx={{ background: theme.palette.success.main, fontSize: '16px' }}
                  >
                    {loading ? <OuterLoadingComponent size={30} /> : 'confirm'}
                  </Button>
                </Stack>
              </MessageComponent>
            </DelayedComponent>
          )}
          {recommendations?.length > 0 && (
            <DelayedComponent key={data.id} delay={3000}>
              <MessageComponent key={data.id} title={'Topera'} avatar={AvatarLogo} body={'Starting macthing...'}>
                <Stack alignItems={'start'} gap={3}>
                  {recommendations.map((item) => (
                    <TrackSection key={item.id} data={item} />
                  ))}
                </Stack>
              </MessageComponent>
            </DelayedComponent>
          )}
          <EditTrackComponent
            data={data.tracks}
            selectedTracks={selectedTracks}
            editTrackDialog={dialog.editTrackDialog}
            submitEditDialog={dialog.handleEditTracks}
            handleCloseEditDialog={dialog.handleCloseEditDialog}
          />
        </Stack>
      )}
    </>
  )
}

export default ChatContent
