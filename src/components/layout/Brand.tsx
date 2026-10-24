import { Link } from 'react-router-dom'

export function Brand({ variant = 'dark', compact = false }: { variant?: 'dark' | 'light'; compact?: boolean }) {
  const src = variant === 'dark' ? '/images/logo-dark.png' : '/images/logo-light.png'
  return <Link className={`brand ${compact ? 'brand--compact' : 'brand--full'}`} to="/" aria-label="TAVARES Construção — Construindo os sonhos. Página inicial">
    <span className="brand__symbol" aria-hidden="true"><img src={src} alt="" /></span><span className="brand__wordmark"><strong>TAVARES Construção</strong><small>Construindo os sonhos.</small></span>
  </Link>
}
