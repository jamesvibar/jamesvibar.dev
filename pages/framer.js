/** @jsx jsx */
import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { jsx } from 'theme-ui'
import { IntersectionObserver } from '../components/intersection-observer'

export default function framer() {
  const { scrollYProgress} = useViewportScroll()
  const translate = useTransform(scrollYProgress, v => v * 100)

  return (
    <div>
      This is framer!
      <Spacer />

      <IntersectionObserver options={{ threshold: .5 }}>
        {({ inView }) => {
          return (<div style={{ padding: '500px 0', backgroundColor: 'pink'}}>
            {`${inView}`}
            {console.log(inView)}
          </div>)
        }}
      </IntersectionObserver>

      <h1>Sample framer</h1>
      <motion.h1 animate={{ translateX: 100 }}>
        Test
      </motion.h1>
    </div>
  )
}

const Header = () => {
  return <h1 sx={{ transform: 'translateX(200px)' }}>Motion h1</h1>
}

const MotionHeader = motion.custom(Header)

const Spacer = () => {
  return <div style={{ height: '1000px' }}></div>
}
