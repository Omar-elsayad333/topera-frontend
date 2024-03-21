// Services Types

export type IParams = {
  [key: string]: string
}

export interface IServerActionProps {
  endpoint: string
  method: string
  params?: IParams
  body?: any
}

export enum ERequestMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}
