import { EUserTrackLevel } from '@/types/enums'
import { IFrameWork } from '@/types/pages/finishSignup'

export type TExperience = { company: string; icon: string; location: string; jobStatus: string; title: string }

export type TEducation = { icon: string; school: string; degree: string }

export type TSkill = { skill: string; rate: number }

export interface IFrameWorkWithLevel extends IFrameWork {
  level: number
}
export type TTrack = { track: string; level: EUserTrackLevel; frameworks: IFrameWorkWithLevel[] }

export type TIntro = {
  occupation: string | null
  company: string | null
  education: string | null
  country: string | null
  city: string | null
  email: string | null
  linkedIn: string | null
  gitHub: string | null
  discord: string | null
}
export interface IProfile {
  educations: TEducation[]
  experiences: TExperience[]
  skills: TSkill[]
  tracks: TTrack[]
  bio: string
  intro: TIntro
  resume: string | null
  coverUrl: string | null
  imageUrl: string | null
  fullName: string | null
  employmentStatus: string | null
  isActive: boolean
}
