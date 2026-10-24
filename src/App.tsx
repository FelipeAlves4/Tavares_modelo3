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
const meta: Record<string, { title: string; description: string }> = {
  '/': { title: 'TAVARES Construção | Construindo os sonhos.', description: 'TAVARES Construção: residências de alto padrão, precisão construtiva e arquitetura contemporânea para construir os sonhos.' },
  '/projetos': { title: 'Projetos | TAVARES Construção', description: 'Residências e projetos de alto padrão da TAVARES Construção — construindo os sonhos com precisão.' },
  '/servicos': { title: 'Serviços | TAVARES Construção', description: 'Construção residencial, planejamento e gerenciamento de obras para construir os sonhos.' },
  '/como-construimos': { title: 'Como construímos | TAVARES Construção', description: 'Conheça o método da TAVARES Construção, do planejamento à entrega de cada sonho.' },
  '/sobre': { title: 'Sobre | TAVARES Construção', description: 'TAVARES Construção: arquitetura, clareza e rigor para construir os sonhos.' },
  '/contato': { title: 'Contato | TAVARES Construção', description: 'Inicie uma conversa com a TAVARES Construção sobre o seu próximo sonho.' }
}
function setMeta(name: string, value: string) { const element = document.querySelector(`meta[name="${name}"]`); if (element) element.setAttribute('content', value) }
function setOg(property: string, value: string) { const element = document.querySelector(`meta[property="${property}"]`); if (element) element.setAttribute('content', value) }
export default function App() { const { pathname } = useLocation(); useEffect(() => { const page = pathname.startsWith('/projetos/') ? { title: 'Projeto demonstrativo | TAVARES Construção', description: 'Detalhe de projeto demonstrativo da TAVARES Construção.' } : meta[pathname] ?? { title: 'Página não encontrada | TAVARES Construção', description: 'Esta página não faz parte do site demonstrativo da TAVARES Construção.' }; document.title = page.title; setMeta('description', page.description); setOg('og:title', page.title); setOg('og:description', page.description); window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }) }, [pathname]); return <><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/projetos" element={<Projects/>}/><Route path="/projetos/:slug" element={<ProjectDetail/>}/><Route path="/servicos" element={<Services/>}/><Route path="/como-construimos" element={<HowWeBuild/>}/><Route path="/sobre" element={<About/>}/><Route path="/contato" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/></> }
