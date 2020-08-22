/** @jsx jsx */
import React from 'react'
import { motion } from 'framer-motion'
import { jsx } from 'theme-ui'
import { fadeInUp } from '../../animations'

export default function SkillItem({ skill }) {
  return (
    <motion.div
      sx={{
        backgroundColor: 'white',
        borderRadius: 4,
        boxShadow: 'medium',
        border: '1px solid #EDEDED',
        textAlign: 'center',
        p: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ':nth-child(7)': {
          gridColumn: [null, null, 3],
        },
      }}
      variants={fadeInUp}
    >
      <div>
        <div
          sx={{
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={skill.icon} />
        </div>
        <span sx={{ fontSize: '13px', mt: 2, display: 'inline-block' }}>
          {skill.title}
        </span>
      </div>
    </motion.div>
  )
}
