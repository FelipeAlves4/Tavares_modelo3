import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Brand } from './Brand'

const links = [['Projetos', '/projetos'], ['Serviços', '/servicos'], ['Como construímos', '/como-construimos'], ['Sobre', '/sobre']]
export function Header() {
  const [open, setOpen] = useState(false); const { pathname } = useLocation()
  const hasDarkBackground = pathname === '/' || pathname.startsWith('/projetos/')
  useEffect(() => { setOpen(false) }, [pathname])
  return <header className={`header ${hasDarkBackground ? '' : 'header--light'}`}><div className="shell header__in"><Brand variant={hasDarkBackground ? 'dark' : 'light'} />
    <nav className={open ? 'nav nav--open' : 'nav'} aria-label="Navegação principal">{links.map(([label, to]) => <NavLink key={to} to={to}>{label}</NavLink>)}<Link className="nav__contact" to="/contato">Iniciar conversa <ArrowUpRight size={15}/></Link></nav>
    <button className="menu-button" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X/> : <Menu/>}</button>
  </div></header>
}
