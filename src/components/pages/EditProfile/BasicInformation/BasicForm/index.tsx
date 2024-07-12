// Mui
import Grid from '@mui/material/Grid'

import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import useRequestHandlers from '@/hooks/useRequestHandlers'

// Components
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import SelectComponent from '@/components/FormInputs/SelectComponent'
// Types
import { IBasicFormProps } from '@/components/pages/EditProfile/BasicInformation/BasicForm/types'

export default function BasicForm({ control, errors }: IBasicFormProps) {
  const [countries, setCountries] = useState<{ name: string; disabled?: boolean; default?: boolean }[]>([])
  const [cities, setCities] = useState<{ name: string; disabled?: boolean; default?: boolean }[]>([])
  const { getHandler } = useRequestHandlers()

  const tEditProfile = useTranslations('edit_profile')

  const getOptions = async () => {
    const countriesData = await getHandler({ endpoint: 'countries' })
    const citiesData = await getHandler({ endpoint: 'cities' })
    setCountries(countriesData.data)
    setCities(citiesData.data)
  }

  useEffect(() => {
    getOptions()
  }, [])
  return (
    <Grid container paddingInline={'32px'} spacing={'40px'} id={'basic_information'}>
      <Grid item xs={6}>
        <TextFieldComponent
          label={tEditProfile('first_name')}
          control={control}
          name={'firstName'}
          error={errors['firstName']}
        />
      </Grid>
      <Grid item xs={6}>
        <TextFieldComponent
          label={tEditProfile('last_name')}
          control={control}
          name={'lastName'}
          error={errors['lastName']}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldComponent
          label={tEditProfile('occupation')}
          control={control}
          name={'occupation'}
          error={errors['occupation']}
        />
      </Grid>
      <Grid item xs={12}>
        <TextFieldComponent
          label={tEditProfile('company')}
          control={control}
          name={'company'}
          error={errors['company']}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <SelectComponent
          inputLabel={'name'}
          inputValue={'name'}
          options={countries}
          label={tEditProfile('country')}
          control={control}
          name={'country'}
          errors={errors['country']}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <SelectComponent
          inputLabel={'name'}
          inputValue={'name'}
          options={cities}
          label={tEditProfile('city')}
          control={control}
          name={'city'}
          errors={errors['city']}
        />
      </Grid>
    </Grid>
  )
}
