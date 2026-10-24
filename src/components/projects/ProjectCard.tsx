import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { ImageReveal } from '../motion/ImageReveal'
export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) { return <article className={`project-card ${featured ? 'project-card--featured' : ''}`}><Link to={`/projetos/${project.slug}`}><ImageReveal src={project.image} alt={`Imagem ilustrativa: ${project.title}`}/><div className="project-card__meta"><span>{project.category}</span><span>{project.location}</span></div><div className="project-card__title"><h3>{project.title}</h3><ArrowUpRight/></div></Link></article> }
