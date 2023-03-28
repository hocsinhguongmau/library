import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/redux/store'
import { useLocation, useNavigate } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import queryString from 'query-string'

import { fetchBooks } from '@/redux/features/book/booksSlice'
import Loading from '@/components/Loading'
import BookListItem from '@/components/BookListItem'
import { fetchAuthors } from '@/redux/features/author/authorsSlice'
import Search from '@/components/Search/Search'
import { paginationSettings } from '@/configs/commonSettings'

export default function Catalog() {
  const dispatch = useAppDispatch()
  const books = useSelector((state: RootState) => state.books.books)
  const status = useSelector((state: RootState) => state.books.status)

  const location = useLocation()
  const navigate = useNavigate()

  const pageNumber = Number(new URLSearchParams(location.search).get('page') ?? 1) - 1

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  useEffect(() => {
    dispatch(fetchAuthors())
  }, [])

  function handlePageClick({ selected }: { selected: number }) {
    setCurrentPage(selected)
    navigate({
      search: queryString.stringify({ page: selected + 1 })
    })
  }

  useEffect(() => {
    const params = queryString.parse(location.search)
    const page = Number(params.page)
    if (!isNaN(page)) {
      setCurrentPage(page - 1)
    }
  }, [location.search])

  const [currentPage, setCurrentPage] = useState<number>(0)
  const booksPerPage = 8
  const pageCount = Math.ceil(books.length / booksPerPage)

  const startIndex = currentPage * booksPerPage
  const displayedBooks = books.slice(startIndex, startIndex + booksPerPage)

  return (
    <section className="container grid grid-cols-4 gap-8 mx-auto">
      <div className="border border-primary">navbar</div>
      <div className="col-span-3">
        <h1 className="text-2xl text-center uppercase text-primary">BOOKS, MAGAZINES & MOVIES</h1>
        <Search classes=" mt-8 w-1/2 min-w-96 block mx-auto" />
        {status === 'loading' ? <Loading classes="pt-8" /> : null}
        <div className="grid grid-cols-4 gap-8 mt-8">
          {displayedBooks.map((book) => (
            <BookListItem {...book} key={book.id} />
          ))}
        </div>
        <ReactPaginate
          className="pagination"
          pageCount={pageCount}
          {...paginationSettings}
          onPageChange={handlePageClick}
          forcePage={pageNumber}
        />
      </div>
    </section>
  )
}
