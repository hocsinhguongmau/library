import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getBooksRequest } from '@/store/books/action'
import { RootState } from '@/store/rootReducer'

export default function HomeList() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBooksRequest())
  }, [dispatch])

  const { data, isLoading } = useSelector((state: RootState) => state.books)

  return (
    <section>
      <div className="section-wrapper">
        <h2 className="text-2xl text-center uppercase text-primary">BOOKS, MAGAZINES & MOVIES</h2>
        <h3 className="text-xl italic text-center text-secondary">
          Available to download and stream
        </h3>
        <div className="grid grid-cols-4 gap-8 mt-8">
          {isLoading ? <span>Loading...</span> : null}
          {data.slice(0, 4).map((book) => (
            <div key={book._id}>
              <Link to={`book/${book._id}`} className="block px-4">
                <img
                  src={book.picture}
                  alt={book.title}
                  width={200}
                  height={300}
                  className="w-full"
                />
              </Link>
              <h4 className="mt-4 text-xl font-bold text-center capitalize">
                <Link to={`book/${book._id}`}>{book.title}</Link>
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
          <Link to="/" className="button button-outlined">
            See more
          </Link>
        </div>
      </div>
    </section>
  )
}
