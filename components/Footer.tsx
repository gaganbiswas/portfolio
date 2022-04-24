import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="flex items-center justify-center">
      <div className="mb-8 flex w-11/12 max-w-2xl flex-col items-start">
        <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
        <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <a className="text-gray-500 transition hover:text-gray-600">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-gray-500 transition hover:text-gray-600">
                About
              </a>
            </Link>
            <a
              className="text-gray-500 transition hover:text-gray-600"
              href="https://drive.google.com/file/d/1wZHkXVyWbJfJRBv9_6n0fJdF9TiYMK_4/view?usp=sharing"
            >
              Resume
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <Link href="/blog">
              <a className="text-gray-500 transition hover:text-gray-600">
                Blog
              </a>
            </Link>
            <Link href="/snippets">
              <a className="text-gray-500 transition hover:text-gray-600">
                Snippets
              </a>
            </Link>
          </div>

          <div className="flex flex-col space-y-4">
            <a
              className="text-gray-500 transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/hiswebworld"
            >
              Twitter
            </a>
            <a
              className="text-gray-500 transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/gaganbiswas"
            >
              GitHub
            </a>
            <a
              className="text-gray-500 transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/the_narcissist_guy/"
            >
              Instagram
            </a>
          </div>
        </div>
        <p className="flex self-center text-center text-sm text-gray-600 dark:text-gray-300">
          Created with ❤ by Gagan Biswas.
        </p>
        <p className="mb-8 mt-2 self-center text-sm text-gray-600 dark:text-gray-300">
          Inspiration:{' '}
          <a
            className="text-blue-500 underline underline-offset-4 hover:text-blue-600"
            href="https://leerob.io"
            rel="noopener noreferrer"
            target="_blank"
          >
            Lee Robinson
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
