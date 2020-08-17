/** @jsx jsx */
import React from 'react'
import { motion } from 'framer-motion'
import { jsx } from 'theme-ui'
import { fadeInUp } from '../../animations'

export default function CareerItem({ title, items, ...props }) {
  const isFuture = title.toUpperCase() === 'FUTURE'

  return (
    <motion.div
      variants={fadeInUp}
      sx={{
        backgroundColor: 'white',
        boxShadow: 'large',
        borderRadius: '18px',
        padding: '28px 18px',
        position: 'relative',
        alignSelf: 'flex-start',
        gridColumn: isFuture && ['auto', 'span 2', 'auto'],
        textAlign: isFuture && [null, 'center', 'left'],
      }}
      {...props}
    >
      {isFuture ? (
        <>
          <img
            sx={{
              display: ['none', 'block'],
              position: 'absolute',
              bottom: -32,
              right: -32,
              zIndex: 0,
            }}
            src="/images/svg/teal-accent.svg"
          />
          <strong
            sx={{
              display: 'inline-block',
              color: 'white',
              backgroundColor: 'primary',
              p: 1,
              mb: 3,
              mt: -1,
              textTransform: 'uppercase',
              fontSize: '18px',
            }}
          >
            FUTURE
          </strong>
          <div sx={{ color: 'heading', fontWeight: 'bold' }}>You decide.</div>
        </>
      ) : (
        <>
          <strong
            sx={{
              display: 'inline-block',
              color: 'primary',
              mb: 3,
              textTransform: 'uppercase',
              fontSize: '18px',
            }}
          >
            {title}
          </strong>
          {items.map((item, index) => {
            return (
              <ul
                key={`ul-${item[0][0]}`}
                sx={{
                  m: 0,
                  mb: index === items.length - 1 ? 0 : 3,
                  p: 0,
                  listStyle: 'none',
                }}
              >
                {item.map((str, index) => {
                  return (
                    <li
                      key={`li-${str}`}
                      sx={{ mb: '10px', color: index === 0 && 'heading' }}
                    >
                      {str}
                    </li>
                  )
                })}
              </ul>
            )
          })}
        </>
      )}
    </motion.div>
  )
}
