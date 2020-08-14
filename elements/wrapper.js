/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

export default function Wrapper({ children, ...rest }) {
  return (
    <div sx={{ width: ['92%', '83.33%'], ml: 'auto', mr: 'auto', position: "relative"  }} {...rest}>
      {children}
    </div>
  )
}
