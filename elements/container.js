/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

export default function Container({ children }) {
  return (
    <div sx={{ maxWidth: 1440, ml: 'auto', mr: 'auto', position: 'relative'  }}>
      {children}
    </div>
  )
}
