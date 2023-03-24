import { useRef } from 'react'
import Lottie from 'lottie-react'
import { useDispatch } from 'react-redux'

import toggleIcon from '@/lotties/toggle.json'
// import { ThemeState } from '@/store/themes/reducer'
// import { setTheme } from '@/store/themes/action'

const ToggleButton = () => {
  const dispatch = useDispatch()
  // const theme = useSelector((state: { theme: ThemeState }) => state.theme.theme)
  const theme = 'light'
  const ref = useRef<any>(null)
  const toggleButton = () => {
    if (theme === 'light') {
      ref.current.playSegments([45, 0], true)
      ref.current.setSpeed(4)
      // dispatch(setTheme('dark'))
    } else {
      ref.current.playSegments([0, 45], true)
      ref.current.setSpeed(4)
      // dispatch(setTheme('light'))
    }
  }

  return (
    <Lottie
      className="cursor-pointer"
      lottieRef={ref}
      animationData={toggleIcon}
      onClick={toggleButton}
      autoplay={false}
      loop={false}
      onDOMLoaded={() => {
        if (theme === 'light') {
          ref.current.goToAndStop(45, true)
        } else {
          ref.current.goToAndStop(0, true)
        }
      }}
    />
  )
}

export default function ToggleDarkMode() {
  return (
    <div className="w-24">
      <ToggleButton />
    </div>
  )
}
