// Mui
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Components
import MultieSelectComponent from '@/components/FormInputs/MultieSelectComponent'

// Hooks
import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

// Types
import { ITrack } from '@/components/pages/EditProfile/types'
import { useForm } from 'react-hook-form'
import useRequestHandlers from '@/hooks/useRequestHandlers'
import TrackComponent from '@/components/pages/EditProfile/Tracks/TrackComponent'
import Button from '@mui/material/Button'

export default function Tracks({ tracksData }: { tracksData: any[] }) {
  const { getHandler, putHandler } = useRequestHandlers()

  const [tracks, setTracks] = useState<ITrack[]>([])

  const tEditProfile = useTranslations('edit_profile')

  const defaultValues = { tracks: [] }

  const { control, watch, setValue, handleSubmit } = useForm<Record<string, any>>({ defaultValues })

  const getTracks = async () => {
    const { data } = await getHandler({ endpoint: 'tracks' })

    setTracks(data)
  }

  useEffect(() => {
    getTracks()
  }, [])

  const handleSetTracksInForm = () => {
    for (const item in tracksData) {
      setValue(
        tracksData[item].track,
        tracksData[item].frameworks.map((e: any) => ({ ...e, rate: e.level * 25 }))
      )
      const newTracksValue = Array.isArray(watch('tracks'))
        ? [...watch('tracks'), ...tracks.filter((e) => e.name === tracksData[item].track)]
        : tracks.filter((e) => e.name === tracksData[item].track)
      setValue('tracks', newTracksValue)
    }
  }

  const generateBody = (data: Record<string, any>) => {
    const wholeArray = data.tracks.map((track: any) => ({
      ...track,
      frameworks: Array.isArray(data[track.name])
        ? data[track.name].map((framework: any) => {
            const { rate, ...rest } = framework
            return {
              ...rest,
              level: rate ? rate / 25 : 0,
            }
          })
        : [],
    }))
    const array: any[] = []
    wholeArray.map((track: any) => {
      track.frameworks.forEach((frameWork: any) => {
        array.push({ level: frameWork.level, trackId: track.id, frameWorkId: frameWork.id })
      })
    })
    return array
  }

  const onSubmit = async (data: any) => {
    const generatedBody = generateBody(data)
    await putHandler({ endpoint: 'profile/tracks', body: { tracks: generatedBody } })
  }

  useEffect(() => {
    if (!watch('tracks').length) handleSetTracksInForm()
  }, [tracksData, tracks.length])
  return (
    <Card id={'tracks'} sx={{ padding: '32px', display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Typography sx={{ fontWeight: 500 }} variant={'subtitle2'}>
        {tEditProfile('tracks')}
      </Typography>
      <Grid item xs={12} lg={12}>
        <MultieSelectComponent
          inputLabel={'name'}
          control={control}
          inputValue={'id'}
          options={tracks}
          name={'tracks'}
        />
        {watch('tracks').map((track: ITrack) => (
          <TrackComponent setValue={setValue} key={track.name} track={track} control={control} />
        ))}
      </Grid>
      <Button
        variant={'contained'}
        sx={{ height: '26px', maxWidth: '100px', alignSelf: 'end' }}
        onClick={handleSubmit(onSubmit)}
      >
        {tEditProfile('submit')}
      </Button>
    </Card>
  )
}
