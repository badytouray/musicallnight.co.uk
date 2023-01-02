import { graphql } from 'gatsby'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { EventCard } from '../components/EventCard'
import { Layout } from '../components/Layout'

function EventsPage({ data }) {
  return (
    <Layout>
      <Container>
        <h1>Events</h1>
        <p>Some text about Events</p>
        <Row>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Col md={6} lg={4}>
              <EventCard
                image={node.frontmatter.image}
                name={node.frontmatter.name}
                intro={node.frontmatter.intro}
                date={node.frontmatter.date}
                location={node.frontmatter.location}
                venue={node.frontmatter.venue}
                url={`/events/${node.parent.name}/`}
              />
            </Col>
          ))}
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
