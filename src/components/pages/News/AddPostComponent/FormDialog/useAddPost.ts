import useRequestHandlers from '@/hooks/useRequestHandlers'
import { ICreatePost, ITag } from '@/types/pages/news'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { array, number, object, string } from 'yup'

const validationSchema = object({
  body: string().required(),
  title: string().required(),
  EndDate: string().required(),
  NewsCategoryId: object().required(),
  TagIds: array().min(1).required(),
  Color: number(),
  Images: array().required(),
})

const useAddPost = (organizationId: string) => {
  const [open, setOpen] = useState(false)
  const [tagsData, setTagsData] = useState<ITag[]>([])
  const [categoriesData, setCategoriesData] = useState([])
  const { getHandler, loading } = useRequestHandlers()

  const defaultValues: Partial<ICreatePost> = {
    body: '',
    title: '',
    Color: 0,
    TagIds: [],
    EndDate: '',
    Images: [],
    NewsCategoryId: '',
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
  })

  useEffect(() => {
    getTagsData()
    getCategoriesData()
  }, [])

  const getTagsData = async () => {
    const { data, error } = await getHandler({ endpoint: 'news/tags' })
    if (error) return
    setTagsData(data)
  }

  const getCategoriesData = async () => {
    const { data, error } = await getHandler({ endpoint: `news/organizations/categories/${organizationId}` })
    if (error) return
    setCategoriesData(data)
  }

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
    loading,
    control,
    tagsData,
    categoriesData,
    errors,
    handleSubmit,
    onSubmit,
    handleOpen,
    handleClose,
  }
}

export default useAddPost
