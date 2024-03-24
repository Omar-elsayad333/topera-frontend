import { TypeAnimation } from 'react-type-animation'

const TypeAnimationComponet = ({ text }: { text: string }) => {
  return <TypeAnimation sequence={[text, 5000]} wrapper="p" />
}

export default TypeAnimationComponet
