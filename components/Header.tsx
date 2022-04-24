import Link from 'next/link'
import { MoonIcon, SunIcon } from '@heroicons/react/outline'
import MobileMenu from './MobileMenu'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

const NavItem = ({ href, text }: any) => {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden rounded-lg p-1 transition-all hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-3 sm:py-2 md:inline-block'
        )}
      >
        <span className="capsize cursor-pointer">{text}</span>
      </a>
    </Link>
  )
}

function Header() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <header className="flex items-center justify-center">
      <nav className="relative flex w-11/12 max-w-2xl items-center justify-between pt-8 pb-8 text-gray-800 dark:text-gray-200 sm:pb-16">
        <Link href="#skip">
          <a className="sr-only">Skip to content</a>
        </Link>
        <div className="ml-[-0.50rem] mr-4">
          <MobileMenu />
          <NavItem text="Home" href="/" />
          <NavItem text="Blog" href="/blog" />
          <NavItem text="Snippets" href="/snippets" />
        </div>
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 text-gray-800 ring-gray-300 transition-all hover:ring-2 dark:bg-gray-600 dark:text-gray-200"
          aria-label="Toggle Dark Mode"
          type="button"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && resolvedTheme === 'dark' ? (
            <SunIcon className="h-5 w-5" />
          ) : (
            <MoonIcon className="h-5 w-5" />
          )}
        </button>
      </nav>
    </header>
  )
}

export default Header
