import { Link } from 'react-router-dom'

import Search from '@/components/Search'
import ToggleDarkMode from '@/components/ToggleDarkMode'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header>
      <div className="text-white bg-primary">
        <div className="container flex items-center justify-between p-4 mx-auto">
          <Search />
          <div className="flex items-center gap-4">
            <Link to="/register" className="text-white">
              Log in <span className="inline-block mx-2">|</span> Register
            </Link>
            <ToggleDarkMode />
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  )
}
