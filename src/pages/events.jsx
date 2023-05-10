import { graphql } from 'gatsby'
import React, { useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { EventCard } from '../components/EventCard'
import { Layout } from '../components/Layout'

function EventsPage({ data }) {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = 'https://web-cdn.fixr.co/scripts/fixr-checkout-widget.v1.min.js'

    script.async = true

    script.integrity = 'sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p'

    script.crossOrigin = 'anonymous'

    document.body.appendChild(script)

    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script)
    }
  }, [])

  return (
    <Layout>
      <Container>
        <h1>Events</h1>
        <p>Some text about Events</p>
        <Row>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Col md={6} lg={4} className="mb-3">
              <EventCard
                image={node.frontmatter.image}
                name={node.frontmatter.name}
                intro={node.frontmatter.intro}
                // date={node.frontmatter.date}
                // location={node.frontmatter.location}
                // venue={node.frontmatter.venue}
                url={`/events/${node.parent.name}/`}
                style={{ borderStyle: 'groove', borderRadius: '5px' }}
              />
            </Col>
          ))}
          <Col>
            <div>
              <Button href="https://fixr.co/event/man-dial-tickets-995222867?" type="button">
                View shop{' '}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default EventsPage

export function Head() {
  return <title>Events</title>
}

export const pageQuery = graphql`
  query EventsPage {
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/events/*" } }) {
      edges {
        node {
          id
          frontmatter {
            name
            intro
            date
            location
            venue
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
