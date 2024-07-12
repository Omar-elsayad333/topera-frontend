'use server'

import { revalidateTag } from 'next/cache'

export default async function revalidate(tagName: string) {
  revalidateTag(tagName)
}
