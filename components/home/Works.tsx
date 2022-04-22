import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'
import WorkCard from '../WorkCard'

function Works() {
  return (
    <>
      <h3 className="mb-3 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
        Featured Works
      </h3>
      <p className="mb-6 text-gray-600 dark:text-gray-400">
        Some of my works that I enjoyed developing and helped me progress.
      </p>
      <div className="flex flex-col items-center gap-8 sm:flex-row">
        <WorkCard />
        <WorkCard />
      </div>
      <Link href="/works">
        <a className="mt-8 flex h-6 rounded-lg leading-7 text-gray-600 transition-all hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
          View all works
          <ArrowNarrowRightIcon className="ml-1.5 mt-[3px] h-6 w-6 text-inherit" />
        </a>
      </Link>
    </>
  )
}

export default Works
