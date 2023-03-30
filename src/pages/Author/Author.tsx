// import { fetchAuthors } from '@/redux/features/author/authorsSlice'
import { RootState } from '@/redux/store'
// import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Author() {
  // const dispatch = useAppDispatch()
  const authors = useSelector((state: RootState) => state.authors.authors)

  // useEffect(() => {
  //   dispatch(fetchAuthors())
  // }, [])
  return <div>{}</div>
}
