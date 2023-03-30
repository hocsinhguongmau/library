import { RootState, useAppDispatch } from '@/redux/store'
import { useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Profile() {
  const [searchParams] = useSearchParams()
  const redirectUrl = searchParams.get('redirectUrl')
  const dispatch = useAppDispatch()

  const { token } = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

  // Redirect to home page if user is already authenticated
  if (token) {
    console.log(token)
    navigate(`${redirectUrl || '/'}`)
  }

  return <div>Profile</div>
}
