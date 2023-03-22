import { NavItem } from '@/types/Common'
import NavLink from './NavLink'

const navigation: NavItem[] = [
  {
    title: 'use the library',
    url: '/',
    child: [
      {
        title: 'gets a card',
        url: '/'
      },
      {
        title: 'access to your account',
        url: '/'
      }
    ]
  },
  {
    title: 'BOOKS & MEDIA',
    url: '/'
  },
  {
    title: 'PROGRAMS',
    url: '/'
  },
  {
    title: 'EVENT CALENDAR',
    url: '/'
  },
  {
    title: 'LOCATIONS',
    url: '/'
  },
  {
    title: 'ABOUT',
    url: '/'
  }
]

export default function Navigation() {
  return (
    <nav className="container px-4 mx-auto ">
      <ul className="flex justify-between border-b-2 border-primary">
        {navigation.map((nav) => (
          <NavLink {...nav} key={nav.title} />
        ))}
      </ul>
    </nav>
  )
}
