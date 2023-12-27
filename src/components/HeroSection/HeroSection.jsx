import React from 'react'
import * as s from './HeroSection.module.scss'

export function HeroSection({ image, title, subtitle, children }) {
  return (
    <div className={s.container} style={{ backgroundImage: `url(${image})` }}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      {children && <div className={s.btns}>{children}</div>}
    </div>
  )
}
