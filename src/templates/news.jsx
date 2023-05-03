import { graphql } from 'gatsby'
import * as React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
// import { HeroSection } from '../components/HeroSection'
import { Layout } from '../components/Layout'

function SocialLink({ text, url }) {
  return (
    <Button as="a" target="_blank" href={url} className="me-1">
      {text}
    </Button>
  )
}

function NewsPage({ data }) {
  console.log(data)

  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      {/* <HeroSection
        title={frontmatter?.name}
        image={frontmatter.image?.childImageSharp.gatsbyImageData.images.fallback.src}
      /> */}
      <Container className="text-center" style={{ Width: '400px' }}>
        <Row>
          <Col>
            <p>{frontmatter?.intro}</p>
            <hr />

            <div dangerouslySetInnerHTML={{ __html: html }} />

            {frontmatter.social && (
              <>
                <h2>Social Links</h2>
                {frontmatter.social && (
                  <>
                    {frontmatter.social.facebook && (
                      <SocialLink text="Facebook" url={frontmatter.social.facebook} />
                    )}
                    {frontmatter.social.instagram && (
                      <SocialLink text="Instagram" url={frontmatter.social.instagram} />
                    )}
                    {frontmatter.social.twitter && (
                      <SocialLink text="Twitter" url={frontmatter.social.twitter} />
                    )}
                    {frontmatter.social.youtube && (
                      <SocialLink text="YouTube" url={frontmatter.social.youtube} />
                    )}
                  </>
                )}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default NewsPage

export function Head({ data }) {
  return <title>{data?.markdownRemark.frontmatter?.name}</title>
}

export const pageQuery = graphql`
  query NewsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name
        intro
        image {
          childImageSharp {
            gatsbyImageData(width: 1080)
          }
        }
        social {
          facebook
          instagram
          twitter
          youtube
        }
      }
    }
  }
`
