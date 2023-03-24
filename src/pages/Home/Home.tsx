import Welcome from '@/components/Welcome/Welcome'
import Intro from '@/components/Intro/Intro'
import HomeList from '@/components/HomeList/HomeList'

export default function Home() {
  return (
    <>
      <Welcome />
      <Intro />
      <HomeList />
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
