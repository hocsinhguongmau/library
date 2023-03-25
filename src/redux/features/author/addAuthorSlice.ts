import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { iAuthor } from '@/types'
import { addAuthorFunction } from '@/utils/backend-service/'

interface AddAuthorState {
  authors: iAuthor[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: AddAuthorState = {
  authors: [],
  status: 'idle',
  error: null
}

export const addNewAuthor = createAsyncThunk<iAuthor, iAuthor>(
  'authors/add',
  async (newAuthor): Promise<any> => {
    const addedAuthor = await addAuthorFunction(newAuthor)
    return addedAuthor
  }
)

const addAuthorSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addNewAuthor.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(addNewAuthor.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.authors.push(action.payload)
      })
      .addCase(addNewAuthor.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  }
})

export default addAuthorSlice.reducer
