import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MdAssignmentInd } from 'react-icons/md'
import { Layout } from '../components/Layout'
import Pic from '../images/artists/dj-bady.png'

function OpenDecks() {
  return (
    <Layout>
      <Container
        className="m-3 justify-content-center "
        // style={{ marginLeft: 'auto', marginRight: 'auto' }}
      >
        <Row>
          <Col
            lg={12}
            className="m-3 justify-content-center"
            style={{ width: 'auto', height: 'auto' }}
          >
            <h1 className="text-center m-3">Sign up TODAY</h1>
            <p className="text-center fs-3">
              Attention all aspiring musicians! Have you been looking for an opportunity to get your
              music out there? Well, here's your chance! play at Brighton's most iconic underground
              venue. The Volks Nightclub.
              {/* <Button className="m-3"> */}
              {/* </Button> */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScUbNlwMUmKgGJKCpHXnzAr-KcYPo55eeDhL4DPMI34yXVtcA/viewform?usp=pp_url"
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
        <Row>
          <Col className="justify-content-center">
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

export default OpenDecks

export function Head() {
  return <title>Contact Us</title>
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
