import 'server-only'

const dictionaries: any = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  ar: () => import('@/locales/ar.json').then((module) => module.default),
}

export const getDictionary = (locale: string) => dictionaries[locale]()
