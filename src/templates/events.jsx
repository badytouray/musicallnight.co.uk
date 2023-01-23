import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Container } from 'react-bootstrap'
import { Layout } from '../components/Layout'

function EventsTemplate({ data }) {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <Container>
        <h1>{frontmatter?.name}</h1>
        <GatsbyImage
          image={frontmatter.image?.childImageSharp?.gatsbyImageData}
          alt={data?.markdownRemark.frontmatter?.name}
        />
        <p>{frontmatter?.intro}</p>
        <p>{frontmatter?.date}</p>
        <p>{frontmatter?.venue}</p>
        <p>{frontmatter?.location}</p>
        <hr />

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
    </Layout>
  )
}

export default EventsTemplate

export function Head({ data }) {
  return <title>{data?.markdownRemark.frontmatter?.name}</title>
}

export const pageQuery = graphql`
  query EventsPage($id: String!) {
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
        date
        venue
        location
      }
    }
  }
`
