// Helpers

// #TODO fix the logic issue in this fn
export const imagesFilter = (data: any[], imageName: string, placholderName?: string, defaultImage?: any) => {
  if (data && Array.isArray(data)) {
    for (let image of data) {
      if (image.name === imageName) {
        return image.path
      }
    }
  } else {
    return defaultImage ? defaultImage : uiAvatar(placholderName || '')
  }
}

export const slugify = (text: string) => {
  if (text)
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '')
}

export const uiAvatar = (name: string) => {
  return `https://ui-avatars.com/api/?name=${slugify(name)}&background=random`
}

export const convertHashSign = (data: string) => {
  return data.replace('#', '%23')
}
