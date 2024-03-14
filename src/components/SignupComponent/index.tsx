'use client'
import Link from 'next/link'

// Routes
import routes from '@/routes/routes'

// Contexts
import { useDictionary } from '@/contexts/DictionaryContext'

// Containers
import useSignup from '@/containers/useSignup'

// Components
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import PasswordInputComponent from '@/components/FormInputs/PasswordInputComponent'

// MUI
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const SignupComponent: React.FC = () => {
  const { dict } = useDictionary()
  const { states, actions } = useSignup()

  return (
    <form onSubmit={actions.handleSubmit(actions.onSubmit)}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid container item xs={12} justifyContent="center" alignItems="center">
          <h1>{dict?.auth.signupPageTitle}</h1>
        </Grid>
        <Grid item xs={12}>
          <TextFieldComponent
            name="email"
            control={states.control}
            error={states.errors['email']}
            placeholder={dict?.auth.email_input_placeholder}
          />
        </Grid>
        <Grid item xs={12}>
          <PasswordInputComponent
            name="password"
            control={states.control}
            error={states.errors['password']}
            placeholder={dict?.auth.password_input_placeholder}
          />
        </Grid>
        <Grid item xs={12}>
          <PasswordInputComponent
            name="confirmPassword"
            control={states.control}
            error={states.errors['confirmPassword']}
            placeholder={dict?.auth.confirm_password_input_placeholder}
          />
        </Grid>
        <Grid container item xs={12} justifyContent="center" alignItems="center">
          <Button variant="contained" sx={{ width: '300px', maxWidth: '100%' }} type="submit">
            {dict?.auth.signup}
          </Button>
        </Grid>
        <Grid container item xs={12} justifyContent="center" alignItems="center">
          <Link href={routes.login}>
            <Button variant="contained" sx={{ width: '300px', maxWidth: '100%' }} type="button">
              {dict?.auth.login}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </form>
  )
}

export default SignupComponent
