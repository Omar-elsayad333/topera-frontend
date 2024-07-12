import { parse, format } from 'date-fns'

export const parseDate = ({ date, formatStr }: { date: any; formatStr: string }) => {
  return parse(date, formatStr, new Date())
}

export const formatDate = ({ date, formatStr }: { date: string; formatStr: string }) => {
  return format(date, formatStr)
}
