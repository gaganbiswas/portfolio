import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'
import { sanityClient } from '../sanity'

export default async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.tsx',
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/404.tsx',
  ])

  const query = `*[_type == "post"] {
              slug {
                current
              },
            }`

  const posts = await sanityClient.fetch(query)

  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page: any) => {
          const path = page.replace('pages', '').replace('.tsx', '')
          const route = path === '/index' ? '' : path
          return `
            <url>
                <loc>${`https://gaganbiswas.com${route}`}</loc>
            </url>
          `
        })
        .join('')}

        ${posts
          .map((post: any) => {
            return `
          <url>
              <loc>${`https://gaganbiswas.com/${post.slug.current}`}</loc>
          </url>
        `
          })
          .join('')}
  </urlset>`

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', formatted)
}
