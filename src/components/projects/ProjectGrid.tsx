import type { Project } from '../../data/projects'
import { ProjectCard } from './ProjectCard'
export function ProjectGrid({ items }: { items: Project[] }) { return <div className="project-grid">{items.map((project, i) => <ProjectCard key={project.slug} project={project} featured={i === 0}/>)}</div> }
