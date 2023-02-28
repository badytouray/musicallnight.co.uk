import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Card } from 'react-bootstrap'

export function EventCard({ name, intro, image, url, date, venue, location }) {
  return (
    <Card as={Link} to={url}>
      <Card.Header>
        {name}
        {location}
        {date}
        {venue}
      </Card.Header>
      <GatsbyImage image={image?.childImageSharp?.gatsbyImageData} alt={name} />
      <Card.Body>{intro}</Card.Body>
    </Card>
  )
}
