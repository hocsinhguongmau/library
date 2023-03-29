import Loading from '@/components/Loading/Loading'
import { fetchAuthors } from '@/redux/features/author/authorsSlice'
import { fetchBooks } from '@/redux/features/book/booksSlice'
import { setBooks } from '@/redux/features/book/booksWithAuthors'
import { RootState, useAppDispatch } from '@/redux/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export default function BookDetail() {
  const dispatch = useAppDispatch()
  const { books, status } = useSelector((state: RootState) => state.books)
  const authors = useSelector((state: RootState) => state.authors.authors)
  const booksWithAuthor = useSelector((state: RootState) => state.booksWithAuthor.booksWithAuthor)

  const bookId = useParams().id as string
  const bookDetail = booksWithAuthor.filter((book) => book.id === bookId)[0]
  useEffect(() => {
    dispatch(fetchBooks())
    dispatch(fetchAuthors())
  }, [])
  useEffect(() => {
    dispatch(setBooks({ books, authors }))
  }, [books, authors])
  if (status === 'loading') {
    return <Loading classes="mx-auto" />
  }
  if (bookDetail) {
    return (
      <div className="container max-w-4xl py-10 mx-auto">
        <div className="flex justify-between gap-8">
          <img src={bookDetail.picture} alt={bookDetail.title} width={300} />
          <div className="w-full">
            <h1 className="text-3xl uppercase text-primary">{bookDetail.title}</h1>
            <p className="mt-2 text-xl">
              Author: <Link to={`/author/${bookDetail.author}`}>{bookDetail.authorInfo?.name}</Link>
            </p>
            <p className="mt-2">{bookDetail.description}</p>
            <p className="mt-2">Published date: {bookDetail.publishedDate}</p>
            <p className="mt-2">
              Available:{' '}
              {bookDetail.status ? (
                <span className="text-success">Available</span>
              ) : (
                <span className="text-error">Not available</span>
              )}
            </p>
          </div>
        </div>
      </div>
    )
  } else {
    return <>No data</>
  }
}
