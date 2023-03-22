import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useSelector } from 'react-redux'

import { ThemeState } from '@/store/themes/reducer'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const theme = useSelector((state: { theme: ThemeState }) => state.theme.theme)

  return (
    <div className="min-h-screen myTheme" data-theme={theme}>
      <Header />
      <main role="main" className="container py-8 mx-auto" aria-label="Main Content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
