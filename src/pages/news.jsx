import { graphql } from 'gatsby'
import * as React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { HeroSection } from '../components/HeroSection'
import { Layout } from '../components/Layout'
import { NewsCard } from '../components/NewsCard'

function NewsPage({ data }) {
  return (
    <Layout>
      <HeroSection
        image={data.heroImage.childImageSharp.gatsbyImageData.images.fallback.src}
        // title="Future Awaits"
        subtitle="Read some stuff about some stuff"
      >
        {/* <Button as={Link} to="/contact" variant="primary" size="lg">
          Read now
        </Button> */}
        <Button variant="primary" size="lg" onClick={console.log('hey')}>
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </HeroSection>
      <Container>
        <h1>News</h1>
        <p>Some text about News</p>
        <Row>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Col md={6} lg={4}>
              <NewsCard
                image={node.frontmatter.image}
                name={node.frontmatter.name}
                intro={node.frontmatter.intro}
                url={`/news/${node.parent.name}/`}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  )
}

export default NewsPage

export function Head() {
  return <title>News</title>
}

export const pageQuery = graphql`
  query ArtistsPage {
    heroImage: file(relativePath: { eq: "artists/harry.png" }) {
      relativePath
      childImageSharp {
        gatsbyImageData(width: 1920, height: 400, layout: CONSTRAINED)
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/news/*" } }) {
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
