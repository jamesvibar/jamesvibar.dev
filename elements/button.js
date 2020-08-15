/** @jsx jsx */
import React from 'react'
import Link from 'next/link'
import { jsx } from 'theme-ui'
import { motion } from 'framer-motion'

export default function Button({ children, href, variant, ...props }) {
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
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
          sx={{ variant }}
          {...props}
        >
          {children}
        </motion.a>
      </Link>
    )
  }

  return (
    <button sx={{ variant }} {...props}>
      {children}
    </button>
  )
}
