/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Link from 'next/link'
import Logo from '../elements/logo'
import Container from '../elements/container'
import Wrapper from '../elements/wrapper'

import { navigation } from '../config/website'

export default function Header() {
  return (
    <Container>
      <Wrapper sx={{ pt: [4, null, 5] }}>
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
        alignItems: 'center',
        justifyContent: 'center',
        display: ['none', null, 'flex'],
      }}
    >
      {navigation.map((item, index) => (
        <li key={`navlink-${index}`}>
          <NavLink href={`${item?.href}`} {...item}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

const NavLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a
        sx={{
          color: 'heading',
          p: 3,
          textDecoration: 'none',
          fontSize: 1,
          fontWeight: 'bold',
          letterSpacing: 1,
          '&:hover': {
            color: 'primary',
          },
        }}
      >
        {children}
      </a>
    </Link>
  )
}
