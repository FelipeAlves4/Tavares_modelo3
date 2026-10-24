import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Brand } from './Brand'
export function Footer() { return <footer className="footer"><div className="shell footer__top"><div><Brand variant="dark"/><p>Construindo os sonhos.</p></div><div className="footer__links"><Link to="/projetos">Projetos</Link><Link to="/servicos">Serviços</Link><Link to="/como-construimos">Como construímos</Link><Link to="/sobre">Sobre</Link></div><Link className="text-link" to="/contato">Vamos conversar <ArrowUpRight size={17}/></Link></div><div className="shell footer__bottom"><span>© {new Date().getFullYear()} TAVARES Construção</span><span>Projeto demonstrativo — contatos e obras são ilustrativos.</span></div></footer> }
