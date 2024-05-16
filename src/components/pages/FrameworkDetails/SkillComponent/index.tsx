// Types
import { ISkill } from '@/types/pages/framework'

const SkillComponent = ({ skill }: { skill: ISkill }) => {
  return <div>{skill?.topics?.length > 0 && skill.topics.map((item) => <p key={item.id}>{item.name}</p>)}</div>
}

export default SkillComponent
