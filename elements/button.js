/** @jsx jsx */
import React from 'react'
import Link from 'next/link'
import { jsx } from 'theme-ui'

export default function button({ children, href, variant, ...props}) {

  if (href) {
    if (href.includes('https://') || href.includes('http://')) {
      return (
        <a sx={{ variant }} href={href} {...props}>
          {children}
        </a>
      )
    }

    return (
      <Link href={href} passHref>
        <a sx={{ variant }} {...props}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <button sx={{ variant }} {...props}>
      {children}
    </button>
  )
}
