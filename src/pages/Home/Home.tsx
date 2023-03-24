import Welcome from '@/components/Welcome/Welcome'
import Intro from '@/components/Intro/Intro'
import HomeList from '@/components/HomeList/HomeList'
import NewsLetter from '@/components/NewsLetter/NewsLetter'
import { iBook } from '@/types'
import { addNewBook } from '@/redux/features/book/addBookSlice'
import { useAppDispatch } from '@/redux/store'
import { removeBook } from '@/redux/features/book/removeBookSlice'
import { updateBook } from '@/redux/features/book/updateBookSlice'

export default function Home() {
  const dispatch = useAppDispatch()

  const newBook: iBook = {
    id: 1,
    picture: 'https://picsum.photos/id/2/200/300.webp',
    isbn: '9789-9-0-9',
    title: 'ffff',
    description: 'bbb.',
    publisherId: 7,
    authorsId: [9, 25, 14],
    categoriesId: [3, 3, 3],
    status: 'available',
    publishedDate: '2010-05-05',
    borrowDate: null,
    returnDate: null
  }
  const newBook2: iBook = {
    id: 2,
    picture: 'https://picsum.photos/id/6/200/300.webp',
    isbn: '9789-9-0-9',
    title: 'gggg',
    description: 'bbb.',
    publisherId: 7,
    authorsId: [9, 25, 14],
    categoriesId: [3, 3, 3],
    status: 'available',
    publishedDate: '2010-05-05',
    borrowDate: null,
    returnDate: null
  }

  const handleAddBook = () => {
    dispatch(addNewBook(newBook))
  }

  const handleRemoveBook = () => {
    dispatch(removeBook(1))
  }

  const handleUpdateBook = () => {
    dispatch(updateBook({ id: 1, updatedBook: newBook2 }))
  }

  return (
    <>
      <Welcome />
      <Intro />
      <HomeList />
      <NewsLetter />
      <button onClick={handleAddBook} className="button button-large">
        add
      </button>
      <button onClick={handleRemoveBook} className="button button-large">
        remove
      </button>
      <button onClick={handleUpdateBook} className="button button-large">
        update
      </button>
    </>
  )
}
