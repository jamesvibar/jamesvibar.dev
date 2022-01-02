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
                      <strong sx={{ color: 'heading' }}>Hello!</strong>
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      I’m a senior web developer currently working at Pelago
                      Inc., where I am part of a small team that develops websites
                      and web applications for clients.
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      In work, I am mostly involved with Python and Odoo ERP, creating
                      extensions or applications to meet business requirements, integration
                      of third-party APIs like PayMongo and DragonPay to generate sales, and
                      the modification of core modules of Odoo to meet the specific use
                      cases of the team. I also handle releases using docker and general server administration
                      of droplets in DigitalOcean.
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      I'm a graduate of Lyceum of the Philippines University
                      with a degree in Bachelor of Arts in Multimedia Arts. I
                      started creating websites in 2017 and I am completely
                      self-taught.
                    </motion.p>
                    <motion.p variants={fadeInUp}>
                      Apart from front-end development, I love to explore new technologies
                      like creating discord bots with Discord.js, currently I'm working on having fun
                      with mobile app development with Ionic/Flutter and React Native.
                      I also do back-end development with Node.js, I use Express.js, Strapi among many things
                      to power the RESTful APIs of my projects.
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
