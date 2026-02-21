import { useNavigate, useLocation } from 'react-router-dom'
import { BookHeart } from 'lucide-react'

/**
 * Sticky top navigation bar with logo and active route indicator.
 */
function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isHome = location.pathname === '/providers' || location.pathname === '/'

  return (
    <nav className="bg-surface border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo + brand */}
        <div
          onClick={() => navigate('/providers')}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <BookHeart size={28} className="text-primary" />
          <span className="text-xl font-bold text-content-primary tracking-tight">
            Habot
            <span className="text-primary"> Connect</span>
          </span>
        </div>

        {/* Active route label */}
        <span
          className={`text-sm font-medium pb-0.5 transition-colors duration-150 ${
            isHome
              ? 'text-primary border-b-2 border-primary'
              : 'text-content-secondary border-b-2 border-transparent'
          }`}
        >
          Provider Directory
        </span>
      </div>
    </nav>
  )
}

export default Navbar