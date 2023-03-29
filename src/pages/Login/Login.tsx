import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { SignInFormData } from '@/types'
import Loading from '@/components/Loading/Loading'
import LoginForm from '@/components/LoginForm/LoginForm'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/redux/store'
import { loginAsync } from '@/redux/features/auth/authSlice'

const SignInPage: React.FC = () => {
  const [searchParams] = useSearchParams()
  const redirectUrl = searchParams.get('redirectUrl')
  const dispatch = useAppDispatch()

  const { loading } = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()
  const onSubmit = (data: SignInFormData) => {
    dispatch(loginAsync(data))
    navigate(`${redirectUrl || '/'}`)
  }

  const onCancel = async () => {
    navigate(-1)
  }

  return (
    <div className="mb-8">
      <h1 className="mt-10 text-4xl font-semibold text-center">Sign In</h1>
      <LoginForm onSubmit={onSubmit} onCancel={onCancel} />
      {loading ? <Loading classes="mx-auto" /> : null}
    </div>
  )
}

export default SignInPage
