'use client'

// Contexts
import { useAlert } from '@/contexts/AlertContext'

// Containers
import useLogin from '@/containers/useLogin'

// Components
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import PasswordInputComponent from '@/components/FormInputs/PasswordInputComponent'

// MUI
import Button from '@mui/material/Button'
import useErrorHandler from '@/hooks/useErrorHandler'
import AlertNotify from '@/components/shared/AlertComponent/AlertNotify'

interface IProps {
  dict: any
}

const LoginComponent: React.FC<IProps> = ({ dict }) => {
  const { data, states, actions } = useLogin()
  const { errorHandler } = useErrorHandler('omar', dict)

  return (
    <form onSubmit={actions.handleSubmit(actions.onSubmit)}>
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
      <Button variant="contained" onClick={() => errorHandler()}>
        error
      </Button>
      <AlertNotify />
    </form>
  )
}

export default LoginComponent
