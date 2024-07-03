import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'

// Hooks
import { useTranslations } from 'next-intl'
import { ChangeEvent, useEffect, useState } from 'react'

// Icons
import UploadIcon from '@mui/icons-material/Upload'

// Types
import { UseFormSetValue } from 'react-hook-form'
import { IBasicForm } from '@/components/pages/EditProfile/BasicInformation/BasicForm/types'
import { encodeToBase64 } from 'next/dist/build/webpack/loaders/utils'

export default function ImageComponent({ url, setValue }: { url?: string; setValue: UseFormSetValue<IBasicForm> }) {
  const [currentUrl, set] = useState<string>('')

  const tEditProfile = useTranslations('edit_profile')

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = reject
    })
  const handelChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.length && e.target.files[0]

    if (file) {
      const url = URL.createObjectURL(file)
      set(url)
      setValue('image', { extension: file?.type.split('/')[1], data: await toBase64(file) })
      console.log(file)
    }
  }

  useEffect(() => {
    if (url) set(url)
  }, [url])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column' },
        alignItems: 'center',
        justifyContent: 'start',
        width: '100%',
        color: '#1473E6',
      }}
    >
      <Avatar src={currentUrl} sx={{ height: '100px', width: '100px' }} />
      <Button component="label" role={undefined} variant="text" tabIndex={-1}>
        <input
          name={'image'}
          onChange={handelChange}
          accept={'image/jpeg,image/jpg'}
          type="file"
          style={{
            clip: 'rect(0 0 0 0)',
            clipPath: 'inset(50%)',
            height: 1,
            overflow: 'hidden',
            position: 'absolute',
            bottom: 0,
            left: 0,
            whiteSpace: 'nowrap',
            width: 1,
          }}
        />
        <UploadIcon />
        {tEditProfile('upload_file')}
      </Button>
    </Box>
  )
}
