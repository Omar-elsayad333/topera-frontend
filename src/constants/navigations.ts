import { Routes } from '@/routes/routes'

interface IMeta {}

interface INavigations {
  name: string
  text: string
  value: string
  meta?: IMeta
}

/*
 * This is header navigation data
 */
export const navigations: readonly INavigations[] = [
  {
    name: 'Home',
    text: 'home',
    value: Routes.home,
    meta: {},
  },
  {
    name: 'Roadmaps',
    text: 'roadmaps',
    value: Routes.roadmaps,
    meta: {},
  },
  {
    name: 'Matching',
    text: 'matching',
    value: Routes.matching,
    meta: {},
  },
  {
    name: 'News',
    text: 'news',
    value: Routes.news,
    meta: {},
  },
  {
    name: 'Contact us',
    text: 'contact_us',
    value: Routes.contactUs,
    meta: {},
  },
]
