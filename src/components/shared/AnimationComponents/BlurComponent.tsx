import { PropsWithChildren } from 'react'

// Framer motion
import { motion } from 'framer-motion'

const BlurComponent = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(1rem)' }}
      animate={{ opacity: 1, filter: 'blur(0)' }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default BlurComponent
