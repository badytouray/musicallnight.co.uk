import { graphql } from 'gatsby'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArtistCard } from '../components/ArtistCard'
import { HeroSection } from '../components/HeroSection/HeroSection'
import { Layout } from '../components/Layout'

function ArtistsPage({ data }) {
  return (
    <Layout>
      <Container>
        <HeroSection />
        <Row>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Col md={6} lg={4}>
              <ArtistCard
                image={node.frontmatter.image}
                name={node.frontmatter.name}
                intro={node.frontmatter.intro}
                url={`/artists/${node.parent.name}/`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default ArtistsPage

export function Head() {
  return <title>Artists</title>
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
                gatsbyImageData(width: 540, height: 540)
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
