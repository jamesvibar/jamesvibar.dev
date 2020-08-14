/** @jsx jsx */
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { jsx } from 'theme-ui'

import Header from '../components/header'
import Container from '../elements/container'
import Wrapper from '../elements/wrapper'
import Button from '../elements/button'
import CareerItem from '../components/home/career-item'
import WorkItem from '../components/home/work-item'

const careerItems = [
  {
    title: 'PAST',
    items: [
      [
        'Redkite PH', 
        'Feb 2019 - April 2019', 'Junior Web Developer'],
      [
        'Cmdigital.studio',
        'Nov 2018 - Jan 2019',
        'Freelance Web Developer',
      ],
    ],
  },
  {
    title: 'PRESENT',
    items: [
      ['Social Space Inc.', 'May 2019 - Present', 'Web Developer'],
      [
        'Thrivehha.com',
        'March 2019 - Present',
        'Freelance Web Developer',
      ],
    ],
  },
  {
    title: 'FUTURE',
    items: [],
  },
]

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
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%), #FFF9E6',
              height: '1000px',
              top: -32,
              left: -42,
              right: -42,
              zIndex: -1,
            }}
          >
            <ContainerAccent
              src="/images/svg/pink-accent.svg"
              sx={{ right: '-42px', top: '-32px' }}
            />
          </div>
          <div sx={{ mt: [6, 7], pt: 4 }}>
            <h2 sx={{ fontSize: 3 }}>Some of my work.</h2>
            <p sx={{ fontSize: ['18px', '21px'], my: 0 }}>
              Projects that I have created or have been part of.
            </p>
          </div>
          <div sx={{ mt: 6 }}>
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
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 50%), #FFF9E6',
              height: '1000px',
              top: -32,
              left: -42,
              right: -42,
              zIndex: -1,
            }}
          >
            <ContainerAccent
              src="/images/svg/pink-accent.svg"
              sx={{ left: '-42px', top: '-32px' }}
              flip
            />
          </div>
          <div sx={{ mt: [6, 7], pt: 4 }}>
            <h2 sx={{ fontSize: 3 }}>My career.</h2>
            <div
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <p sx={{ fontSize: ['18px', '21px'], my: 0 }}>
                My web development career.
              </p>
              <Button
                sx={{ variant: 'button.primary' }}
                href="/projects/preview"
                target="_blank"
              >
                Get My Resume
              </Button>
            </div>
            <div sx={{ mt: 6 }}>
              <div
                sx={{
                  display: 'grid',
                  gap: 16,
                  gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
                }}
              >
                {careerItems.map(({ title, items }, index) => {
                  return (
                    <CareerItem
                      sx={{
                        ml: index === 0 && 0,
                        mr: index === careerItems.length - 1 && 0,
                      }}
                      key={title}
                      title={title}
                      items={items}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </Wrapper>
      </Container>
    </section>
    <section>Hello</section>
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

const ContainerAccent = ({ src, flip, ...rest }) => {
  return (
    <img
      sx={{
        display: ['none', null, 'block'],
        visibility: ['hidden', null, 'visible'],
        position: 'absolute',
        transform: flip && 'scaleX(-1)',
      }}
      src={src}
      {...rest}
    />
  )
}

export default Home
