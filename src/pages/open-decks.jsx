import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MdAssignmentInd } from 'react-icons/md'
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
              Attention all aspiring musicians! Have you been looking for an opportunity to get your
              music out there? Well, here's your chance! play at Brighton's most iconic underground
              venue. The Volks Nightclub.
              {/* <Button className="m-3"> */}
              {/* </Button> */}
              <a
                href="https://forms.gle/xbhaenqsNqa3nxhz6"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'red', textDecoration: 'inherit' }}
                className="mt-3"
              >
                <MdAssignmentInd size="2em" /> (Sign Up)
              </a>
            </p>
          </Col>

          <Col lg={6}>
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
  return <title> Open Decks Session | Volks Nightclub</title>
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
