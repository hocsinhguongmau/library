import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { iAuthor } from '@/types'
import { updateAuthorFunction } from '@/utils/backend-service/'

interface UpdateAuthorState {
  authors: iAuthor[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

interface UpdateAuthorData {
  id: number
  updatedAuthor: iAuthor
}

const initialState: UpdateAuthorState = {
  authors: [],
  status: 'idle',
  error: null
}

export const updateAuthor = createAsyncThunk<iAuthor[], UpdateAuthorData>(
  'authors/update',
  async ({ id, updatedAuthor }) => {
    const response = await updateAuthorFunction(id, updatedAuthor)
    return response
  }
)

const updateAuthorSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateAuthor.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateAuthor.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.authors = action.payload
      })
      .addCase(updateAuthor.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
})

export default updateAuthorSlice.reducer
