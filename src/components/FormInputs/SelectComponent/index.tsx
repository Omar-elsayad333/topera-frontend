'use client'
import React from 'react'
import FormControl from '@mui/material/FormControl'
import { Autocomplete, MenuItem, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import FormHelperText from '@mui/material/FormHelperText'

interface ISelectComponentProps<T extends object> {
  label: string
  id: string
  options: T[]
  inputLabel: keyof T
  inputValue: keyof T
  name: string
  control: any
  errors?: any
  menuItemSx?: object
}

const SelectComponent = <T extends object>({
  label,
  id,
  options,
  inputLabel,
  inputValue,
  name,
  control,
  errors,
  menuItemSx,
}: ISelectComponentProps<T>) => {
  return (
    <FormControl fullWidth error={!!errors}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Autocomplete
            isOptionEqualToValue={(option, value) => option[inputValue] === value[inputValue]}
            id={id}
            options={options}
            value={field.value}
            getOptionLabel={(option: T) => (option[inputLabel] ? String(option[inputLabel]) : '')}
            onChange={(event, newValue) => field.onChange(newValue)}
            renderInput={(params) => <TextField error={!!errors} {...params} label={label} />}
            renderOption={(props, option: T) => (
              <MenuItem sx={menuItemSx} component={'li'} {...props} key={option[inputValue] as React.Key}>
                {option[inputLabel] as string}
              </MenuItem>
            )}
          />
        )}
      />
      {errors?.type !== 'required' && <FormHelperText sx={{ textAlign: 'unset' }}>{errors?.message}</FormHelperText>}
    </FormControl>
  )
}

export default SelectComponent
