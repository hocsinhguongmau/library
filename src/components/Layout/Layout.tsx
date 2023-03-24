import Header from '@/components/Header'
import Footer from '@/components/Footer'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const theme = 'light'

  return (
    <div className="min-h-screen myTheme" data-theme={theme}>
      <Header />
      <main role="main" aria-label="Main Content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
