/** @jsx jsx */
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { jsx } from 'theme-ui'

import Header from '../components/header'
import Container from '../elements/container'
import Wrapper from '../elements/wrapper'

const Home = () => (
  <>
    <Head>
      <title>James Vibar - Web Developer</title>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </Head>

    <Header />

    <section sx={{ marginBottom: 6}}>
      <div sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <HeroBgImg src="/images/svg/hero-bg.svg" sx={{ display: ['none', null, 'block']}}/>
        <HeroBgImg src="/images/svg/hero-bg.svg" flip sx={{ right: 0 }} />
      </div>
      <Container>
        <Wrapper>
          <div
            sx={{ textAlign: 'center', pt: [5, 6], maxWidth: 615, mx: 'auto' }}
          >
            <div sx={{ position: 'relative'}}>
              <img src="/images/svg/hero-accent.svg" sx={{ position: 'absolute', top: '-40%', left: 0 }}/>
              <h1 sx={{ fontSize: [4, 5], mb: 3, lineHeight: 1.15 }}>
                Kumusta!
                <br /> I'm James.
              </h1>
            </div>
            <p>
              <small>"Kumusta is the proper Filipino word for "Hello".</small>
            </p>
            <p>
              I'm a self-taught web developer based in the Philippines with
              experience in building modern websites and web applications.
            </p>
            <p>Learn more <a href="#">about me</a> or jump straight to <a href="#">my work.</a></p>
            <img src="/images/svg/hero-scroll.svg" sx={{ mt: 3 }}/>
          </div>
        </Wrapper>
      </Container>
    </section>

    <div sx={{ height: '1000px'}}>
      Hello world
    </div>
  </>
)

const HeroBgImg = ({ src, flip, ...rest}) => {
  return (
    <img src={src} sx={{ transform: flip ? 'scaleX(-1)' : '', display: 'block', position: 'absolute', maxWidth: ['220px', null,'340px'], width: '100%'}} {...rest} />
  )
}

export default Home
