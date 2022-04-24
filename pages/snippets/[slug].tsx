import { NextPage } from 'next'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'
import { sanityClient } from '../../sanity'

type Props = {
  snippet: {
    body: string
    publishedAt: string
    title: string
    summary: string
  }
  mdxSource: MDXRemoteSerializeResult
}

const Snippet: NextPage<Props> = ({ snippet, mdxSource }) => {
  return <div>Snippet</div>
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
