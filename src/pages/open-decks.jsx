import { graphql } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Layout } from '../components/Layout'

function OpenDecks() {
  return (
    <Layout>
      <Container
      // style={{ marginLeft: 'auto', marginRight: 'auto' }}
      >
        <Row>
          <Col lg={12} className="m-3" style={{ width: 'auto', height: 'auto' }}>
            <h1 className="text-center">Sign up TODAY</h1>
            <p className="text-center fs-3 m-3">
              Attention aspiring musicians! Get your music on radio, check our Youtube channel.
              <a
                href="https://youtube.com/@music_all_night"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'red', textDecoration: 'inherit' }}
                className="mt-3"
              >
                (Watch now)
              </a>
            </p>
          </Col>
          <Col lg={12} className="m-3">
            <iframe
              width="720"
              height="560"
              // src="https://www.youtube.com/embed/Oflbho9ZG2U?start=103"
              src="https://www.youtube.com/embed/LggQulkjHi0?si=asHS8-WYrqKOoTKr"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share"
              allowfullscreen
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default OpenDecks

export function Head() {
  return <title> Open Decks Session | Spin Cycle</title>
}

export const pageQuery = graphql`
  query DecksPage {
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
