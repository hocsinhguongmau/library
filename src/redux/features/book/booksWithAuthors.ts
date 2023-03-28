import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { iBook, iBookWithAuthor } from '@/types/Book'
import { iAuthor } from '@/types'

interface BooksWithAuthorState {
  booksWithAuthor: iBookWithAuthor[]
}

const initialState: BooksWithAuthorState = {
  booksWithAuthor: []
}

const booksWithAuthorSlice = createSlice({
  name: 'booksWithAuthor',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<{ books: iBook[]; authors: iAuthor[] }>) => {
      state.booksWithAuthor = action.payload.books.map((book) => {
        const author = action.payload.authors.find((author) => author.id === book.author)
        return {
          ...book,
          authorName: author?.name,
          authorInfo: author
        }
      })
    }
  }
})

export const { setBooks } = booksWithAuthorSlice.actions
export default booksWithAuthorSlice.reducer
