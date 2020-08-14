/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Container from '../elements/container'
import Wrapper from '../elements/wrapper'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      sx={{
        color: 'white',
        background: 'url(/images/svg/footer-bg.svg) center center',
        backgroundColor: '#BB0059',
      }}
    >
      <Container>
        <Wrapper>
          <div sx={{ height: '75px', display: 'flex', alignItems: 'center' }}>
            &copy; {year}
          </div>
        </Wrapper>
      </Container>
    </footer>
  )
}
