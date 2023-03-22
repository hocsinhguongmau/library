import Header from '@/components/Header'

type Props = {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen myTheme" data-theme={'light'}>
      <div className="container py-8 mx-auto ">
        <Header />
        <main role="main" aria-label="Main Content">
          {children}
        </main>
      </div>
    </div>
  )
}
