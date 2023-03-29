import { NavItem } from '@/types/Common'
import NavLink from './NavLink'
import { useEffect } from 'react'
import { RootState, useAppDispatch } from '@/redux/store'
import { fetchCategories } from '@/redux/features/categories/categoriesSlice'
import { useSelector } from 'react-redux'

export default function Navigation() {
  const dispatch = useAppDispatch()
  const categories = useSelector((state: RootState) => state.categories.categories)
  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  const categoryNavChild = categories.map((category) => ({
    title: category.title,
    url: `/category/${category.id}`
  }))
  const navigation: NavItem[] = [
    {
      title: 'Home',
      url: '/'
    },
    {
      title: 'Categories',
      url: '/categories',
      child: categoryNavChild
    },
    {
      title: 'catalog',
      url: '/catalog'
    },
    {
      title: 'author',
      url: '/author'
    },
    {
      title: 'publisher',
      url: '/publisher'
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
