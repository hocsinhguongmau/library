import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { iBook } from '@/types'
import { removeBookFunction } from '@/utils/backend-service'

interface RemoveBookState {
  books: iBook[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: RemoveBookState = {
  books: [],
  status: 'idle',
  error: null
}

export const removeBook = createAsyncThunk<iBook[], number>('books/remove', async (id) => {
  const removedBook = await removeBookFunction(id)
  return removedBook
})

const removeBookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(removeBook.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.books = action.payload
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
})

export default removeBookSlice.reducer
