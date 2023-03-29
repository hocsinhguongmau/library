import BookItem from '@/admin/components/BookItem/BookItem'
import Popup from '@/admin/components/Popup/Popup'
import Loading from '@/components/Loading/Loading'
import { addNewBook, fetchBooks } from '@/redux/features/book/booksSlice'
import { RootState, useAppDispatch } from '@/redux/store'
import { IBook } from '@/types'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

export default function Admin() {
  const dispatch = useAppDispatch()
  const books = useSelector((state: RootState) => state.books.books)
  const status = useSelector((state: RootState) => state.books.status)

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  const newBook: IBook = {
    id: uuidv4(),
    picture: 'https://picsum.photos/id/19/200/300.webp',
    isbn: '9780-9-0-9',
    title: 'exercitation incididunt commodo',
    description:
      'In esse adipisicing ad voluptate magna. Non mollit ut exercitation tempor ea irure dolore duis mollit.',
    publisher: '6',
    author: '12',
    category: '4',
    status: 'available',
    publishedDate: '1980-10-25'
  }

  const handleAddBook = (book: IBook) => {
    dispatch(addNewBook(book))
  }

  {
    status === 'loading' ? <Loading classes="mx-auto" /> : null
  }

  return (
    <>
      <div className="container p-4 mx-auto">
        <h1 className="text-4xl text-center">Dashboard</h1>
        <p>
          <button className="button button-outlined" onClick={() => handleAddBook(newBook)}>
            Add new book
          </button>
        </p>
        <div className="grid grid-cols-6 gap-4 mt-8">
          {books.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </div>
      </div>
      <Popup />
    </>
  )
}
