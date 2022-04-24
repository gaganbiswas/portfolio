import Link from 'next/link'
import React from 'react'

type Post = {
  title: string
  summary: string
  slug: {
    current: string
  }
}

const BlogPost = ({ title, summary, slug }: Post) => {
  return (
    <Link href={`/blog/${slug.current}`}>
      <a className="mb-8 flex w-full">
        <div className="w-full">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="mb-2 w-full cursor-pointer text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">
              {title}
            </h4>
          </div>
          <p className="cursor-pointer text-gray-600 dark:text-gray-400">
            {summary}
          </p>
        </div>
      </a>
    </Link>
  )
}

export default BlogPost
