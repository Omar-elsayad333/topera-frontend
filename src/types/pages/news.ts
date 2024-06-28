import { ComponentProps } from 'react'

export interface IAddPostRef extends ComponentProps<'div'> {
  open: boolean
  handleOpen: () => void
  handleClose: () => void
}

export interface IImage {
  id: string
  index: number
  imageUrl: string
}

export interface ITag {
  id: string
  name: string
}

export interface IOrganization {
  id: string
  name: string
  imageUrl: string
  followers: number
  categories: string[]
}

export interface IPost {
  id: string
  title: string
  body: string
  images: IImage[]
  tags: ITag[]
  createdAt: string
  endDate: string
  organization: IOrganization
  votes: number
  voteType: any
}

export interface ICreatePost {
  NewsCategoryId: string
  Color: 0 | 1
  EndDate: string
  title: string
  body: string
  Images: {
    index: number
    image: {
      extension: string
      data: string
    }
  }[]
  TagIds: string[]
}
