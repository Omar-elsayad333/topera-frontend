export interface ICareers {
  id: string
  name: string
  imageUrl: string
  description: string
}

export interface IArticle {
  id: string
  name: string
}

export interface IFramework {
  id: string
  name: string
  description: string
  imageUrl: string
  article: IArticle
}

export interface ITrack {
  id: string
  name: string
  description: string
  article: IArticle
  frameworks: IFramework[]
}

export interface ICareer {
  id: string
  name: string
  description: string
  article: IArticle
  tracks: ITrack[]
}

export interface ISections {
  id: string
  head: string
  body: string
}

export interface IArticleDetails {
  id: string
  name: string
  sections: ISections[]
}
