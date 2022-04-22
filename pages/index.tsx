import type { NextPage } from 'next'
import Contact from '../components/home/Contact'
import Hero from '../components/home/Hero'
import Posts from '../components/home/Posts'
import Works from '../components/home/Works'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Works />
      <Posts />
      <Contact />
    </Layout>
  )
}

export default Home
