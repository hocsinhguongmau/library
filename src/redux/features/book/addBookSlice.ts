import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { iBook } from '@/types'
import { addBookFunction } from '@/utils/backend-service'

interface AddBookState {
  books: iBook[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState = {
  books: [],
  status: 'idle',
  error: null
} as AddBookState

export const addNewBook = createAsyncThunk<iBook[], iBook>('books/addNewBook', async (newBook) => {
  const addedBook = await addBookFunction(newBook)
  return addedBook
})

const addBookSlice = createSlice({
  name: 'addBook',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewBook.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.books = action.payload
      })
      .addCase(addNewBook.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
})

export default addBookSlice.reducer
