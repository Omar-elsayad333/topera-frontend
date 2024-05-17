'use client'

// Types
import { ILevel } from '@/types/pages/framework'

// MUI
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'

interface IProps {
  levels: ILevel[]
  selectedLevel: ILevel
  handleSelecteLevel: (e: ILevel) => void
}

const LevelSelect = ({ selectedLevel, handleSelecteLevel, levels }: IProps) => {
  return (
    <FormControl fullWidth sx={{ maxWidth: 346 }}>
      <Select
        value={selectedLevel}
        onChange={(e) => handleSelecteLevel(e.target.value as ILevel)}
        sx={{ borderRadius: '10px' }}
        startAdornment={
          <InputAdornment position="start">
            <SelectIcon />
          </InputAdornment>
        }
      >
        {levels.length > 0 &&
          levels.map((item: any) => (
            <MenuItem key={item.id} value={item}>
              {item.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}

export default LevelSelect

const SelectIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#4E4EBC"
        d="M16.5 0.5L0 9.5L6 12.77V21.77L16.5 27.5L27 21.77V12.77L30 11.135V21.5H33V9.5L16.5 0.5ZM26.73 9.5L16.5 15.08L6.27 9.5L16.5 3.92L26.73 9.5ZM24 20L16.5 24.08L9 20V14.405L16.5 18.5L24 14.405V20Z"
      />
    </svg>
  )
}
