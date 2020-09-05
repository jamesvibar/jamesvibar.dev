/** @jsx jsx */
import Head from 'next/head'
import React from 'react'
import { jsx } from 'theme-ui'

import Header from './header'
import Footer from './footer'
import { motion } from 'framer-motion'

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - James Vibar` : 'James Vibar'}</title>
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
