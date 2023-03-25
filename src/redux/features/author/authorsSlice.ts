import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { fetchAllAuthors } from '@/utils/backend-service/authors'
import { iAuthor } from '@/types'

interface AuthorsState {
  authors: iAuthor[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: AuthorsState = {
  authors: [],
  status: 'idle',
  error: null
}

export const fetchAuthors = createAsyncThunk('authors/fetchAuthors', async () => {
  const data = await fetchAllAuthors()
  return data
})

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.authors = action.payload
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
})

export default authorsSlice.reducer
