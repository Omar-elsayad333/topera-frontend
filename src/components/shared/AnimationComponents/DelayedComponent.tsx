import { useState, useEffect, PropsWithChildren } from 'react'

// Framer motion
import { motion } from 'framer-motion'

interface IProps {
  delay: number
}

const DelayedComponent = ({ delay, children }: PropsWithChildren<IProps>) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true)
    }, delay) // Adjust the delay time as needed

    return () => clearTimeout(timeoutId)
  }, []) // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div>
      {isVisible && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {children}
        </motion.div>
      )}
    </div>
  )
}

export default DelayedComponent
