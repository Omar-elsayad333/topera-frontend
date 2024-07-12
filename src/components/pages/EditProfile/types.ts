export interface IProfileData {
  id: string
  firstName: string
  lastName: string
  fullName: string
  occupation: any
  employmentStatus: string
  gender: any
  bio: string
  country: any
  city: any
  imageUrl: string
  coverUrl: any
  isActive: boolean
  socials: ISocial[]
  experiences: IExperience[]
  educations: IEducation[]
  skills: ISkill[]
  tracks: ITrack[]
}

export interface ISocial {
  id: string
  socialPlatform: number
  userName?: string
  email?: string
}

export interface IExperience {
  id: string | null
  title?: string
  company: string
  location?: string
  startDate: string
  endDate?: string
  description: string
  icon?: any
  isNew?: boolean
}

export interface IEducation {
  id: string
  school: string
  degree: string
  major: string
  graduationDate: string
  description: string
  icon: any
}

export interface ISkill {
  id: string
  skill: string
  rate: number
}

export interface ITrack {
  id: string
  name?: string
  trackId: string
  track: string
  frameworkId: string
  framework: string
  frameworks?: { id: string; name: string }[]
  level: number
}

export type TSocials = 'email' | 'linkedin' | 'github' | 'discord'