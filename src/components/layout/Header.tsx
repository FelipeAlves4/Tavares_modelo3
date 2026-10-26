import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Brand } from './Brand'

const links = [['Projetos', '/projetos'], ['Serviços', '/servicos'], ['Como construímos', '/como-construimos'], ['Sobre', '/sobre']]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHeroRoute = pathname === '/' || /^\/projetos\/[^/]+$/.test(pathname)
  const overHero = isHeroRoute && !scrolled && !open

  useEffect(() => { setOpen(false) }, [pathname])
  useEffect(() => {
    const updateScrolled = () => setScrolled(current => {
      const next = window.scrollY > 40
      return current === next ? current : next
    })
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  const tone = overHero ? 'header--hero' : isHeroRoute ? 'header--scrolled' : 'header--light'
  return <header className={`header header--fixed ${tone} ${open ? 'header--menu-open' : ''}`}><div className="shell header__in"><Brand compact variant={tone === 'header--light' ? 'light' : 'dark'} />
    <nav id="mobile-menu" className={open ? 'nav nav--open' : 'nav'} aria-label="Navegação principal"><p className="nav__eyebrow">00 / NAVEGAÇÃO</p>{links.map(([label, to]) => <NavLink className="nav__link" key={to} to={to}>{label}</NavLink>)}<div className="nav__footer"><p>Birigui, SP</p><Link className="nav__contact" to="/contato">Iniciar conversa <ArrowUpRight size={15}/></Link></div></nav>
    <button className="menu-button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(value => !value)}>{open ? <X/> : <Menu/>}</button>
  </div></header>
}
