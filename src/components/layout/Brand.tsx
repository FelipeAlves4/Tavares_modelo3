import { Link } from 'react-router-dom'

const clientLogo = '/images/tavares-logo-client.png'

export function Brand({ variant = 'dark', compact = false }: { variant?: 'dark' | 'light'; compact?: boolean }) {
  return <Link className={`brand brand--${variant} ${compact ? 'brand--compact' : 'brand--full'}`} to="/" aria-label="TAVARES CONSTRUÇÃO — Construindo os sonhos. Página inicial">
    <img className={compact ? 'brand__client-mark' : 'brand__client-logo'} src={clientLogo} alt="" decoding="async"/>
    <span className="brand__wordmark"><strong>TAVARES CONSTRUÇÃO</strong><small>Construindo os sonhos.</small></span>
  </Link>
}
