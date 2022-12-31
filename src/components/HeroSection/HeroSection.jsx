// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button } from 'react-bootstrap'
import * as s from './HeroSection.module.scss'

export function HeroSection({ image }) {
  return (
    <div className={s.container} style={{ backgroundImage: `url(${image})` }}>
      <h1>Future AWAITSa</h1>
      <p>What are you waiting for?</p>
      <div className={s.btns}>
        <Button variant="primary" size="lg">
          CONTACT US NOW
        </Button>
        <Button variant="primary" size="lg" onClick={console.log('hey')}>
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  )
}
