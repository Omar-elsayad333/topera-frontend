'use client'
import { Controller } from 'react-hook-form'
import FormControl from '@mui/material/FormControl'
import { Autocomplete, TextField, MenuItem } from '@mui/material'
import Chip from '@mui/material/Chip'
import FormHelperText from '@mui/material/FormHelperText'
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
            getOptionLabel={(option: any) => option[inputLabel] as string}
            onChange={(_, newValue) => {
              const uniArray = newValue.filter(
                (item, index, self) => index === self.findIndex((t) => t[inputValue] === item[inputValue])
              )
              field.onChange(uniArray)
            }}
            value={field.value}
            renderInput={(params) => <TextField variant={'standard'} error={!!errors} {...params} label={label} />}
            renderTags={(value: readonly T[], getTagProps) =>
              value.map((option: T, index: number) => (
                <Chip
                  sx={chipSx}
                  variant="outlined"
                  label={option[inputLabel] as string}
                  {...getTagProps({ index })}
                  key={index}
                />
              ))
            }
            renderOption={(props, option) => (
              <MenuItem
                selected={field.value.map((e: T) => e[inputValue]).includes(option[inputValue])}
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
