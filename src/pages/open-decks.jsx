import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MdAssignmentInd } from 'react-icons/md'
import { Layout } from '../components/Layout'
// import Pic from '../images/artists/open-decks.png'

function OpenDecks({ data }) {
  return (
    <Layout>
      <Container
        className="m-3"
        // style={{ marginLeft: 'auto', marginRight: 'auto' }}
      >
        <Row>
          <Col className="m-3">
            <GatsbyImage image={data.sign.childImageSharp.gatsbyImageData} />
          </Col>
          <Col sm={12} md={6} lg={6} className="m-3">
            <h1 className="text-center">Sign up TODAY</h1>
            <p className="text-center fs-3 mt-3">
              Attention all aspiring musicians! Have you been looking for an opportunity to get your
              music out there? Play at the most iconic Brighton underground venue, the Volks
              Nightclub.
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
  query OpenDecks {
    sign: file(relativePath: { eq: "artists/open-decks.png" }) {
      childImageSharp {
        gatsbyImageData(width: 920)
      }
    }
  }
`
