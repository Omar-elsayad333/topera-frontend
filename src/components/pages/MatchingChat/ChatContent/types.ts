export interface ITrack {
  id: string
  name: string
}

export interface IRecomondations {
  id: string
  name: string
  recommendedUsers: IRecomondationUsers[]
}

export interface IRecomondationUsers {
  id: string
  name: string
  imageUrl: string
  matchedUserId: string
  recommendationStatus: IUserSkills[]
}

export interface IUserSkills {
  id: string
  name: string
}
