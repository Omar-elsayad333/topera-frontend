'use client'
import React, { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import { Autocomplete, MenuItem, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

interface ISelectComponentProps<T extends object> {
  label: string
  id: string
  options: T[]
  inputLabel: keyof T
  inputValue: keyof T
  name: string
  control: any
  errors: unknown
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
    <FormControl sx={{ width: '900px' }} error={!!errors}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Autocomplete
            {...field}
            isOptionEqualToValue={(option, value) => option[inputValue] === value[inputValue]}
            id={id}
            options={options}
            value={field.value}
            getOptionLabel={(option: T) => (option[inputLabel] ? String(option[inputLabel]) : '')}
            onChange={(event, newValue) => field.onChange(newValue)}
            renderInput={(params) => <TextField {...params} label={label} />}
            renderOption={(props, option: T) => (
              <MenuItem sx={menuItemSx} component={'li'} {...props} key={option[inputValue] as React.Key}>
                {option[inputLabel] as string}
              </MenuItem>
            )}
          />
        )}
      />
    </FormControl>
  )
}

export default SelectComponent
