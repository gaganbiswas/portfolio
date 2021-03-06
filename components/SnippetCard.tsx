import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SnippetCard({ title, description, logo, slug, ...rest }: any) {
  return (
    <Link href={`/snippets/${slug}`}>
      <a
        className="border-grey-200 w-full rounded border bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
        {...rest}
      >
        <Image
          alt={title}
          height={32}
          width={32}
          src={`/logos/${logo}`}
          className="cursor-pointer rounded-full"
        />
        <h3 className="mt-2 cursor-pointer text-left text-lg font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-1 cursor-pointer text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </a>
    </Link>
  )
}

export default SnippetCard
