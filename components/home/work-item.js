/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

export default function workitem() {
  return (
    <div sx={{ display: 'flex', flexDirection: ['column', null, 'row'] }}>
      <div sx={{ flex: '1', maxWidth: ['100%', null, '400px'], }}>
        <img src="https://via.placeholder.com/800x600" sx={{ width: '100%', display: 'block', borderRadius: '32px', }} />
      </div>
      <div sx={{ flex: 1 }}>
        <div sx={{width: ['100%', null, '88%'], marginLeft: 'auto' }}>
          <strong>Tripi.ph</strong>
          <div>
            META
          </div>
          <div>
            <p>
              Working closely with Pelago Inc., we created an eCommerce platform that aims to sell and deliver products/groceries to Filipinos during the COVID-19 pandemic. I was responsible for the creation of customer geolocation module, website front-end modifications, the extension of core Odoo modules, and general server management.
            </p>
            <a>
              View Project
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}
