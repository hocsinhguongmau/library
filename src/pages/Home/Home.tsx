import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <Link to="/">
        <img
          src="/assets/images/logo.png"
          className="mx-auto"
          width={121}
          height={141}
          alt="Logo"
        />
      </Link>
      <h1 className="mt-8 text-4xl text-center uppercase text-primary">
        Welcome to the <span className="text-secondary">Public Library!</span>
      </h1>
    </section>
  )
}
