import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className="mb-16 flex flex-col-reverse items-start sm:flex-row">
      <div className="flex flex-col pr-8">
        <h1 className="mb-1 text-3xl font-bold tracking-tight text-black dark:text-white md:mb-3 md:text-5xl">
          Gagan Biswas
        </h1>
        <h2 className="mb-4 text-gray-700 dark:text-gray-200">
          Chief Operations Officer at{' '}
          <a className="font-semibold underline underline-offset-4">
            Skill Academia
          </a>
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Developing websites that not only looks good but are also functional.
          Simplifying the web for everyone.
        </p>
      </div>

      <div className="relative mb-8 mr-auto w-[80px] sm:mb-0 sm:w-[176px]">
        <Image
          src="/static/images/Avatar.jpg"
          height={176}
          width={176}
          alt="Gagan Biswas"
          objectFit="cover"
          className="rounded-full grayscale filter"
        />
      </div>
    </div>
  )
}

export default Hero
