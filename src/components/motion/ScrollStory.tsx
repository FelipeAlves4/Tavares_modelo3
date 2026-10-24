import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { useRef, useState } from 'react'
import { ImageReveal } from './ImageReveal'

export type StoryStage = { n: string; title: string; text: string; image: string }

export function ScrollStory({ stages }: { stages: StoryStage[] }) {
  const root = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const [active, setActive] = useState(0)
  const { scrollYProgress } = useScroll({ target: root, offset: ['start 58%', 'end 62%'] })
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (reduceMotion) return
    const next = Math.min(stages.length - 1, Math.floor(latest * stages.length))
    setActive(current => current === next ? current : next)
  })

  return <section ref={root} className={`story section section--dark ${reduceMotion ? 'story--reduced' : ''}`} aria-label="Etapas da engenharia">
    <div className="shell">
      <div className="section-heading">
        <p className="section-no">02 / PROCESSO</p>
        <h2>Da visão<br/><em>à realidade.</em></h2>
        <p>Um processo demonstrativo em quatro movimentos, da intenção ao espaço construído.</p>
      </div>
      <div className="story__desktop" aria-live="polite">
        <div className="story__desktop-frame">
          {stages.map((stage, index) => <motion.img key={stage.n} className="story__desktop-image" src={stage.image} alt="" aria-hidden={index !== active} loading="lazy" initial={false} animate={{ opacity: index === active ? 1 : 0, scale: index === active ? 1 : 1.045 }} transition={reduceMotion ? { duration: 0 } : { duration: .55, ease: [.22, 1, .36, 1] }}/>) }
          <span className="story__crosshair story__crosshair--one" aria-hidden="true"/><span className="story__crosshair story__crosshair--two" aria-hidden="true"/>
        </div>
        <div className="story__desktop-copy">
          <span className="story__active-number">{stages[active].n}</span>
          <motion.h3 key={stages[active].title} initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }}>{stages[active].title}</motion.h3>
          <motion.p key={stages[active].text} initial={reduceMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35, delay: reduceMotion ? 0 : .06 }}>{stages[active].text}</motion.p>
          <div className="story__steps" role="list">{stages.map((stage, index) => <div className={index === active ? 'is-active' : ''} role="listitem" key={stage.n}><span>{stage.n}</span><strong>{stage.title}</strong></div>)}</div>
        </div>
      </div>
      <div className="story__progress-wrap" aria-hidden="true"><motion.div className="story__progress" style={reduceMotion ? { scaleX: 1 } : { scaleX: progress }}/></div>
      <div className="story__mobile">{stages.map(stage => <article className="story__stage" key={stage.n}><ImageReveal src={stage.image} alt={`Imagem ilustrativa da etapa ${stage.title}`}/><div><span>{stage.n}</span><h3>{stage.title}</h3><p>{stage.text}</p></div></article>)}</div>
    </div>
  </section>
}
