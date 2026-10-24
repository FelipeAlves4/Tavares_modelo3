import { Link } from 'react-router-dom'

export function Brand({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const src = variant === 'dark' ? '/images/logo-dark.png' : '/images/logo-light.png'
  return <Link className="brand" to="/" aria-label="TAVARES Construção — página inicial">
    <img src={src} alt="TAVARES Construção — Construindo o que permanece" />
  </Link>
}
