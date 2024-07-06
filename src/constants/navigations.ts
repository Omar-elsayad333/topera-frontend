// Types
import { INavigations } from './types'

// Routes
import { Routes } from '@/routes/routes'

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
    name: 'Chat',
    text: 'chat',
    value: Routes.chat,
    meta: {},
  },
]
