import { iBook } from '@/types'
import { updateBookFunction } from '@/utils/backend-service/books'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface UpdateBookState {
  books: iBook[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

interface UpdateBookData {
  id: number
  updatedBook: iBook
}

const initialState: UpdateBookState = {
  books: [],
  status: 'idle',
  error: null
}

export const updateBook = createAsyncThunk<iBook, UpdateBookData>(
  'books/update',
  async ({ id, updatedBook }): Promise<any> => {
    const response = await updateBookFunction(id, updatedBook)
    return response
  }
)

const updateBookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateBook.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateBook.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.books = state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book
        )
      })
      .addCase(updateBook.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
})

export default updateBookSlice.reducer
