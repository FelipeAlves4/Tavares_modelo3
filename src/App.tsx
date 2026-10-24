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
  '/': { title: 'TAVARES Construção | Engineering Prestige', description: 'TAVARES Construção: engenharia e construção de alto padrão, com planejamento, precisão e arquitetura contemporânea.' },
  '/projetos': { title: 'Projetos | TAVARES Construção', description: 'Projetos demonstrativos de construção residencial, corporativa e comercial da TAVARES Construção.' },
  '/servicos': { title: 'Serviços | TAVARES Construção', description: 'Construção residencial, corporativa, planejamento e gerenciamento de obras.' },
  '/como-construimos': { title: 'Como construímos | TAVARES Construção', description: 'Conheça o método demonstrativo da TAVARES Construção, do planejamento à entrega.' },
  '/sobre': { title: 'Sobre | TAVARES Construção', description: 'A filosofia da TAVARES Construção: clareza, rigor e presença em cada projeto.' },
  '/contato': { title: 'Contato | TAVARES Construção', description: 'Inicie uma conversa sobre possibilidades para o seu próximo projeto.' }
}
function setMeta(name: string, value: string) { const element = document.querySelector(`meta[name="${name}"]`); if (element) element.setAttribute('content', value) }
function setOg(property: string, value: string) { const element = document.querySelector(`meta[property="${property}"]`); if (element) element.setAttribute('content', value) }
export default function App() { const { pathname } = useLocation(); useEffect(() => { const page = pathname.startsWith('/projetos/') ? { title: 'Projeto demonstrativo | TAVARES Construção', description: 'Detalhe de projeto demonstrativo da TAVARES Construção.' } : meta[pathname] ?? { title: 'Página não encontrada | TAVARES Construção', description: 'Esta página não faz parte do site demonstrativo da TAVARES Construção.' }; document.title = page.title; setMeta('description', page.description); setOg('og:title', page.title); setOg('og:description', page.description); window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }) }, [pathname]); return <><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/projetos" element={<Projects/>}/><Route path="/projetos/:slug" element={<ProjectDetail/>}/><Route path="/servicos" element={<Services/>}/><Route path="/como-construimos" element={<HowWeBuild/>}/><Route path="/sobre" element={<About/>}/><Route path="/contato" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/></> }
