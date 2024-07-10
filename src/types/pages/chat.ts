import { ESender } from '../enums'

export interface IConversation {
  id: string
  name: string
  createdAt: string
}

export interface IConversationData {
  groupName: string
  conversations: IConversation[]
}

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
  base64Audio: string | null
}

export interface INewConversationMessage {
  id: string
  message: IMessage
  base64Audio: string
}
