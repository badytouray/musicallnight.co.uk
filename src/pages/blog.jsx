import { graphql } from 'gatsby'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { HeroSection } from '../components/HeroSection'
import { Layout } from '../components/Layout'
import { NewsCard } from '../components/NewsCard'

function NewsPage({ data }) {
  return (
    <Layout>
      <HeroSection
        image={data.heroImage.childImageSharp.gatsbyImageData.images.fallback.src}
        // title="Future Awaits"
        // subtitle="Read some stuff about some stuff"
      >
        {/* <Button as={Link} to="/contact" variant="primary" size="lg">
          Read now
        </Button> */}
        {/* <Button variant="primary" size="lg" onClick={console.log('hey')}>
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </HeroSection>
      <Container className="text-center mr-3 p-3 mb-3">
        <h1>Welcome to Music All Night</h1>
        <h5>Stay up to date with what happens in Brighton</h5>
        <Row>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Col sm={12} md={3} lg={4} className="p-3 mb-3">
              <NewsCard
                image={node.frontmatter.image}
                // name={node.frontmatter.name}
                // intro={node.frontmatter.intro}
                // url="https://fixr.co/event/bring-your-usb-sun-7th-may-tickets-340368492?"
                url={`/blog/${node.parent.name}/`}
              />
            </Col>
          ))}

          {/* <Col md={6} lg={6}>
            <p className="fs-2 align-self-center mt-3">
              lurom Welcome to the Music Events Platform, created in 2021 to provide opportunities
              for upcoming South coast local talent. .
            </p>
            <small>3min read</small>
          </Col> */}
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
