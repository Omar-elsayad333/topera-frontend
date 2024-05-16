export interface IBase {
  id: string
  name: string
}

export interface ITopic extends IBase {}

export interface ISkill extends IBase {
  topics: ITopic[]
}

export interface IStage extends IBase {
  skills: ISkill[]
}

export interface ILevel extends IBase {
  stages: IStage[]
}
