import { graphql } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Layout } from '../components/Layout'
import Pic from '../images/artists/open-decks.png'

function OpenDecks() {
  return (
    <Layout>
      <Container
      // style={{ marginLeft: 'auto', marginRight: 'auto' }}
      >
        <Row>
          <Col lg={6} className="m-3" style={{ width: 'auto', height: 'auto' }}>
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

            <img
              src={Pic}
              alt="music-all-night-open-deck-sessions-volks-nightclub"
              className="m-3"
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
