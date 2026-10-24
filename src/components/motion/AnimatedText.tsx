import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
export function AnimatedText({ children, className = '' }: { children: ReactNode; className?: string }) { const reduce = useReducedMotion(); return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .7, ease: [.22, 1, .36, 1] }}>{children}</motion.div> }
