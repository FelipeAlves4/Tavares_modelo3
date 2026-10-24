import { motion } from 'motion/react'
import type { ReactNode } from 'react'
export function PageIntro({ number, title, text }: { number: string; title: ReactNode; text: string }) { return <section className="page-intro shell"><motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="section-no">{number}</motion.p><motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>{title}</motion.h1><motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15, duration: .6 }}>{text}</motion.p></section> }
