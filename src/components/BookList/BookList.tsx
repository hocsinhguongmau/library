import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState, useAppDispatch } from '@/redux/store'

import { fetchBooks } from '@/redux/features/book/booksSlice'
import Loading from '@/components/Loading'
import BookListItem from '@/components/BookListItem'
import { fetchAuthors } from '@/redux/features/author/authorsSlice'

export default function HomeList() {
  const dispatch = useAppDispatch()
  const books = useSelector((state: RootState) => state.books.books)
  const status = useSelector((state: RootState) => state.books.status)

  // const newBook: iBook = {
  //   id: uuidv4(),
  //   picture: 'https://picsum.photos/id/19/200/300.webp',
  //   isbn: '9780-9-0-9',
  //   title: 'exercitation incididunt commodo',
  //   description:
  //     'In esse adipisicing ad voluptate magna. Non mollit ut exercitation tempor ea irure dolore duis mollit.',
  //   publisher: '6',
  //   author: '12',
  //   category: '4',
  //   status: 'available',
  //   publishedDate: '1980-10-25'
  // }

  // const handleSearch = useCallback(
  //   (searchTerm: string) => {
  //     dispatch(
  //       searchBooks({
  //         searchTerm: searchTerm,
  //         keysToSearch: ['title']
  //       })
  //     )
  //   },
  //   [dispatch]
  // )
  // const handleAddBook = (book: iBook) => {
  //   dispatch(addNewBook(book))
  // }
  // const handleSort = useCallback(
  //   (field: keyof iBook, order: 'asc' | 'desc') => {
  //     dispatch(sortBooks({ field, order }))
  //   },
  //   [dispatch]
  // )

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  useEffect(() => {
    dispatch(fetchAuthors())
  }, [])

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
            <BookListItem {...book} key={book.id} />
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link to="/catalog" className="button button-outlined">
            See more
          </Link>
        </div>
      </div>
    </section>
  )
}
