'use client'
// Types
import type { SxProps } from '@mui/material'
import type { ITag } from '@/types/pages/news'

// MUI
import Button from '@mui/material/Button'

const CategoriesHeaderComponent = ({ tagData }: { tagData: ITag }) => {
  const selectTag = (tagId: string) => {
    console.log(tagId)
  }

  const buttonStyle: SxProps = {
    p: '16px',
    fontWeight: 600,
    color: 'text.secondary',
  }

  return (
    <Button sx={buttonStyle} onClick={() => selectTag(tagData.id)}>
      {tagData.name}
    </Button>
  )
}

export default CategoriesHeaderComponent
