/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

export default function index({ children, ...rest }) {
  return (
    <div sx={{ width: '83.33%', ml: 'auto', mr: 'auto', position: "relative"  }} {...rest}>
      {children}
    </div>
  )
}
