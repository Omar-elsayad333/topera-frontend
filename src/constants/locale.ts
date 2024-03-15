export interface ILocales {
  text: string
  value: string
}

/*
 * Index 0 will be the default locale of the site
 */
export const localesObject: ILocales[] = [
  { text: 'arabic', value: 'ar' },
  { text: 'english', value: 'en' },
]

export const localesArray: string[] = ['ar', 'en']
