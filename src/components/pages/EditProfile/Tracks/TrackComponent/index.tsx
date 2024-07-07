// Mui
import Box from '@mui/material/Box'
import { ITrack } from '@/components/pages/EditProfile/types'
import MultieSelectComponent from '@/components/FormInputs/MultieSelectComponent'
import { useWatch } from 'react-hook-form'
import TrackSlider from '@/components/pages/EditProfile/Tracks/slider'
import { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

export default function TrackComponent({ track, control, setValue }: { track: ITrack; control: any; setValue: any }) {
  const [frameWorks, setFrameWorks] = useState<any[]>([])
  const frameWorksWatch = useWatch({ control, name: track.name! })

  const onChange = (name: string, value: number) => {
    frameWorks.map((e) => {
      if (e.name === name) {
        return (e['rate'] = value)
      }
    })
    setValue(track.name, frameWorks)
  }

  const onDelete = (name: string) => {
    const filteredArray = frameWorks.filter((e) => e.name !== name)
    setFrameWorks(filteredArray)
    setValue(track.name, filteredArray)
  }
  useEffect(() => {
    if (Array.isArray(frameWorksWatch)) {
      if (frameWorksWatch.length > frameWorks.length) {
        for (const ele of frameWorksWatch) {
          if (!frameWorks.some((e) => e.name === ele.name)) {
            setFrameWorks([...frameWorks, ele])
          }
        }
      } else setFrameWorks(frameWorks.filter((e) => frameWorksWatch.some((ele) => ele.name === e.name)))
    }
  }, [frameWorksWatch])

  return (
    <Grid item container xs={12} lg={6} sx={{ paddingInline: '8px', margin: '16px 0' }}>
      <Typography variant={'h5'} sx={{ color: (theme) => theme.palette.primary.main }}>
        {track.name}
      </Typography>
      <MultieSelectComponent
        options={track.frameworks ?? []}
        name={track.name!}
        inputLabel={'name'}
        inputValue={'id'}
        control={control}
      />
      {frameWorks?.map((frameWork: { name: string; rate: number }) => (
        <>
          <TrackSlider
            value={frameWork.rate ?? 0}
            label={frameWork.name}
            name={frameWork.name}
            onDelete={onDelete}
            handelChange={onChange}
          />
        </>
      ))}
    </Grid>
  )
}
