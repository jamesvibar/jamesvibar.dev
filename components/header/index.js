/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Link from 'next/link'
import Logo from '../elements/logo'
import Container from '../elements/container'
import Wrapper from '../elements/wrapper'

import { navigation } from '../../config/website'

export default function index() {
  return (
    <Container>
      <Wrapper sx={{ pt: 5 }}>
        <nav
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <NavList />
        </nav>
      </Wrapper>
    </Container>
  )
}

const NavList = () => {
  return (
    <ul
      sx={{
        m: 0,
        p: 0,
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {navigation.map((item) => (
        <li>
          <NavLink href="/test">{item.title}</NavLink>
        </li>
      ))}
    </ul>
  )
}

const NavLink = (props) => {
  return (
    <Link {...props} passHref>
      <a
        sx={{
          color: 'heading',
          p: 3,
          textDecoration: 'none',
          fontSize: 1,
          fontWeight: 'bold',
          letterSpacing: 1,
        }}
      >
        {props.children}
      </a>
    </Link>
  )
}
