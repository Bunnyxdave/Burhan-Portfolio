import { Link } from 'react-router-dom';
import { logoPath } from '../data.js';

export default function Brand({ className = '' }) {
  return <Link className={`brand ${className}`.trim()} to="/" aria-label="Burhan Nayeem, home">
    <img className="brand-image" src={logoPath} alt="" />
  </Link>;
}
