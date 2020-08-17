/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import { AiOutlineDeploymentUnit } from 'react-icons/ai'
import { motion } from 'framer-motion'

import Button from '../../elements/button'
import { IntersectionObserver } from '../intersection-observer'
import { fadeInUp, fadeInLeft, fadeInRight, staggerFadeInUp } from '../../animations'

export default function WorkItem({ flip }) {
  return (
    <IntersectionObserver options={{ triggerOnce: true }}>
      {({ inView }) => (
        <motion.div
          variants={staggerFadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          sx={{
            display: 'flex',
            flexDirection: ['column', null, !flip ? 'row' : 'row-reverse'],
            alignItems: 'center',
            mb: 7,
          }}
        >
          <div sx={{ flex: '1', maxWidth: ['100%', null, '500px'] }}>
            <motion.img
              variants={!flip ? fadeInLeft : fadeInRight}
              src="https://via.placeholder.com/800x600/FDE6A0/FF007A"
              sx={{
                width: '100%',
                display: 'block',
                borderRadius: '32px',
                marginLeft: !flip && 'auto',
                boxShadow: 'large',
              }}
            />
          </div>
          <div sx={{ flex: 1 }}>
            <div
              sx={{ width: ['100%', null, '88%'], marginLeft: !flip && 'auto' }}
            >
              <motion.strong
                variants={fadeInUp}
                sx={{
                  fontSize: 2,
                  color: 'heading',
                  mt: [4, null, 0],
                  display: 'inline-block',
                }}
              >
                Tripi.ph
              </motion.strong>
              <motion.div variants={fadeInUp} sx={{ my: 3, display: 'flex', alignItems: 'center' }}>
                <AiOutlineDeploymentUnit />
                <span sx={{ ml: 2 }}>Odoo</span>
                <span sx={{ mx: 2 }}>·</span>
                <span>2020</span>
              </motion.div>
              <div>
                <motion.p variants={fadeInUp}>
                  Working closely with Pelago Inc., we created an eCommerce
                  platform that aims to sell and deliver products/groceries to
                  Filipinos during the COVID-19 pandemic. I was responsible for
                  the creation of customer geolocation module, website front-end
                  modifications, the extension of core Odoo modules, and general
                  server management.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Button
                    sx={{ variant: 'button.outline' }}
                    href="/projects/preview"
                  >
                    View Project
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </IntersectionObserver>
  )
}
