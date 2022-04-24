import React, { useState } from 'react'
import { InferGetStaticPropsType, GetStaticProps, NextPage } from 'next'
import Layout from '../components/Layout'
import BlogPost from '../components/BlogPost'
import { sanityClient } from '../sanity'

type Props = {
  posts: InferGetStaticPropsType<typeof getStaticProps>
}

type Post = {
  _id: string
  title: string
  summary: string
  slug: {
    current: string
  }
}

const Blog: NextPage<Props> = ({ posts }) => {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post: Post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <Layout
      title="Blog - Gagan Biswas"
      description="Thoughts on the software industry, programming, technology, music, and my personal life."
    >
      <div className="mb-16 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-6 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Blog
        </h1>
        <div className="relative mb-4 w-full">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        {!searchValue && (
          <>
            <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
              Most Popular
            </h3>
            <BlogPost
              title="5 Best React UI Framework and Component Libraries"
              summary="5 best UI framework and component libraries to use in your next react projects."
              slug={{
                current: '5-best-react-ui-framework-and-component-libraries',
              }}
            />
            <BlogPost
              title="What is Web 3.0?"
              summary="Web 3.0 is built on decentralization and is the next evolution of the World Wide Web."
              slug={{
                current: 'what-is-web3',
              }}
            />
            <BlogPost
              title="The New React Native Architecture"
              summary="React Native is a framework for building native apps using React. Recently it has released a new architecture which boosts up its performance."
              slug={{ current: 'the-new-react-native-architecture' }}
            />
          </>
        )}
        <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
          All Posts
        </h3>
        {!filteredBlogPosts.length && (
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            No posts found.
          </p>
        )}
        {filteredBlogPosts.map((post: Post) => (
          <BlogPost key={post._id} {...post} />
        ))}
      </div>
    </Layout>
  )
}

export default Blog

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    summary,
    slug {
      current
    },
  }`

  const posts = await sanityClient.fetch(query)

  return {
    props: { posts },
  }
}
