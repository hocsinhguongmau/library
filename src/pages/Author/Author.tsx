import { fetchAuthors } from '@/redux/features/author/authorsSlice'
import { useAppDispatch } from '@/redux/store'
import { useEffect } from 'react'

export default function Author() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAuthors())
  }, [])
  return <div>Author</div>
}
