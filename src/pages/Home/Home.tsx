import Welcome from '@/components/Welcome/Welcome'
import Intro from '@/components/Intro/Intro'
import HomeList from '@/components/HomeList/HomeList'
import NewsLetter from '@/components/NewsLetter/NewsLetter'

export default function Home() {
  return (
    <>
      <Welcome />
      <Intro />
      <HomeList />
      <NewsLetter />
    </>
  )
}
