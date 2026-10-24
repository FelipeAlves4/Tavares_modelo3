import type { Project } from '../../data/projects'
import { motion, useReducedMotion } from 'motion/react'
import { ProjectCard } from './ProjectCard'
export function ProjectGrid({ items }: { items: Project[] }) {
  const reduceMotion = useReducedMotion()
  return <div className="project-grid">{items.map((project, i) => <motion.div className={`project-grid__item ${i === 0 ? 'project-grid__item--featured' : ''}`} key={project.slug} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={reduceMotion ? { duration: 0 } : { duration: .58, delay: Math.min(i * .09, .27), ease: [.22, 1, .36, 1] }}><ProjectCard project={project} featured={i === 0}/></motion.div>)}</div>
}
