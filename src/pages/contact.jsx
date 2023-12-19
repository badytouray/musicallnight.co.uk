import { graphql } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Layout } from '../components/Layout'
import Pic from '../images/artists/dj-bady.png'

function Contact() {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={6} md={4} lg={12}>
            <h1 className="text-center">Contact us</h1>
            <p className="text-center fs-3 ">Contact us at bady@musicallnight.co.uk</p>

            <img
              src={Pic}
              alt="contact-music-all-night"
              style={{ height: 'auto', width: '100%' }}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Contact

export function Head() {
  return <title>Contact Us</title>
}

export const pageQuery = graphql`
  query ArtistsPage {
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/artists/*" } }) {
      edges {
        node {
          id
          frontmatter {
            name
            intro
            image {
              childImageSharp {
                gatsbyImageData(width: 540)
              }
            }
          }
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  }
`
