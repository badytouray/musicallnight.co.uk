import { graphql } from 'gatsby'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArtistCard } from '../components/ArtistCard'
import { HeroSection } from '../components/HeroSection'
import { Layout } from '../components/Layout'

function IndexPage({ data }) {
  return (
    <Layout>
      <>
        <HeroSection image={data.heroImage.childImageSharp.gatsbyImageData.images.fallback.src} />
        <Container>
          <div className="text-center my-5">
            <h1>Welcome to M.A.N</h1>
            <p className="lead">We do cool stuff</p>
          </div>
          <div className="text-center my-5">
            <h2>Featured artists</h2>
            <Row>
              {data.artists.edges.map(({ node }) => (
                <Col md={6} lg={4}>
                  <ArtistCard
                    name={node.frontmatter.name}
                    intro={node.frontmatter.intro}
                    image={node.frontmatter.image}
                    url={`/artists/${node.parent.name}/`}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </>
    </Layout>
  )
}

export default IndexPage

export function Head() {
  return <title>Bady is a fag</title>
}

export const pageQuery = graphql`
  query IndexPage {
    heroImage: file(relativePath: { eq: "artists/harry.png" }) {
      relativePath
      childImageSharp {
        gatsbyImageData(
          transformOptions: { cropFocus: NORTH }
          width: 1920
          height: 1080
          layout: CONSTRAINED
        )
      }
    }
    artists: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { glob: "**/artists/*" }
        frontmatter: { featured: { eq: true } }
      }
      limit: 3
    ) {
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
