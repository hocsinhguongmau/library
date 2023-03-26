import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { sortArrayByField } from '@/utils/frontend-service/'
import { filterArrayBySearchTerm } from '@/utils/frontend-service/'
import { fetchAllBooks } from '@/utils/backend-service'
import { BooksState, SearchOption, SortOption } from '@/types'

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
  reducers: {
    sortBooks(state, action: PayloadAction<SortOption>) {
      const { field, order } = action.payload
      sortArrayByField(state.books, field, order)
    },
    searchBooks(state, action: PayloadAction<SearchOption>) {
      const { searchTerm, keysToSearch } = action.payload
      state.books = filterArrayBySearchTerm(state.books, searchTerm, keysToSearch)
    },
    resetBooks(state) {
      state.books = initialState.books
    }
  },
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

export const { sortBooks, searchBooks, resetBooks } = booksSlice.actions

export default booksSlice.reducer
