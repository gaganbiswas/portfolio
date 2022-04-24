import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({ children, customMeta }: any) {
  const router = useRouter()
  const meta = {
    title: 'Gagan Biswas - Developer, designer, blogger.',
    description: `Front-end developer, Visual and Interaction Designer, blogger.`,
    image: 'https://gaganbiswas.com/static/images/banner.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://gaganbiswas.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://gaganbiswas.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Gagan Biswas" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hiswebworld" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>

      <Header />
      <main className="flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="flex w-11/12 max-w-2xl flex-col">{children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
