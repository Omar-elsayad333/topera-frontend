'use client'
import MultiSelectComponent from '@/components/FormInputs/MultieSelectComponent'
import SelectComponent from '@/components/FormInputs/SelectComponent'
import { useSelect } from './useSelect'

const test = () => {
  const { options, onSubmit, errors, control } = useSelect()
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <MultiSelectComponent
        control={control}
        errors={errors['multi']}
        label={'taken'}
        id={'teste'}
        options={options}
        chipSx={{ color: 'red' }}
        menuItemSx={{ color: 'green' }}
        inputLabel={'name'}
        name={'multi'}
        inputValue={'id'}
      />
      <SelectComponent
        errors={errors['single']}
        control={control}
        name={'single'}
        label={'single'}
        id={'name'}
        options={options}
        inputLabel={'name'}
        inputValue={'id'}
      />
      <button type={'submit'}>submit</button>
    </form>
  )
}

export default test
