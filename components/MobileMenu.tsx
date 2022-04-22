import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useDelayedRender from 'use-delayed-render'
import cn from 'classnames'

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300,
    }
  )

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
    } else {
      setIsMenuOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <button
        className={cn('burger', 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={cn(
            'menu',
            'absolute flex flex-col bg-gray-100 dark:bg-gray-900',
            isMenuRendered && 'menuRendered'
          )}
        >
          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: '150ms' }}
          >
            <Link href="/">
              <a className="flex w-auto pb-4">Home</a>
            </Link>
          </li>

          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: '250ms' }}
          >
            <Link href="/blog">
              <a className="flex w-auto pb-4">Blog</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: '275ms' }}
          >
            <Link href="/snippets">
              <a className="flex w-auto pb-4">Snippets</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: '300ms' }}
          >
            <Link href="/newsletter">
              <a className="flex w-auto pb-4">Newsletter</a>
            </Link>
          </li>
          <li
            className="border-b border-gray-300 text-sm font-semibold text-gray-900 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: '325ms' }}
          >
            <Link href="/tweets">
              <a className="flex w-auto pb-4">Tweets</a>
            </Link>
          </li>
        </ul>
      )}
    </>
  )
}

const MenuIcon = (props: JSX.IntrinsicElements['svg']) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute h-6 w-6 text-gray-800 dark:text-gray-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    shapeRendering="geometricPrecision"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
  </svg>
)

const CrossIcon = (props: JSX.IntrinsicElements['svg']) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="absolute h-6 w-6 text-gray-800 dark:text-gray-200"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    shapeRendering="geometricPrecision"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
)

export default MobileMenu
