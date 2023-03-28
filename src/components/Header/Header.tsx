import { Link } from 'react-router-dom'

import Search from '@/components/Search'
import ToggleDarkMode from '@/components/ToggleDarkMode'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header>
      <div className="text-white bg-primary">
        <div className="container flex items-center justify-between px-4 py-2 mx-auto">
          <Search aria-label="Search books, authors, or subjects" classes="w-96" />
          <div className="flex items-center gap-4" role="navigation">
            <div className="text-white">
              <Link to="/register" className="text-white">
                Log in <span className="inline-block mx-2">|</span> Register
              </Link>
            </div>
            <ToggleDarkMode />
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  )
}
