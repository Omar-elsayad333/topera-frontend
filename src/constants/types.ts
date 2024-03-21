export interface IMeta {}

export interface INavigations {
  name: string
  text: string
  value: string
  meta?: IMeta
}

export interface ILocales {
  text: string
  value: string
}

export interface CountryType {
  code: string
  label: string
  phone: string
  suggested?: boolean
}
