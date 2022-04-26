import Layout from '../../components/Layout'
import { sanityClient, urlFor } from '../../sanity'
import Image from 'next/image'
import { parseISO, format } from 'date-fns'
import MDXComponents from '../../components/MDXComponents'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import readingTime from 'reading-time'
import { NextPage } from 'next'

type Props = {
  post: {
    body: string
    publishedAt: string
    title: string
    summary: string
    mainImage: string
    estimatedReadingTime: number
  }
  mdxSource: MDXRemoteSerializeResult
}

const Post: NextPage<Props> = ({ post, mdxSource }) => {
  const time = readingTime(post.body).text

  return (
    <Layout
      customMeta={{
        title: `${post.title} - Gagan Biswas`,
        description: post.summary,
        image: `https://gaganbiswas.com${urlFor(post.mainImage).url()}`,
        date: new Date(post.publishedAt).toISOString(),
        type: 'article',
      }}
    >
      <article className="mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          {post.title}
        </h1>
        <div className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt="Gagan Biswas"
              height={24}
              width={24}
              src="/static/images/Avatar.jpg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {'Gagan Biswas / '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
            {time}
          </p>
        </div>
        <div className="prose mt-4 w-full max-w-none dark:prose-dark">
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              layout="fill"
              className="rounded-lg"
              priority
            />
          </div>
          <MDXRemote {...mdxSource} components={{ ...MDXComponents }} />
        </div>
      </article>
    </Layout>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = `
    *[_type == "post"] {
        slug {
            current
        }
    }`

  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: { slug: { current: string } }) => ({
    params: {
      slug: post.slug.current,
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
  const query = `*[_type == "post" && slug.current == $slug][0] {
      publishedAt,
      title,
      summary,
      mainImage,
      body,
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
  }`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  })

  if (!post) {
    return {
      notFound: true,
    }
  }

  const mdxSource = await serialize(post.body)

  return {
    props: {
      post,
      mdxSource,
    },
    revalidate: 900,
  }
}
