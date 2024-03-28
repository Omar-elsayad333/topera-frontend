import { Grid } from '@mui/material'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import PasswordInputComponent from '@/components/FormInputs/PasswordInputComponent'
import { useTranslations } from 'next-intl'

interface IFormInput {
  type: 'text' | 'password'
  id: number
  name: string
  xs: 6 | 12
}
interface IFormComponentProps {
  formData: IFormInput[]
  formControl: any
  formErrors: any
}
const FormComponent = ({ formData, formControl, formErrors }: IFormComponentProps) => {
  const t = useTranslations('signUp')
  return (
    <form>
      <Grid columnSpacing={'24px'} rowGap={'40px'} container>
        {formData.map((formInput) => {
          if (formInput.type === 'text') {
            return (
              <Grid item xs={formInput.xs}>
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
              <Grid item xs={formInput.xs}>
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
    </form>
  )
}

export default FormComponent
