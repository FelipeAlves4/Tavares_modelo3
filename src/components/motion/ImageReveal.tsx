import { motion, useReducedMotion } from 'motion/react'
type ImageRevealProps = { src: string; alt: string; className?: string; loading?: 'eager' | 'lazy' }
export function ImageReveal({ className = '', alt, ...props }: ImageRevealProps) {
  const reduce = useReducedMotion()
  return <motion.div className={`image-reveal ${className}`} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: .7, ease: [.22, 1, .36, 1] }}>
    <motion.img {...props} alt={alt} initial={reduce ? false : { scale: 1.12 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: [.22, 1, .36, 1] }}/>
  </motion.div>
}
