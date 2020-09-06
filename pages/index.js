/** @jsx jsx */
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { jsx } from 'theme-ui'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Element, Link as ScrollLink } from 'react-scroll'

import Container from '../elements/container'
import Wrapper from '../elements/wrapper'
import Button from '../elements/button'
import Page from '../components/page'
import CareerItem from '../components/home/career-item'
import WorkItem from '../components/home/work-item'
import { IntersectionObserver } from '../components/intersection-observer'
import { getAllProjects } from '../lib/api'
import { fadeIn, fadeInUp, staggerFadeInUp } from '../animations'

const careerItems = [
  {
    title: 'PAST',
    items: [
      ['Redkite PH', 'Feb 2019 - April 2019', 'Junior Web Developer'],
      ['Cmdigital.studio', 'Nov 2018 - Jan 2019', 'Freelance Web Developer'],
    ],
  },
  {
    title: 'PRESENT',
    items: [
      ['Social Space Inc.', 'May 2019 - Present', 'Web Developer'],
      ['Thrivehha.com', 'March 2019 - Present', 'Freelance Web Developer'],
    ],
  },
  {
    title: 'FUTURE',
    items: [],
  },
]

const Home = ({ projects }) => {
  return (
    <Page title="Home">
      <section sx={{ marginBottom: 6 }}>
        <motion.div
          variants={fadeIn}
          animate="visible"
          initial="hidden"
          transition={{ delay: 0.7 }}
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
        </motion.div>
        <Container>
          <Wrapper>
            <motion.div
              sx={{
                textAlign: 'center',
                pt: [5, 6],
                maxWidth: 615,
                mx: 'auto',
              }}
              initial="hidden"
              animate="visible"
              variants={staggerFadeInUp}
            >
              <div sx={{ position: 'relative' }}>
                <motion.img
                  src="/images/svg/hero-accent.svg"
                  sx={{ position: 'absolute', top: '-40%', left: 0 }}
                  animate={{ translateY: 0, translateX: 0, opacity: 1 }}
                  initial={{ translateY: -36, translateX: -36, opacity: 0 }}
                />
                <h1 sx={{ fontSize: [4, 5], mb: 3, lineHeight: 1.15 }}>
                  <motion.span
                    style={{ display: 'inline-block' }}
                    variants={fadeInUp}
                  >
                    Kumusta!
                  </motion.span>
                  <br />
                  <motion.span
                    style={{ display: 'inline-block' }}
                    variants={fadeInUp}
                  >
                    I'm James.
                  </motion.span>
                </h1>
              </div>
              <div sx={{ fontSize: ['18px', '21px'] }}>
                <motion.p variants={fadeInUp}>
                  <small>
                    "Kumusta is the proper Filipino word for "Hello".
                  </small>
                </motion.p>
                <motion.p variants={fadeInUp}>
                  I'm a self-taught web developer based in the Philippines with
                  experience in building modern websites and web applications.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Learn more{' '}
                  <Link href="/about-me">
                    <a>about me</a>
                  </Link>{' '}
                  or jump straight to{' '}
                  <ScrollLink
                    to="projects"
                    smooth={true}
                    sx={{ textDecoration: 'underline', cursor: 'pointer' }}
                  >
                    my work
                  </ScrollLink>
                  .
                </motion.p>
                <motion.img
                  variants={fadeInUp}
                  src="/images/svg/hero-scroll.svg"
                  sx={{ mt: 3 }}
                />
              </div>
            </motion.div>
          </Wrapper>
        </Container>
      </section>

      <Element name="projects">
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
              <IntersectionObserver options={{ triggerOnce: true }}>
                {({ inView }) => (
                  <motion.div
                    sx={{ mt: [6, 7], pt: 4 }}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={staggerFadeInUp}
                  >
                    <motion.h2 sx={{ fontSize: 3 }} variants={fadeInUp}>
                      Some of my work.
                    </motion.h2>
                    <motion.p
                      sx={{ fontSize: ['18px', '21px'], my: 0 }}
                      variants={fadeInUp}
                    >
                      Projects that I have created or have been part of.
                    </motion.p>
                  </motion.div>
                )}
              </IntersectionObserver>
              <div sx={{ mt: 6 }}>
                {projects.map((project, index) => (
                  <WorkItem
                    key={project.title}
                    flip={index % 2}
                    project={project}
                  />
                ))}
              </div>
            </Wrapper>
          </Container>
        </section>
      </Element>
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
              <IntersectionObserver options={{ triggerOnce: true }}>
                {({ inView }) => (
                  <motion.div
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={staggerFadeInUp}
                  >
                    <motion.h2 sx={{ fontSize: 3 }} variants={fadeInUp}>
                      My career.
                    </motion.h2>
                    <div
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: ['column', 'row'],
                        alignItems: ['flex-start', 'center'],
                      }}
                    >
                      <motion.p
                        sx={{ fontSize: ['18px', '21px'], my: 0 }}
                        variants={fadeInUp}
                      >
                        My web development career.
                      </motion.p>
                      <motion.div variants={fadeIn}>
                        <Button
                          sx={{ variant: 'button.primary' }}
                          href="/jamesvibar-resume.pdf"
                          target="_blank"
                        >
                          Get My Resume
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </IntersectionObserver>
            </div>
            <div sx={{ mt: 6 }}>
              <IntersectionObserver options={{ triggerOnce: true }}>
                {({ inView }) => (
                  <motion.div
                    variants={staggerFadeInUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
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
                  </motion.div>
                )}
              </IntersectionObserver>
            </div>
          </Wrapper>
        </Container>
      </section>

      <section
        sx={{
          backgroundColor: '#FFFAEE',
          background:
            'linear-gradient(180deg, rgba(255, 213, 82, 0.1) 0%, rgba(243, 61, 214, 0.13) 100%)',
        }}
      >
        <Container>
          <Wrapper>
            <IntersectionObserver options={{ triggerOnce: true }}>
              {({ inView }) => (
                <motion.div
                  variants={staggerFadeInUp}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  sx={{
                    textAlign: 'center',
                    py: [6, null, 7],
                    maxWidth: '600px',
                    mx: 'auto',
                  }}
                >
                  <motion.strong
                    variants={fadeInUp}
                    sx={{ color: 'primary', letterSpacing: 2 }}
                  >
                    WHAT'S NEXT?
                  </motion.strong>
                  <motion.h2
                    variants={fadeInUp}
                    sx={{ fontSize: [3, null, 4], mt: 3, mb: 4 }}
                  >
                    Let's work together!
                  </motion.h2>
                  <motion.p
                    variants={fadeInUp}
                    sx={{ fontSize: ['18px', '21px'], mb: 4 }}
                  >
                    Think I might be helpful to your project? Take a minute and
                    drop me a message to my email, I’d love to hear about it.
                  </motion.p>
                  <motion.a
                    variants={fadeInUp}
                    href="mailto:hello@jamesvibar.dev"
                    sx={{ fontSize: ['18px', '21px'] }}
                  >
                    hello@jamesvibar.dev
                  </motion.a>
                </motion.div>
              )}
            </IntersectionObserver>
          </Wrapper>
        </Container>
      </section>
    </Page>
  )
}

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

export async function getStaticProps() {
  const projects = getAllProjects({
    fields: [
      'slug',
      'description',
      'date',
      'comingSoon',
      'websiteLink',
      'thumbnail',
      'title',
      'stack',
    ],
  })

  return {
    props: {
      projects,
    },
  }
}

export default Home
