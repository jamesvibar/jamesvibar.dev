/** @jsx jsx */
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { jsx } from 'theme-ui'
import Logo from '../components/header'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </Head>

    <div>
      <Logo />
      <h1>I create modern websites for companies and for you</h1>
      <p>
        There will be something awesome coming here... soon!
      </p>
    </div>
  </div>
)

export default Home
