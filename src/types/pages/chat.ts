import { ESender } from '../enums'

export interface IMessage {
  id: string
  content: string
  sender: ESender
  createdAt: string
}

export interface IConversationMessages {
  id: string
  name: string
  createdAt: string
  userName: string
  imageUrl: string
  messages: IMessage[]
}
