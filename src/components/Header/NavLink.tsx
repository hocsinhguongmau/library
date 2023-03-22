import { Link } from 'react-router-dom'
import { RxCaretDown } from 'react-icons/rx'

import { NavItem } from '@/types/Common'

export default function NavLink({ title, url, child }: NavItem) {
  return (
    <li className="relative z-10 w-full p-4 group max-w-[20%]">
      <Link
        to={url}
        className="block text-lg text-center uppercase text-text group-hover:text-primary">
        {title}
      </Link>
      {child && (
        <div className="absolute left-0 hidden w-full bg-primary top-full group-hover:block">
          <RxCaretDown className="absolute text-2xl -translate-x-1/2 text-primary bottom-full left-1/2" />
          <ul>
            {child.map((childNav) => (
              <li className="" key={childNav.title}>
                <Link
                  to={childNav.url}
                  className="block px-4 py-2 text-white capitalize hover:bg-secondary hover:text-white">
                  {childNav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}
