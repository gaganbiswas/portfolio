import type { GetStaticProps, NextPage } from 'next'
import Contact from '../components/home/Contact'
import Hero from '../components/home/Hero'
import Posts from '../components/home/Posts'
import Snippets from '../components/home/Snippets'
import Layout from '../components/Layout'
import { sanityClient } from '../sanity'
import generateRss from '../scripts/generate-rss'
import generateSitemap from '../scripts/generate-sitemap'

type PostType = {
  _id: string
  title: string
  slug: {
    current: string
  }
  body: string
}

type Snippet = {
  _id: string
  title: string
  summary: string
  logo: string
  slug: {
    current: string
  }
}

type Props = {
  posts: PostType[]
  snippets: Snippet[]
}

const Home: NextPage<Props> = ({ posts, snippets }) => {
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} />
      <Snippets snippets={snippets} />
      <Contact />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  generateRss()
  generateSitemap()

  const postsQuery = `*[_type == "post"][0..2] {
    _id,
    title,
    body,
    slug {
      current
    },
  }`

  const snippetsQuery = `*[_type == "snippets"][0..1] {
    _id,
    title,
    summary,
    logo,
    slug {
      current
    },
  }`

  const posts = await sanityClient.fetch(postsQuery)
  const snippets = await sanityClient.fetch(snippetsQuery)

  return {
    props: { posts, snippets },
    revalidate: 900,
  }
}
