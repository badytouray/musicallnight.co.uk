import { graphql } from 'gatsby'
import * as React from 'react'
import { HeroSection } from '../components/HeroSection'
import { Layout } from '../components/Layout'
import Pic from '../images/artists/harry.png'

function AboutPage({ data }) {
  return (
    <div className="container-fluid">
      <Layout>
        <HeroSection image={data.heroImage.childImageSharp.gatsbyImageData.images.fallback.src} />
        <h1>ABout Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage

export function Head() {
  return <title>About Us</title>
}

export const pageQuery = graphql`
  query AboutPage {
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
