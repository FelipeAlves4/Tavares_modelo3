import { Link } from 'react-router-dom'

export function Brand({ dark = false }: { dark?: boolean }) {
  return <Link className={`brand ${dark ? 'brand--dark' : ''}`} to="/" aria-label="TAVARES Construção — página inicial">
    <span className="brand__mark" aria-hidden="true"><i /><i /><i /></span>
    <span><strong>TAVARES</strong><small>Construção</small></span>
  </Link>
}
