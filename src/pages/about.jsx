import { graphql } from 'gatsby'
import * as React from 'react'
import { HeroSection } from '../components/HeroSection'
import { Layout } from '../components/Layout'
import Pic from '../images/artists/harry.png'

 about-page
function AboutPage() {
  return (
    <Layout>
      <h1>About</h1>
      <p>Bla bla</p>
    </Layout>
    
function AboutPage({ data }) {
  return (
    <div className="container-fluid">
      <Layout>
        <HeroSection image={data.heroImage.childImageSharp.gatsbyImageData.images.fallback.src} />
        <h1 className="text-center pt-5">About Us</h1>
        <div className="container">
          <div className="row align-items-end ">
            <div className="col col-md-4  align-self-start ">
              <img src={Pic} className=" m-10 card-img-top" alt="..." />
              <p className="p-10">
                More info? Mail us! For questions, fees, availability and bookings feel free to
                contact us via:
              </p>
              <h3>Icon: musicallnight@gmail.com</h3>
              <h3>Tel:: 07533780033</h3>
              <button className="btn btn-danger">Email Us</button>
            </div>
            <div className="col about-right align-self-end col-lg-8 p-5">
              <h5>Lorem Ipsum is simply dummy text of the printing</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
              <br />
              <h5>Lorem Ipsum is simply dummy text of the printing</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
              <br />
              <h5>Lorem Ipsum is simply dummy text of the printing</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
              <br />
              <h5>Lorem Ipsum is simply dummy text of the printing</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </p>
              {/* end of about decription */}
            </div>
          </div>
        </div>
        {/* start of team images */}
        <div className="container text-center">
          <div className="row align-items-end">
            <div className="col col-md-4">
              <div className="card " style={{ width: '100%' }}>
                <img src={Pic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title ">Team Name</h5>
                  <div>
                    <a
                      href="https://www.youtube.com/results?search_query=gatsby+query"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                      <i className="bi-alarm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-md-4">
              <div className="card " style={{ width: '100%' }}>
                <img src={Pic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title ">Team Name</h5>
                  <p className="mb-0">Follow Instagram</p>
                </div>
              </div>
            </div>
            <div className="col col-md-4">
              <div className="card " style={{ width: '100%' }}>
                <img src={Pic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title ">Team Name</h5>
                  <p className="mb-0">Follow Instagram</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
