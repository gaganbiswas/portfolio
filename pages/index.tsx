import type { NextPage } from 'next'
import Contact from '../components/home/Contact'
import Hero from '../components/home/Hero'
import Posts from '../components/home/Posts'
import Snippets from '../components/home/Snippets'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Posts />
      <Snippets />
      <Contact />
    </Layout>
  )
}

export default Home
