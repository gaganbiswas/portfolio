import { sanityClient } from '../sanity'
import RSS from 'rss'
import { writeFileSync } from 'fs'

export default async function generateRss() {
  const query = `*[_type == "post"] {
    title,
    summary,
    publishedAt,
    slug {
      current
    },
  }`

  const posts = await sanityClient.fetch(query)

  const feed = new RSS({
    title: 'Gagan Biswas',
    site_url: 'https://www.gaganbiswas.com',
    feed_url: 'https://www.gaganbiswas.com/feed.xml',
  })

  posts.map((post: any) => {
    feed.item({
      title: post.title,
      url: `https://www.gaganbiswas.com/blog/${post.slug.current}`,
      date: post.publishedAt,
      description: post.summary,
    })
  })

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}
