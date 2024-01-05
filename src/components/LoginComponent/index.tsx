'use client'

// Containers
import useLogin from '@/containers/useLogin'

// Components
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import PasswordInputComponent from '@/components/FormInputs/PasswordInputComponent'

// MUI
import Button from '@mui/material/Button'

const LoginComponent: React.FC = () => {
  const { data, states, actions } = useLogin()

  return (
    <form onSubmit={actions.handleSubmit(actions.onSubmit)}>
      <TextFieldComponent
        name="email"
        errors={states.errors}
        control={states.control}
        placeholder="Enter your email"
      />
      <PasswordInputComponent
        name="password"
        errors={states.errors}
        control={states.control}
        placeholder="Enter your password"
      />
      <Button variant="contained" type="submit">
        submit
      </Button>
      <Button variant="contained" onClick={() => actions.reset()}>
        reset
      </Button>
      <Button variant="contained" onClick={() => actions.errorHandler('omar')}>
        error
      </Button>
    </form>
  )
}

export default LoginComponent
