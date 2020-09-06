/** @jsx jsx */
import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
import { jsx } from 'theme-ui'
import { motion } from 'framer-motion'

import Header from './header'
import Footer from './footer'
import { seo } from '../config/website'

export default function Page({ title, children }) {
  const parsedTitle = title ? `${title} - James Vibar` : 'James Vibar'
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{parsedTitle}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:url" content={`https://jamesvibar.dev${router.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={parsedTitle} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content="/images/ogimage.jpg" />
      </Head>

      <a
        href="https://github.com/jamesvibar/jamesvibar.dev"
        target="_blank"
        sx={{
          backgroundColor: 'secondary',
          position: 'relative',
          zIndex: 999,
          color: 'heading',
          fontSize: ['13px', '16px'],
          textAlign: 'center',
          py: 2,
          display: 'block',
          textDecoration: 'none'
        }}
      >
        Want to see under the hood? This website is open source!
      </a>

      <Header />
      <motion.div exit={{ opacity: 0, transition: { duration: 0.7 } }}>
        {children}
      </motion.div>
      <Footer />
    </>
  )
}
