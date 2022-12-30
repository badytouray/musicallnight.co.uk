import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Button, Container } from 'react-bootstrap'
import { Layout } from '../components/Layout'

function SocialLink({ text, url }) {
  return (
    <Button as="a" target="_blank" href={url} className="me-1">
      {text}
    </Button>
  )
}

function ArtistsPage({ data }) {
  console.log(data)

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
      </Container>
    </Layout>
  )
}

export default ArtistsPage

export function Head({ data }) {
  return <title>{data?.markdownRemark.frontmatter?.name}</title>
}

export const pageQuery = graphql`
  query ArtistsPage($id: String!) {
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
