import { Link } from 'react-router-dom'
import books from '@/data/books.json'
import Welcome from '@/components/Welcome/Welcome'
import Intro from '@/components/Intro/Intro'

export default function Home() {
  return (
    <>
      <Welcome />
      <Intro />
      <section>
        <div className="section-wrapper">
          <h2 className="text-2xl text-center uppercase text-primary">BOOKS, MAGAZINES & MOVIES</h2>
          <h3 className="text-xl italic text-center text-secondary">
            Available to download and stream
          </h3>
          <div className="grid grid-cols-4 gap-8 mt-8">
            {books.slice(0, 4).map((book) => (
              <div key={book._id}>
                <Link to={`book/${book._id}`} className="block px-4">
                  <img
                    src={book.picture}
                    alt={book.title}
                    width={200}
                    height={300}
                    className="w-full"
                  />
                </Link>
                <h4 className="mt-4 text-xl font-bold text-center capitalize">
                  <Link to={`book/${book._id}`}>{book.title}</Link>
                </h4>
                <h4 className="italic text-center">
                  <Link className="capitalize text-secondary" to="/">
                    Author
                  </Link>
                </h4>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link to="/" className="button button-outlined">
              See more
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between section-wrapper">
          <div>
            <h2 className="text-5xl text-primary">
              Sign up
              <span className="block mt-3 text-3xl italic uppercase text-secondary">
                For our newsletter
              </span>
            </h2>
          </div>
          <form className="flex gap-4">
            <input type="text" placeholder="Full name" className="self-start w-full input-large" />
            <input type="text" placeholder="Email" className="self-start w-full input-large" />
            <button type="submit" className="button button-large button-filled ">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
