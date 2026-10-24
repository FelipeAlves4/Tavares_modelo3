import { Link } from 'react-router-dom'

function BrandMark() {
  return <svg className="brand__mark" viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false">
    <path d="M8 9H40M24 9V40M14 17V40M34 17V40M8 40H40" stroke="currentColor" strokeWidth="2.25"/>
    <path d="M8 9H24V17H14" stroke="var(--copper)" strokeWidth="2.25"/>
  </svg>
}

export function Brand({ variant = 'dark', compact = false }: { variant?: 'dark' | 'light'; compact?: boolean }) {
  return <Link className={`brand brand--${variant} ${compact ? 'brand--compact' : 'brand--full'}`} to="/" aria-label="TAVARES CONSTRUÇÃO — Construindo os sonhos. Página inicial">
    <BrandMark/>
    <span className="brand__wordmark"><strong>TAVARES CONSTRUÇÃO</strong><small>Construindo os sonhos.</small></span>
  </Link>
}
