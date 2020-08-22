/** @jsx jsx */
import React from 'react'
import { motion } from 'framer-motion'
import { jsx } from 'theme-ui'

import Wrapper from '../elements/wrapper'
import Container from '../elements/container'
import SkillItem from '../components/about-me/skill-item'
import Page from '../components/page'
import { fadeInUp, staggerFadeInUp } from '../animations'
import { IntersectionObserver } from '../components/intersection-observer'

const skills = [
  {
    icon: '/images/svg/ghost.svg',
    title: 'Ghost',
  },
  {
    icon: '/images/svg/nodejs.svg',
    title: 'Node.JS',
  },
  {
    icon: '/images/svg/wordpress.svg',
    title: 'WordPress',
  },
  {
    icon: '/images/svg/contentful.svg',
    title: 'Contentful',
  },
  {
    icon: '/images/svg/sanity.svg',
    title: 'Sanity',
  },
  {
    icon: '/images/svg/gatsby.svg',
    title: 'Gatsby.JS',
  },
  {
    icon: '/images/svg/reactjs.svg',
    title: 'React.JS',
  },
  {
    icon: '/images/svg/nextjs.svg',
    title: 'Next.JS',
  },
]

export default function AboutMe() {
  return (
    <Page title="About Me">
      <section sx={{ mb: 6 }}>
        <Container>
          <Wrapper>
            <motion.div
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
              animate={{ translateY: 0, opacity: 1 }}
              initial={{ translateY: 60, opacity: 0}}
            >
              <ContainerAccent
                src="/images/svg/pink-accent.svg"
                sx={{ left: '-42px', top: '-32px' }}
                flip
              />
            </motion.div>
            <div sx={{ mt: 6, pt: 4 }}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerFadeInUp}
                sx={{ textAlign: 'center' }}
              >
                <motion.h2 sx={{ fontSize: 3 }} variants={fadeInUp}>
                  Get to know me.
                </motion.h2>
                <motion.p
                  sx={{ fontSize: ['18px', '21px'], my: 0 }}
                  variants={fadeInUp}
                >
                  I build modern websites and web applications.
                </motion.p>
              </motion.div>
              <IntersectionObserver options={{ triggerOnce: true }}>
                {({ inView }) => (
                  <motion.div
                    sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}
                    variants={staggerFadeInUp}
                    animate={inView ? 'visible' : 'hidden'}
                    initial="hidden"
                  >
                    <motion.p variants={fadeInUp}>
                      <strong sx={{ color: 'heading' }}>Hey!</strong>
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      I’m a web developer currently working here at SocialSpace
                      Inc., where I’m mostly involved with front-end web
                      development. I'm passionate about creating awesome
                      websites/web applications with modern tools.
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      I'm a graduate of Lyceum of the Philippines University
                      with a degree in Bachelor of Arts in Multimedia Arts. I
                      started creating websites in 2017 and I am completely
                      self-taught.
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      In work, we mainly use WordPress to power our websites.
                      Aside from WordPress, we also use the JAMStack if it fits
                      the requirement. I’m most comfortable working with
                      React.js, Next.js and Gatsby.js when it comes to building
                      websites.
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      Apart from front-end development, I also do some back-end
                      development with Node.js, I use Express.js to power the
                      RESTful APIs of my projects.
                    </motion.p>
                  </motion.div>
                )}
              </IntersectionObserver>
              <IntersectionObserver options={{ triggerOnce: true }}>
                {({ inView }) => (
                  <motion.div
                    sx={{
                      display: 'grid',
                      gridTemplateColumns:
                        'repeat(auto-fit, minmax(40px, 86px))',
                      gap: '16px',
                      mt: 5,
                      mx: 'auto',
                      maxWidth: 600,
                    }}
                    variants={staggerFadeInUp}
                    animate={inView ? 'visible' : 'hidden'}
                    initial="hidden"
                  >
                    {skills.map((skill, index) => {
                      return <SkillItem key={`skill-${index}`} skill={skill} />
                    })}
                  </motion.div>
                )}
              </IntersectionObserver>
            </div>
          </Wrapper>
        </Container>
      </section>
    </Page>
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
