import { Link } from 'react-router-dom'

import Search from '@/components/Search'
import ToggleDarkMode from '@/components/ToggleDarkMode'

export default function Header() {
  return (
    <header className="text-white bg-primary">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <Search />
        <div>
          <Link to="/register" className="text-white">
            Log in <span className="inline-block mx-2">|</span> Register
          </Link>
          <ToggleDarkMode />
        </div>
      </div>
    </header>
  )
}
