import { TypeAnimation } from 'react-type-animation'

const TypeAnimationComponet = ({ text }: { text: string }) => {
  return <TypeAnimation sequence={[text, 1000]} wrapper="span" speed={50} />
}

export default TypeAnimationComponet
