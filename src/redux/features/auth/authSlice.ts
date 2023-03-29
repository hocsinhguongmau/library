import { SignInFormData } from '@/types'
import { signIn } from '@/utils/backend-service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface AuthState {
  token: string | null
  name: string
  loading: boolean
  error: string | null
}

const initialState: AuthState = {
  token: null,
  name: '',
  loading: false,
  error: null
}

export const loginAsync = createAsyncThunk('auth/login', async (data: SignInFormData) => {
  const response = await signIn(data)
  return response
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null
      state.name = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload?.token || 'asd'
        state.name = action.payload?.name || 'asd'
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message ?? 'Login failed'
      })
  }
})

export const { logout } = authSlice.actions

export default authSlice.reducer
