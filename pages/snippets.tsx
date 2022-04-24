import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import Layout from '../components/Layout'
import SnippetCard from '../components/SnippetCard'
import { sanityClient } from '../sanity'

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
  snippets: [Snippet]
}

const Snippets: NextPage<Props> = ({ snippets }) => {
  return (
    <Layout>
      <div className="mb-16 flex max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          Code Snippets
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          These are a collection of code snippets I've used in the past and
          saved. Some are Serverless Functions, which include set up
          instructions. Others are anything from random CSS snippets to Node.js
          scripts.
        </p>
        <div className="my-2 mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {snippets.map((snippet) => (
            <SnippetCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug.current}
              logo={snippet.logo}
              description={snippet.summary}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Snippets

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type == "snippets"] {
      _id,
      title,
      summary,
      logo,
      slug {
        current
      },
    }`

  const snippets = await sanityClient.fetch(query)

  return {
    props: { snippets },
  }
}
