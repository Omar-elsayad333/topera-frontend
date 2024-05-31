import { ICreatePost } from '@/types/pages/news'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { array, number, object, string } from 'yup'

const validationSchema = object({
  body: string().required(),
  title: string().required(),
  EndDate: string().required(),
  NewsCategoryId: string().required(),
  Color: number(),
  Images: array().required(),
})

const useAddPost = () => {
  const [open, setOpen] = useState(false)

  const defaultValues: Partial<ICreatePost> = {
    body: '',
    title: '',
    NewsCategoryId: '',
    Color: 0,
    EndDate: '',
    Images: [],
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
  })

  console.log(errors)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log(e)
  }

  return {
    open,
    control,
    errors,
    handleSubmit,
    onSubmit,
    handleOpen,
    handleClose,
  }
}

export default useAddPost
