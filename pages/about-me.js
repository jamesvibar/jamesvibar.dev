import Page from '../components/page'
import React from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../elements/wrapper'
import Container from '../elements/container'

export default function AboutMe() {
  return (
    <Page title="About Me">
      <Container>
        <Wrapper>
          <div style={{ padding: '60px 0'}}>
            Hello world
          </div>
        </Wrapper>
      </Container>
    </Page>
  )
}
