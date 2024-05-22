export type TExperience = { company: string; icon: string; location: string; jobStatus: string; title: string }

export type TEducation = { icon: string; school: string; degree: string }

export type TSkill = { skill: string; rate: number }

export type TTrack = { track: string; level: number }

export interface IProfile {
  educations: TEducation[]
  experiences: TExperience[]
  skills: TSkill[]
  tracks: TTrack[]
  bio: string
}
