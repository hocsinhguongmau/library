import Banner from '@/components/Banner'
import Event from '@/components/Event'
import { Link } from 'react-router-dom'
import { ImLocation } from 'react-icons/im'
import { AiFillIdcard, AiFillSchedule } from 'react-icons/ai'
import books from '@/data/books.json'

export default function Home() {
  return (
    <>
      <section>
        <div className="section-wrapper">
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
          <div className="grid grid-cols-12 gap-4 mt-8 ">
            <div className="col-span-7">
              <Banner />
            </div>
            <div className="col-span-5">
              <Event />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-wrapper">
          <div className="flex justify-center gap-4">
            <div>
              <h2 className="text-2xl text-primary">
                Public Library <br />
                <span className="text-secondary">EDUCATES, ENTERTAINS, & EMPOWERS</span>
                <br /> Our community.
              </h2>
              <p className="mt-4 text-xl">
                We offer a range of traditional and innovative library resources - physical and
                downloadable books and audiobooks, computers, WiFi, meeting rooms, databases,
                research tools, storytimes, and tutoring - plus bike repair stations, a makerspace,
                museum passes, and a variety of classes.
              </p>
            </div>
            <img
              src="/assets/images/map.png"
              alt="Locations"
              width={447}
              height={280}
              className="shrink-0 grow-0"
            />
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Link to="/" className="button button-filled button-large">
              <ImLocation /> Find your branch
            </Link>
            <Link to="/" className="button button-filled button-large">
              <AiFillIdcard /> Get a card
            </Link>
            <Link to="/" className="button button-filled button-large">
              <AiFillSchedule /> See our event
            </Link>
          </div>
        </div>
      </section>
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
