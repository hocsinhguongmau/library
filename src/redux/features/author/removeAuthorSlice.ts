import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { iAuthor } from '@/types'
import { removeAuthorFunction } from '@/utils/backend-service'

interface RemoveAuthorState {
  authors: iAuthor[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: RemoveAuthorState = {
  authors: [],
  status: 'idle',
  error: null
}

export const removeAuthor = createAsyncThunk<iAuthor[], number>('authors/remove', async (id) => {
  const removedAuthor = await removeAuthorFunction(id)
  return removedAuthor
})

const removeAuthorSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(removeAuthor.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(removeAuthor.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.authors = action.payload
      })
      .addCase(removeAuthor.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
})

export default removeAuthorSlice.reducer
