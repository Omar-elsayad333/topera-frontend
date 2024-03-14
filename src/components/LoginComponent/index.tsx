'use client'
import Link from 'next/link'

// Routes
import routes from '@/routes/routes'

// Contexts
import { useDictionary } from '@/contexts/DictionaryContext'

// Containers
import useLogin from '@/containers/useLogin'

// Components
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import PasswordInputComponent from '@/components/FormInputs/PasswordInputComponent'

// MUI
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

const LoginComponent: React.FC = () => {
  const { dict } = useDictionary()
  const { states, actions } = useLogin()

  return (
    <form onSubmit={actions.handleSubmit(actions.onSubmit)}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid container item xs={12} justifyContent="center" alignItems="center">
          <h1>{dict?.auth.loginPageTitle}</h1>
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
        <Grid container item xs={12} justifyContent="center" alignItems="center">
          <Button variant="contained" sx={{ width: '300px', maxWidth: '100%' }} type="submit">
            {dict?.auth.login}
          </Button>
        </Grid>
        <Grid container item xs={12} justifyContent="center" alignItems="center">
          <Link href={routes.signup}>
            <Button variant="contained" sx={{ width: '300px', maxWidth: '100%' }} type="button">
              {dict?.auth.signup}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </form>
  )
}

export default LoginComponent
