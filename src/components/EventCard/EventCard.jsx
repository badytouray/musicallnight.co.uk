import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Card } from 'react-bootstrap'
import * as s from './EventCard.module.scss'

export function EventCard({ name, image, url }) {
  return (
    <div className={s.container}>
      <Card as={Link} to={url}>
        {/* <Card.Header>
        {name}
        {location}
        {date}
        {venue}
      </Card.Header> */}
        <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} alt={name} />
        {/* <Card.Body>{intro}</Card.Body> */}
      </Card>
    </div>
  )
}
