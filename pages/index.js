/** @jsx jsx */
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { jsx } from 'theme-ui'

import Header from '../components/header'
import WorkItem from '../components/home/work-item'
import Container from '../elements/container'
import Wrapper from '../elements/wrapper'

const Home = () => (
  <>
    <Head>
      <title>James Vibar - Web Developer</title>
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </Head>

    <Header />

    <section sx={{ marginBottom: 6 }}>
      <div
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <HeroBgImg
          src="/images/svg/hero-bg.svg"
          sx={{ display: ['none', null, 'block'] }}
        />
        <HeroBgImg src="/images/svg/hero-bg.svg" flip sx={{ right: 0 }} />
      </div>
      <Container>
        <Wrapper>
          <div
            sx={{ textAlign: 'center', pt: [5, 6], maxWidth: 615, mx: 'auto' }}
          >
            <div sx={{ position: 'relative' }}>
              <img
                src="/images/svg/hero-accent.svg"
                sx={{ position: 'absolute', top: '-40%', left: 0 }}
              />
              <h1 sx={{ fontSize: [4, 5], mb: 3, lineHeight: 1.15 }}>
                Kumusta!
                <br /> I'm James.
              </h1>
            </div>
            <div sx={{ fontSize: ['18px', '21px'] }}>
              <p>
                <small>"Kumusta is the proper Filipino word for "Hello".</small>
              </p>
              <p>
                I'm a self-taught web developer based in the Philippines with
                experience in building modern websites and web applications.
              </p>
              <p>
                Learn more <a href="#">about me</a> or jump straight to{' '}
                <a href="#">my work.</a>
              </p>
            </div>
            <img src="/images/svg/hero-scroll.svg" sx={{ mt: 3 }} />
          </div>
        </Wrapper>
      </Container>
    </section>
    
    <section sx={{ mb: 6 }}>
      <Container>
        <Wrapper>
          <div
            sx={{
              position: 'absolute',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%), #FFF9E6',
              height: '1000px',
              top: -32,
              left: -42,
              right: -42,
              zIndex: -1,
            }}
          >
            <img sx={{ position: 'absolute', top: '-32px', right: '-42px' }} src="/images/svg/pink-accent.svg" />
          </div>
          <div sx={{ mt: [6, 7], pt: 4 }}>
            <h2 sx={{ fontSize: 3 }}>Some of my work.</h2>
            <p sx={{ fontSize: ['18px', '21px'], my: 0 }}>
              Projects that I have created or have been part of.
            </p>
          </div>
          <div>
            <WorkItem />
            <WorkItem flip />
            <WorkItem />
          </div>
        </Wrapper>
      </Container>
    </section>
    <section sx={{ mb: 6 }}>
      <Container>
        <Wrapper>
          <div
            sx={{
              position: 'absolute',
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%), #FFF9E6',
              height: '1000px',
              top: -32,
              left: -42,
              right: -42,
              zIndex: -1,
            }}
          >
            <img sx={{ position: 'absolute', top: '-32px', left: '-42px', transform: 'scaleX(-1)' }} src="/images/svg/pink-accent.svg" />
          </div>
          <div sx={{ mt: [6, 7], pt: 4 }}>
            <h2 sx={{ fontSize: 3 }}>My career.</h2>
            <p sx={{ fontSize: ['18px', '21px'], my: 0 }}>
              My web development career.
            </p>
          </div>
        </Wrapper>
      </Container>
    </section>
  </>
)

const HeroBgImg = ({ src, flip, ...rest }) => {
  return (
    <img
      src={src}
      sx={{
        transform: flip ? 'scaleX(-1)' : '',
        display: 'block',
        position: 'absolute',
        maxWidth: ['220px', null, '340px'],
        width: '100%',
      }}
      {...rest}
    />
  )
}

export default Home
