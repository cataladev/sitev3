'use client'

import Head from 'next/head'

export default function Metadata({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  )
}