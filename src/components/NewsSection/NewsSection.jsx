import { Link } from 'gatsby'
import React from 'react'
import { Button } from 'react-bootstrap'
import * as s from './NewsSection.module.scss'

export function NewsSection({ image, title, subtitle, children }) {
  return (
    <div className={s.container} style={{ backgroundImage: `url(${image})`, width: '100%' }}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      {children && <div className={s.btns}>{children}</div>}

      <Button style={{ width: '25%' }} as={Link} to="/blog" size="lg">

        Read more
      </Button>
    </div>
  )
}
