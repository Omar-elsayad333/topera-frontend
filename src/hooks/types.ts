import { IParams } from '@/services/types'

export type IProps = {
  endpoint: string
  body?: any
  params?: IParams
  noLoading?: boolean
}
