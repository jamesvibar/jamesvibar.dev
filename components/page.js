import Head from 'next/head'
import React from 'react'

import Header from './header'
import Footer from './footer'
import { motion } from 'framer-motion'

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - James Vibar` : 'James Vibar'}</title>
      </Head>

      <Header />
      <motion.div exit={{ opacity: 0, transition: { duration: 0.7 } }}>
        {children}
      </motion.div>
      <Footer />
    </>
  )
}
