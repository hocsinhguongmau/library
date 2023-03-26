import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState, useAppDispatch } from '@/redux/store'
import { fetchBooks, searchBooks, sortBooks } from '@/redux/features/book/booksSlice'
import { iBook } from '@/types'
import Loading from '@/components/Loading'

export default function HomeList() {
  const dispatch = useAppDispatch()
  const books = useSelector((state: RootState) => state.books.books)
  const status = useSelector((state: RootState) => state.books.status)

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  const handleSort = useCallback(
    (field: keyof iBook, order: 'asc' | 'desc') => {
      dispatch(sortBooks({ field, order }))
    },
    [dispatch]
  )

  const handleSearch = useCallback(
    (searchTerm: string) => {
      dispatch(
        searchBooks({
          searchTerm: searchTerm,
          keysToSearch: ['title', 'authors', 'publisher', 'categories']
        })
      )
    },
    [dispatch]
  )

  return (
    <section>
      <div className="section-wrapper">
        <h2 className="text-2xl text-center uppercase text-primary">BOOKS, MAGAZINES & MOVIES</h2>
        <h3 className="text-xl italic text-center text-secondary">
          Available to download and stream
        </h3>
        {status === 'loading' ? <Loading classes="pt-8" /> : null}
        <div className="grid grid-cols-4 gap-8 mt-8">
          {books.slice(0, 4).map((book) => (
            <div key={book.id}>
              <Link to={`book/${book.id}`} className="block px-4">
                <img
                  src={book.picture}
                  alt={book.title}
                  width={200}
                  height={300}
                  className="w-full"
                />
              </Link>
              <h4 className="mt-4 text-xl font-bold text-center capitalize">
                <Link to={`book/${book.id}`}>{book.title}</Link>
              </h4>
              <h4 className="italic text-center">
                <Link className="capitalize text-secondary" to="/">
                  Author
                </Link>
              </h4>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link to="/catalog" className="button button-outlined">
            See more
          </Link>
        </div>
        <div className="flex gap-8">
          <button className="button button-filled" onClick={() => handleSort('title', 'asc')}>
            Sort by Title (Ascending)
          </button>
          <button className="button button-filled" onClick={() => handleSort('title', 'desc')}>
            Sort by Title (Descending)
          </button>
        </div>
      </div>
    </section>
  )
}
