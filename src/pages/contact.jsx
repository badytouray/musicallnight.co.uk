import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Layout } from '../components/Layout'
import Pic from '../images/artists/dj-bady.png'

function Contact() {
  return (
    <Layout>
      <Container
        classname="m-3 justify-content-center "
        // style={{ marginLeft: 'auto', marginRight: 'auto' }}
      >
        <Row>
          <Col
            lg={12}
            className="m-3 justify-content-center"
            style={{ width: 'auto', height: 'auto' }}
          >
            <h1 className="text-center m-3">Contact us</h1>
            <p className="text-center fs-3">Contact us at info@musicallnight.co.uk</p>
            <img
              src={Pic}
              alt="contact-music-all-night"
              style={{ height: '800px', width: '800px' }}
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
