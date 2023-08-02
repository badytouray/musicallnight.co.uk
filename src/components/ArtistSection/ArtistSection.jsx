import { Link } from 'gatsby'
import React from 'react'
import { Button } from 'react-bootstrap'
import * as s from './ArtistSection.module.scss'

export function ArtistSection({ image, title, subtitle, children }) {
  return (
    <div className={s.container} style={{ backgroundImage: `url(${image})`, width: '100%' }}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      {children && <div className={s.btns}>{children}</div>}
      <Button style={{ width: '25%' }} as={Link} to="/all-artists" size="lg">
        View talent

      </Button>
    </div>
  )
}
