import { TypeAnimation } from 'react-type-animation'

const TypeAnimationComponet = ({ text }: { text: string }) => {
  return <TypeAnimation cursor={false} sequence={[text, 5000]} wrapper="p" />
}

export default TypeAnimationComponet
