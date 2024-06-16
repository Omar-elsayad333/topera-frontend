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
  socials: Social[]
  experiences: Experience[]
  educations: Education[]
  skills: Skill[]
  tracks: Track[]
}

export interface Social {
  id: string
  socialPlatform: number
  userName?: string
  email?: string
}

export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  description: string
  icon: any
}

export interface Education {
  id: string
  school: string
  degree: string
  major: string
  graduationDate: string
  description: string
  icon: any
}

export interface Skill {
  id: string
  skill: string
  rate: number
}

export interface Track {
  id: string
  trackId: string
  track: string
  frameworkId: string
  framework: string
  level: number
}

export type TSocials = 'email' | 'linkedin' | 'github' | 'discord'
