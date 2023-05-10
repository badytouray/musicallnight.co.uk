import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Card } from 'react-bootstrap'

export function NewsCard({ name, image, url }) {
  return (
    <Card as={Link} to={url}>
      {/* <Card.Header>{name}</Card.Header> */}
      <GatsbyImage
        image={image?.childImageSharp?.gatsbyImageData}
        alt={name}
        style={{ borderRadius: '5px' }}
      />
      {/* <Card.Body>{intro}</Card.Body> */}

    </Card>
  )
}
