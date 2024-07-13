'use client'
import { Controller, FieldErrors } from 'react-hook-form'
import FormControl from '@mui/material/FormControl'
import { Autocomplete, TextField, MenuItem } from '@mui/material'
import Chip from '@mui/material/Chip'
import FormHelperText from '@mui/material/FormHelperText'

import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
interface IMultiSelectComponentProps<T extends object> {
  id?: string
  label?: string
  options: T[]
  name: string
  chipSx?: object
  inputLabel: keyof T
  inputValue: keyof T
  menuItemSx?: object
  control: any
  minSelect?: number
  maxSelect?: number
  errors?: any
}

const MultiSelectComponent = <T extends object>({
  id,
  label,
  options,
  chipSx,
  inputLabel,
  inputValue,
  menuItemSx,
  name,
  errors,
  minSelect = 0,
  maxSelect = options?.length,
  control,
}: IMultiSelectComponentProps<T>) => {
  return (
    <FormControl fullWidth error={!!errors}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Autocomplete
            multiple
            freeSolo
            id={name}
            options={options}
            disableClearable={!!minSelect}
            getOptionLabel={(option: any) => option[inputLabel] as string}
            onChange={(_, newValue) => {
              const uniArray = newValue.filter(
                (item, index, self) => index === self.findIndex((t) => t[inputValue] === item[inputValue])
              )
              maxSelect >= uniArray.length
                ? field.onChange(uniArray)
                : field.onChange(uniArray.slice(uniArray.length - maxSelect))
            }}
            value={field.value}
            renderInput={(params) => (
              <TextField
                variant={'standard'}
                error={!!errors}
                {...params}
                label={label}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle menu list">
                        <KeyboardArrowDownIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            )}
            renderTags={(value: readonly T[], getTagProps) =>
              value.map((option: T, index: number) => (
                <Chip
                  sx={chipSx}
                  variant="outlined"
                  {...getTagProps({ index })}
                  key={index}
                  datatype={'multiSelect'}
                  label={option[inputLabel] as string}
                  disabled={value.length === minSelect}
                />
              ))
            }
            renderOption={(props, option) => (
              <MenuItem
                selected={field?.value?.map((e: T) => e[inputValue]).includes(option[inputValue])}
                sx={menuItemSx}
                component="li"
                {...props}
                key={option[inputValue] as React.Key}
              >
                {option[inputLabel]}
              </MenuItem>
            )}
          />
        )}
      />
      {errors?.type !== 'required' && <FormHelperText sx={{ textAlign: 'unset' }}>{errors?.message}</FormHelperText>}
    </FormControl>
  )
}

export default MultiSelectComponent
