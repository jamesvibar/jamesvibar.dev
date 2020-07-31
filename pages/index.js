/** @jsx jsx */
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { jsx } from 'theme-ui'

import Header from '../components/header'

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </Head>

    <Header />
      

  </>
)

export default Home
