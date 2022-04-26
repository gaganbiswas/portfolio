import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

const About: NextPage = () => {
  return (
    <Layout customMeta={{ title: 'About - Gagan Biswas' }}>
      <div className="mb-16 flex w-full flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">
          About Me
        </h1>
        <div className="prose mb-8 leading-6 dark:prose-dark">
          <h2 className="mt-8 mb-5 text-2xl font-bold text-gray-800 dark:text-white">
            Links
          </h2>
          <ul className="list-inside list-disc pl-3 text-gray-600 dark:text-gray-200">
            <li className="my-2 text-gray-600 dark:text-gray-200">
              Twitter:{' '}
              <a
                href="https://twitter.com/gaganbiswas"
                className="text-blue-400 underline hover:text-blue-600"
                rel="noreferrer noopener"
                target="_blank"
              >
                @hiswebworld
              </a>
            </li>
            <li className="my-2 text-gray-600 dark:text-gray-200">
              GitHub:{' '}
              <a
                href="https://github.com/gaganbiswas"
                className="text-blue-400 underline hover:text-blue-600"
                rel="noreferrer noopener"
                target="_blank"
              >
                @gaganbiswas
              </a>
            </li>
            <li className="my-2 text-gray-600 dark:text-gray-200">
              Website:{' '}
              <Link href="https://gaganbiswas.com">
                <a className="text-blue-400 underline hover:text-blue-600">
                  https://gaganbiswas.com
                </a>
              </Link>
            </li>
            <li className="my-2 text-gray-600 dark:text-gray-200">
              LinkedIn:{' '}
              <a
                href="https://www.linkedin.com/in/gaganbiswas/"
                className="text-blue-400 underline hover:text-blue-600"
                rel="noreferrer noopener"
                target="_blank"
              >
                https://www.linkedin.com/in/gaganbiswas
              </a>
            </li>
          </ul>
          <h2 className="mt-14 mb-5 text-2xl font-bold text-gray-800 dark:text-white">
            Bio
          </h2>
          <h3 className="mt-7 mb-2.5 text-xl font-semibold text-gray-800 dark:text-gray-100">
            Job Title
          </h3>
          <p className="mb-5 text-gray-600 dark:text-gray-200">
            Gagan Biswas, Chief Operation Officer at{' '}
            <a
              className="cursor-pointer text-blue-400 underline transition-colors duration-200 hover:text-blue-600"
              href="https://www.skillacademia.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              Skill Academia.
            </a>
          </p>
          <h3 className="mt-7 mb-2.5 text-xl font-semibold text-gray-800 dark:text-gray-100">
            Long, 3rd Person
          </h3>
          <p className="mb-5 text-gray-600 dark:text-gray-200">
            Gagan Biswas is the Chief Operation Officer at{' '}
            <a
              href="https://www.skillacademia.com"
              rel="noreferrer noopener"
              target="_blank"
              className="text-blue-400 underline transition-colors duration-200 hover:text-blue-600"
            >
              Skill Academia
            </a>
            , where he is incharge of managing different teams and ensure smooth
            communication between all of them. He also works as a mentor for the
            developing team of Skill Academia and is responsible for the
            development of the website of Skill Academia. As a hobby, he writes
            blogs and code snippets which might help others in their web
            journey.
          </p>
          <h3 className="mt-7 mb-2.5 text-xl font-semibold text-gray-800 dark:text-gray-100">
            Education
          </h3>
          <p className="mb-5 text-gray-600 dark:text-gray-200">
            Gagan Biswas graduated from Techno Main Salt Lake with a Bachelors
            in Computer Application. Currently, he is pursuing Masters in
            Computer Application from Netaji Subhas Engineering College.
          </p>

          <h2 className="mt-14 mb-5 text-2xl font-bold text-gray-800 dark:text-white">
            Headshots
          </h2>
          <div className="mt-7 flex flex-col gap-8 md:flex-row">
            <div className="relative aspect-[4/3] w-full md:w-1/2">
              <Image
                src="/static/images/Avatar.jpg"
                alt="Gagan Biswas"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="relative aspect-[4/3] w-full md:w-1/2">
              <Image
                src="/static/images/Avatar.jpg"
                alt="Gagan Biswas"
                className="grayscale filter"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
