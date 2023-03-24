import { fetchAllBooks } from '@/utils/backend-service/books'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { iBook } from '@/types'

interface BooksState {
  books: iBook[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: BooksState = {
  books: [],
  status: 'idle',
  error: null
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const data = await fetchAllBooks()
  return data
})

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.books = action.payload
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
})

export default booksSlice.reducer
