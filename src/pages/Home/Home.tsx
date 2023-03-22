import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <Link to="/">
        <img src="/assets/images/logo.png" width={121} height={141} alt="Logo" />
      </Link>
    </section>
  )
}
