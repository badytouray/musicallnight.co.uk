import { graphql, Link } from 'gatsby'
import * as React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
// import { ArtistCard } from '../components/ArtistCard'
import { ArtistSection } from '../components/ArtistSection'
import { EventCard } from '../components/EventCard'
import { HeroSection } from '../components/HeroSection'
import { Layout } from '../components/Layout'
// import { NewsCard } from '../components/NewsCard'
import { NewsSection } from '../components/NewsSection/NewsSection'

function IndexPage({ data }) {
  return (
    <Layout>
      <>
        <HeroSection
          image={data.heroImage.childImageSharp.gatsbyImageData.images.fallback.src}
          // title="Future Awaits"
          // subtitle="What are you waiting for?"
        >
          {/* <Button as={Link} to="/contact" variant="primary" size="lg">
            CONTACT US NOW
          </Button>
          <Button variant="primary" size="lg" onClick={console.log('hey')}>
            WATCH TRAILER <i className="far fa-play-circle" />
          </Button> */}
        </HeroSection>
        <Container fluid>
          <div className="text-center my-5">
            <h1>Welcome to M.A.N</h1>
            <p className="lead">
              Welcome to the Music All Night Events Platform, created in 2021 to provide
              opportunities for upcoming South coast local talent.{' '}
            </p>
          </div>
          <div className="text-center my-5">
            <h2>Featured events</h2>
            <Row>
              {data.events.edges.map(({ node }) => (
                <Col md={6} lg={4}>
                  <EventCard
                    // name={node.frontmatter.name}
                    // intro={node.frontmatter.intro}
                    image={node.frontmatter.image}
                    url={`/events/${node.parent.name}/`}
                  />
                </Col>
              ))}
            </Row>
          </div>
          <div>
            <Row>
              <NewsSection
                image={data.news.childImageSharp.gatsbyImageData.images.fallback.src}
                // title="Latest news"
                // subtitle="celebrating the launch of our website"
              />
            </Row>
          </div>
          <div>
            <Row>
              <ArtistSection
                image={data.artist.childImageSharp.gatsbyImageData.images.fallback.src}
                // title="Latest news"
                // subtitle="Local artist's"
              />
            </Row>
          </div>
          {/* <div className="text-center my-5 " style={{ width: '100%' }}>
            <h2>News</h2>
            <Row>
              {data.news.edges.map(({ node }) => (
                <Col md={6} lg={4}>
                  <NewsCard
                    name={node.frontmatter.name}
                    intro={node.frontmatter.intro}
                    image={node.frontmatter.image}
                    url={`/news/${node.parent.name}/`}
                  />
                </Col>
              ))}
            </Row>
          </div> */}

          {/* <div className="text-center my-5">
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
          </div> */}
        </Container>
      </>
    </Layout>
  )
}

export default IndexPage

export function Head() {
  return <title>M.A.N</title>
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
    news: file(relativePath: { eq: "artists/harry.png" }) {
      relativePath
      childImageSharp {
        gatsbyImageData(width: 1920, height: 1080, layout: CONSTRAINED)
      }
    }
    artist: file(relativePath: { eq: "artists/harry.png" }) {
      relativePath
      childImageSharp {
        gatsbyImageData(width: 1920, height: 1080, layout: CONSTRAINED)
      }
    }

    events: allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/events/*" }, frontmatter: { featured: { eq: true } } }
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
