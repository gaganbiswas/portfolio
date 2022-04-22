import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function WorkCard({ slug, title, imageUrl }: any) {
  return (
    <div className="group relative flex w-full max-w-[672px] flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
        <Image
          src="/static/images/work1.png"
          alt=""
          objectFit="cover"
          layout="fill"
          className="transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-1.5 flex flex-col items-start p-0.5">
        <p className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Project Name
        </p>
        <Link href={`/project/${slug}`}>
          <a className="mt-1 py-1 text-blue-600 underline underline-offset-8 dark:text-blue-400">
            View case study
          </a>
        </Link>
      </div>
    </div>
  )
}

export default WorkCard
