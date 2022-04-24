import { ArrowNarrowRightIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import React from 'react'
import SnippetCard from '../SnippetCard'

function Works() {
  return (
    <>
      <h3 className="mb-6 mt-16 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl">
        Snippets
      </h3>
      <div className="flex flex-col items-center gap-8 sm:flex-row">
        <SnippetCard
          logo={'mailchimp.png'}
          title="Mailchimp"
          description=" Subscribe to a newsletter."
          slug="mailchimp"
        />
        <SnippetCard
          logo={'nextjs.png'}
          title="Razorpay Integration"
          description="Accept a payment"
          slug="razorpay-integration"
        />
      </div>
      <Link href="/works">
        <a className="mt-8 flex h-6 rounded-lg leading-7 text-gray-600 transition-all hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
          View all snippets
          <ArrowNarrowRightIcon className="ml-1.5 mt-[3px] h-6 w-6 text-inherit" />
        </a>
      </Link>
    </>
  )
}

export default Works
