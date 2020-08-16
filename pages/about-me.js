import Page from '../components/page'
import React from 'react'
import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <Page title="About Me">
      Hello
      <motion.div exit={{ opacity: 0 }}>
        Hello
      </motion.div>
    </Page>
  )
}
