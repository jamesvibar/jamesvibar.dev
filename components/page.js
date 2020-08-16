import Head from 'next/head'
import React from 'react'

import Header from './header'
import Footer from './footer'

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - James Vibar` : 'James Vibar'}</title>
      </Head>

      <Header />
      {children}
      <Footer />
    </>
  )
}
