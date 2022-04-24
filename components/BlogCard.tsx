import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

function BlogCard({ title, slug, gradient, readTime }: any) {
  return (
    <Link href={`/blog/${slug}`}>
      <a
        className={classNames(
          'transform transition-all hover:scale-[1.01]',
          'w-full rounded-xl bg-gradient-to-r p-1 md:w-1/3',
          gradient
        )}
      >
        <div className="flex h-full flex-col justify-between rounded-lg bg-white p-4 dark:bg-gray-900">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="mb-6 w-full cursor-pointer text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100 sm:mb-10 md:text-lg">
              {title}
            </h4>
          </div>
          <div className="capsize flex items-center text-gray-800 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="capsize ml-2 cursor-pointer align-baseline">
              {readTime}
            </span>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default BlogCard
