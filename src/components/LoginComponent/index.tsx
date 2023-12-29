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
    <form
      style={{ background: '#fff', padding: '30px' }}
      onSubmit={actions.handleSubmit(actions.onSubmit)}
    >
      <TextFieldComponent
        name="email"
        control={states.control}
        errors={states.errors}
        placeholder="Enter your email"
      />
      <PasswordInputComponent
        name="password"
        control={states.control}
        errors={states.errors}
        placeholder="Enter your password"
      />
      <Button variant="contained" type="submit">
        submit
      </Button>
      <Button variant="contained" onClick={() => actions.reset()}>
        reset
      </Button>
    </form>
  )
}

export default LoginComponent
