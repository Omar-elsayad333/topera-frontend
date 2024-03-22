'use client'
import {NextPage} from 'next'

// Container
import {useTest} from './useTest'
import TextFieldComponent from '@/components/FormInputs/TextFieldComponent'
import PasswordInputComponent from '@/components/FormInputs/PasswordInputComponent'
import ButtonComponent from '@/components/ButtonComponent'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'

const Test: NextPage = () => {
    const {
        control, errors, onsubmit,
        handleSubmit
    } = useTest()
    return (
        <>
            <form onSubmit={handleSubmit(onsubmit)}>
            <TextFieldComponent control={control} name={'email'} error={errors['email']} label={'email'}/>
            <ButtonComponent type={'submit'} variant={'contained'} text={'hallo'}/>
            </form>
            <ButtonComponent  text={'Sign in with Google'} variant={'socialButton'} startIcon={<AccessAlarmIcon/>}/>
        </>
    )
}

export default Test
