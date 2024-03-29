import React from 'react'
import { IFormComponentProps } from '@/types/pages/signup'
import { useTranslations } from 'next-intl'

// Components
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import PasswordInputComponent from '@/components/FormInputs/PasswordInputComponent'
import OuterLoadingComponent from '@/components/shared/OuterLoadingComponent'

// MUI
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

const FormComponent = ({
  formData,
  formControl,
  formErrors,
  loading,
  switchToForm,
  submitForm,
}: IFormComponentProps) => {
  const t = useTranslations('signUp')
  return (
    <form style={{ marginBottom: '100px' }} onSubmit={(e) => submitForm(e)}>
      <Grid columnSpacing={'24px'} rowGap={'40px'} container>
        {formData.map((formInput) => {
          if (formInput.type === 'text') {
            return (
              <Grid key={formInput.id} item xs={formInput.xs}>
                <TextFieldComponent
                  control={formControl}
                  name={formInput.name}
                  error={formErrors[formInput.name]}
                  label={t(formInput.name)}
                />
              </Grid>
            )
          } else {
            return (
              <Grid key={formInput.id} item xs={formInput.xs}>
                <PasswordInputComponent
                  control={formControl}
                  name={formInput.name}
                  error={formErrors[formInput.name]}
                  label={t(formInput.name)}
                />
              </Grid>
            )
          }
        })}
      </Grid>
      <Stack sx={{ marginTop: '24px' }} direction={'row-reverse'} justifyContent={'end'} useFlexGap spacing={'16px'}>
        <Button
          disabled={loading}
          variant={'contained'}
          type={'submit'}
          sx={{ color: 'white', borderRadius: '20px', fontSize: '13px', fontWeight: '500' }}
          size={'small'}
        >
          {!loading ? t('submit') : <OuterLoadingComponent size={25} />}
        </Button>
        <Button
          disabled={loading}
          variant={'outlined'}
          type={'button'}
          sx={{
            color: 'black',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: '500',
            border: (theme) => `1px solid ${theme.palette.grey[400]}`,
          }}
          size={'small'}
          onClick={() => switchToForm(false)}
        >
          {t('back')}
        </Button>
      </Stack>
    </form>
  )
}

export default FormComponent
