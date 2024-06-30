// Mui
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

// Hooks
import { useTranslations } from 'next-intl'
import useBasicForm from '@/container/EditProfile/useBasicForm'

// Components
import ImageComponent from '@/components/pages/EditProfile/BasicInformation/ImageComponent'
import BasicForm from '@/components/pages/EditProfile/BasicInformation/BasicForm'

// Types
import { IBasicForm } from '@/components/pages/EditProfile/BasicInformation/BasicForm/types'
import { useEffect } from 'react'

export default function BasicInformation({ data }: { data: Partial<IBasicForm> }) {
  const tEditProfile = useTranslations('edit_profile')

  const { control, errors, setValue, handleSubmit, onSubmit } = useBasicForm()

  useEffect(() => {
    for (const property in data) {
      const typedProperty = property as keyof Partial<IBasicForm>
      setValue(typedProperty, data[typedProperty] ?? '')
    }
  }, [data])
  return (
    <Card sx={{ padding: '32px', display: 'flex', flexDirection: 'column', width: '100%', gap: '16px' }}>
      <Typography sx={{ fontWeight: 500 }} variant={'subtitle2'}>
        {tEditProfile('basic_information')}
      </Typography>
      <Grid container>
        <Grid container item xs={12} lg={2}>
          <ImageComponent setValue={setValue} />
        </Grid>
        <Grid container item xs={12} lg={10}>
          <BasicForm control={control} errors={errors} />
        </Grid>
      </Grid>
      <Button
        variant={'contained'}
        sx={{ height: '26px', alignSelf: 'end', width: 'fit-content' }}
        onClick={handleSubmit(onSubmit)}
      >
        {tEditProfile('submit')}
      </Button>
    </Card>
  )
}
