import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'
import BlogCard from '../BlogCard'
import readingTime from 'reading-time/lib/reading-time'

type PostType = {
  _id: string
  title: string
  slug: {
    current: string
  }
  body: string
}

type PostsType = {
  posts: PostType[]
}

const gradient = [
  'from-[#D8B4FE] to-[#818CF8]',
  'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]',
  'from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]',
]

function Posts({ posts }: PostsType) {
  return (
    <>
      <h3 className="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
        Featured Posts
      </h3>
      <div className="flex flex-col gap-6 md:flex-row">
        {posts.map((post, index) => (
          <BlogCard
            key={post._id + index}
            title={post.title}
            slug={post.slug.current}
            gradient={gradient[index]}
            readTime={readingTime(post.body).text}
          />
        ))}
      </div>
      <Link href="/blog">
        <a className="mt-8 flex h-6 rounded-lg leading-7 text-gray-600 transition-all hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
          Read all posts
          <ArrowNarrowRightIcon className="ml-1.5 mt-[3px] h-6 w-6 text-inherit" />
        </a>
      </Link>
    </>
  )
}

export default Posts
