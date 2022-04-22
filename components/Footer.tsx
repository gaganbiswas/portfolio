import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="flex items-center justify-center">
      <div className="mb-8 flex w-11/12 max-w-2xl flex-col items-start">
        <hr className="border-1 mb-8 w-full border-gray-200 dark:border-gray-800" />
        <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <a
              className="text-gray-500 transition hover:text-gray-600"
              href="/"
            >
              Home
            </a>
            <a
              className="text-gray-500 transition hover:text-gray-600"
              href="/about"
            >
              About
            </a>
            <a
              className="text-gray-500 transition hover:text-gray-600"
              href="#"
            >
              Resume
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <a
              className="text-gray-500 transition hover:text-gray-600"
              href="/blog"
            >
              Blog
            </a>
            <a
              className="text-gray-500 transition hover:text-gray-600"
              href="/snippets"
            >
              Snippets
            </a>
            <a
              className="text-gray-500 transition hover:text-gray-600"
              href="/tweets"
            >
              Tweets
            </a>
          </div>

          <div className="flex flex-col space-y-4">
            <a
              className="text-gray-500 transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              Twitter
            </a>
            <a
              className="text-gray-500 transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              GitHub
            </a>
            <a
              className="text-gray-500 transition hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              Instagram
            </a>
          </div>
        </div>
        <p className="flex self-center text-center text-sm text-gray-600 dark:text-gray-300">
          Created with ❤ by Gagan Biswas.
        </p>
        <p className="mb-8 mt-2 self-center text-sm text-blue-500">
          Inspiration:{' '}
          <a
            className="text-blue-500 underline underline-offset-4"
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
