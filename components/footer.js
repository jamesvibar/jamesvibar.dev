/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
} from 'react-icons/ai'

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
            <span>
              &copy; {year}
            </span>
            <div sx={{ ml: 'auto' }}>
              <SocialLink
                href="https://twitter.com/jemsvibar"
                rel="nofollow"
                target="_blank"
              >
                <AiOutlineTwitter />
              </SocialLink>
              <SocialLink
                href="https://github.com/jamesvibar"
                rel="nofollow"
                target="_blank"
              >
                <AiOutlineGithub />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/james-vibar"
                rel="nofollow"
                target="_blank"
              >
                <AiFillLinkedin />
              </SocialLink>
            </div>
          </div>
        </Wrapper>
      </Container>
    </footer>
  )
}

const SocialLink = ({ children, ...props }) => {
  return (
    <a
      sx={{
        color: 'white',
        p: '4px',
        '&:hover': { color: '#1FCDC3' },
      }}
      {...props}
    >
      {children}
    </a>
  )
}
