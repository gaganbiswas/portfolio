import { NextPage } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import Image from 'next/image'
import React from 'react'
import Layout from '../../components/Layout'
import MDXComponents from '../../components/MDXComponents'
import { sanityClient } from '../../sanity'

type Props = {
  snippet: {
    body: string
    publishedAt: string
    title: string
    summary: string
    logo: string
  }
  mdxSource: MDXRemoteSerializeResult
}

const Snippet: NextPage<Props> = ({ snippet, mdxSource }) => {
  return (
    <Layout
      title={`${snippet.title} - Code Snippet`}
      description="A collection of code snippets - including serverless functions, Node.js scripts, and CSS tricks."
    >
      <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <div className="mb-8 flex w-full justify-between">
          <div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
              {snippet.title}
            </h1>
            <p className="text-gray-700 dark:text-gray-300">
              {snippet.summary}
            </p>
          </div>
          <div className="mt-2 sm:mt-0">
            <Image
              alt={snippet.title}
              height={48}
              width={48}
              src={`/logos/${snippet.logo}`}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="prose w-full dark:prose-dark">
          <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
        </div>
      </article>
    </Layout>
  )
}

export default Snippet

export const getStaticPaths = async () => {
  const query = `
      *[_type == "snippets"] {
          slug {
              current
          }
      }`

  const snippets = await sanityClient.fetch(query)

  const paths = snippets.map((snippet: { slug: { current: string } }) => ({
    params: {
      slug: snippet.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const query = `*[_type == "snippets" && slug.current == $slug][0] {
        publishedAt,
        title,
        summary,
        body,
    }`

  const snippet = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!snippet) {
    return {
      notFound: true,
    }
  }

  const mdxSource = await serialize(snippet.body)

  return {
    props: {
      snippet,
      mdxSource,
    },
  }
}
