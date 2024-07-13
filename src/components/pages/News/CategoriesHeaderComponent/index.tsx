'use client'
import { usePathname, useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

// Types
import type { SxProps } from '@mui/material'
import type { ITag } from '@/types/pages/news'

// MUI
import Button from '@mui/material/Button'

const CategoriesHeaderComponent = ({ tagData }: { tagData: ITag }) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const selectTag = (tagId: string) => {
    tagId === 'all' ? router.replace(`${pathname}`) : router.replace(`${pathname}?id=${tagId}`)
  }

  const buttonStyle: SxProps = {
    p: '16px',
    color: searchParams.get('id') === tagData.id ? 'text.primary' : 'text.secondary',
    fontWeight: searchParams.get('id') === tagData.id || (tagData.id === 'all' && !searchParams.get('id')) ? 700 : 500,
  }

  return (
    <Button sx={buttonStyle} onClick={() => selectTag(tagData.id)}>
      {tagData.name}
    </Button>
  )
}

export default CategoriesHeaderComponent
