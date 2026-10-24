import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import HowWeBuild from './pages/HowWeBuild'
import NotFound from './pages/NotFound'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'
import Services from './pages/Services'
const titles: Record<string,string> = { '/': 'TAVARES Construção | Engineering Prestige', '/projetos': 'Projetos | TAVARES Construção', '/servicos': 'Serviços | TAVARES Construção', '/como-construimos': 'Como construímos | TAVARES Construção', '/sobre': 'Sobre | TAVARES Construção', '/contato': 'Contato | TAVARES Construção' }
export default function App() { const { pathname } = useLocation(); useEffect(() => { document.title = pathname.startsWith('/projetos/') ? 'Projeto | TAVARES Construção' : titles[pathname] ?? 'TAVARES Construção'; window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }) }, [pathname]); return <><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/projetos" element={<Projects/>}/><Route path="/projetos/:slug" element={<ProjectDetail/>}/><Route path="/servicos" element={<Services/>}/><Route path="/como-construimos" element={<HowWeBuild/>}/><Route path="/sobre" element={<About/>}/><Route path="/contato" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/></> }
