/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Button from '../../elements/button'
import { AiOutlineDeploymentUnit } from 'react-icons/ai'

export default function workitem({ flip }) {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: ['column', null, !flip ? 'row' : 'row-reverse'],
        alignItems: 'center',
        mb: 7,
        mt: 6,
      }}
    >
      <div sx={{ flex: '1', maxWidth: ['100%', null, '500px'] }}>
        <img
          src="https://via.placeholder.com/800x600"
          sx={{
            width: '100%',
            display: 'block',
            borderRadius: '32px',
            marginLeft: !flip && 'auto',
          }}
        />
      </div>
      <div sx={{ flex: 1 }}>
        <div sx={{ width: ['100%', null, '88%'], marginLeft: !flip && 'auto' }}>
          <strong sx={{ fontSize: 2, color: 'heading', mt: [4, null, 0], display: 'inline-block'}}>Tripi.ph</strong>
          <div sx={{ my: 3, display: 'flex', alignItems: 'center' }}>
            <AiOutlineDeploymentUnit />
            <span sx={{ ml: 2 }}>Odoo</span>
            <span sx={{ mx: 2 }}>·</span>
            <span>2020</span>
          </div>
          <div>
            <p>
              Working closely with Pelago Inc., we created an eCommerce platform
              that aims to sell and deliver products/groceries to Filipinos
              during the COVID-19 pandemic. I was responsible for the creation
              of customer geolocation module, website front-end modifications,
              the extension of core Odoo modules, and general server management.
            </p>
            <Button sx={{ variant: 'button.outline' }} href="/projects/preview">
              View Project
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
