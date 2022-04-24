import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { sanityClient } from '../sanity'

type Props = {
  snippets: {
    _id: string
    title: string
    summary: string
    slug: {
      current: string
    }
  }
}

const Snippets: NextPage<Props> = ({ snippets }) => {
  return <div>snippets</div>
}

export default Snippets

export const getStaticProps: GetStaticProps = async () => {
  const query = `*[_type == "snippets"] {
      _id,
      title,
      summary,
      slug {
        current
      },
    }`

  const snippets = await sanityClient.fetch(query)

  return {
    props: { snippets },
  }
}
