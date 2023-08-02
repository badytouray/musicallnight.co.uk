import { graphql } from 'gatsby'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { HeroSection } from '../components/HeroSection'
import { Layout } from '../components/Layout'
import { NewsCard } from '../components/NewsCard'

function NewsPage({ data }) {
  return (
    <Layout>
      <HeroSection image={data.heroImage.childImageSharp.gatsbyImageData.images.fallback.src} />
      <Container className="text-center mr-3 p-3 mb-3">
        <Row>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Col sm={12} md={3} lg={6} className="p-3 mb-3">
              <NewsCard
                image={node.frontmatter.image}
                // name={node.frontmatter.name}
                // intro={node.frontmatter.intro}
                // url="https://fixr.co/event/bring-your-usb-sun-7th-may-tickets-340368492?"
                url={`/blog/${node.parent.name}/`}
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
  return <title>Blog | Music All Night</title>
}

export const pageQuery = graphql`
  query BlogPage {
    heroImage: file(relativePath: { eq: "artists/harry.png" }) {
      relativePath
      childImageSharp {
        gatsbyImageData(width: 1920, height: 400, layout: CONSTRAINED)
      }
    }
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/blog/*" } }) {
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
