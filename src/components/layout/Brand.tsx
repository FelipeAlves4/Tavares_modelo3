import { Link } from 'react-router-dom'

export function Brand({ variant = 'dark', compact = false }: { variant?: 'dark' | 'light'; compact?: boolean }) {
  const src = variant === 'dark' ? '/images/logo-dark.png' : '/images/logo-light.png'
  return <Link className={`brand ${compact ? 'brand--compact' : ''}`} to="/" aria-label="TAVARES Construção — página inicial">
    {compact ? <><span className="brand__symbol" aria-hidden="true"><img src={src} alt="" /></span><span className="brand__wordmark"><strong>TAVARES</strong><small>Construindo o que permanece.</small></span></> : <img className="brand__full" src={src} alt="TAVARES Construção — Construindo o que permanece" />}
  </Link>
}
