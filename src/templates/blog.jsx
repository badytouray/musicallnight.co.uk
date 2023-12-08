import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
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
      <Container className="mr-3 p-3 ">
        <Row>
          <Col className=" pt-5" sm={12} md={4} lg={4}>
            {/* <h1>{frontmatter?.name}</h1> */}
            <GatsbyImage
              image={frontmatter.image?.childImageSharp?.gatsbyImageData}
              alt={data?.markdownRemark.frontmatter?.name}
              style={{ borderStyle: 'groove', borderRadius: '5px' }}
            />
          </Col>
          <Col className="fs-5 pt-5" style={{ borderRadius: '5px' }} xs={12} sm={12} md={2} lg={2}>
            <p>{frontmatter?.intro}</p>
            <p>{frontmatter?.date}</p>
            <p>{frontmatter?.venue}</p>
            <p>{frontmatter?.location}</p>
          </Col>
          <Col className="fs-5 pt-5" style={{ borderRadius: '5px' }} xs={12} sm={12} md={6} lg={6}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
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
            gatsbyImageData(width: 640)
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
