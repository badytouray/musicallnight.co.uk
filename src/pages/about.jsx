import { graphql } from 'gatsby'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsFacebook, BsTelephoneInboundFill } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
import { TfiEmail } from 'react-icons/tfi'
// import { HeroSection } from '../components/HeroSection'
import { Layout } from '../components/Layout'
import Sec from '../images/artists/beano.png'
import Maddy from '../images/artists/maddy.png'
import Pic from '../images/artists/nicky.png'
import Ray from '../images/artists/ray.png'

function AboutPage({ data }) {
  return (
    <Layout>
      {/* <HeroSection image={data.heroImage.childImageSharp.gatsbyImageData.images.fallback.src} /> */}
      <Container>
        <Row>
          <Col sm={12} md={4} lg={6}>
            <h1 className="text-center pt-5">About Us</h1>
            <div className="contact-info">
              <img src={Pic} className="m-10 card-img-top" alt="..." />
              {/* <div className="contact-info"> */}
              <span>
                <TfiEmail size="1.5em" color="" className="m-3" />
                <a href="/contact" target="_blank" rel="noreferrer" className="m-2 p-2">
                  <RiInstagramFill size="1.5em" color="instagram" />
                </a>
                <a
                  href="https://www.youtube.com/@music_all_night"
                  target="_blank"
                  rel="noreferrer"
                  className="m-2 p-2"
                >
                  <BsFacebook size="1.5em" />
                </a>
                <BsTelephoneInboundFill className="m-3 fs-4" />
                075 3378 0033
              </span>
            </div>
          </Col>

          <Col sm={12} md={4} lg={6} className="pt-5 fs-5">
            <h5>Who are we?</h5>
            <p>
              Welcome to the Music Events Platform, created in 2021 to provide opportunities for
              upcoming South coast local talent. Our mission is to provide networking events so
              everyone has access to learn and grow. Our first event was held at the legendary Volks
              Nightclub in Brighton. We also promote upcoming events and follow the rise of upcoming
              DJs and local Brighton MCs.
            </p>
            <br />
            <h5>Get noticed</h5>
            <p>
              Get yourself out there or you simplify do not know where to turn or how to get started
              then look no further, we are always scouting fresh talent. Join our open decks night
              every Monday at the Actors pub in Brighton
            </p>
            <br />
          </Col>
        </Row>
        {/* start of team images */}
        <Row>
          <Col sm={12} md={4} lg={12}>
            <div className="container text-center">
              <div className="row align-items-end">
                <div className="col col-md-4">
                  <div className="card " style={{ width: '100%' }}>
                    <img src={Ray} className="card-img-top" alt="..." />
                    {/* <div className="card-body">
                      <h5 className="card-title ">Bobbie Tee</h5>
                      <div>
                        <a
                          href="https://www.youtube.com/results?search_query=gatsby+query"
                          target="_blank"
                          rel="noreferrer"
                          className="m-2 p-2"
                        >
                          <RiInstagramFill size="2em" />
                        </a>
                        <a
                          href="https://www.youtube.com/results?search_query=gatsby+query"
                          target="_blank"
                          rel="noreferrer"
                          className="m-2 p-2"
                        >
                          <BsFacebook size="2em" />
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>

                <Col md={4}>
                  <div className="card " style={{ width: '100%' }}>
                    <img src={Maddy} className="card-img-top" alt="..." />
                    {/* <div className="card-body">
                      <h5 className="card-title ">Darren</h5>
                      <div>
                        <a
                          href="https://www.youtube.com/results?search_query=gatsby+query"
                          target="_blank"
                          rel="noreferrer"
                          className="m-2 p-2"
                        >
                          <RiInstagramFill size="2em" />
                        </a>
                        <a
                          href="https://www.youtube.com/results?search_query=gatsby+query"
                          target="_blank"
                          rel="noreferrer"
                          className="m-2 p-2"
                        >
                          <BsFacebook size="2em" />
                        </a>
                      </div> 
                    </div> */}
                  </div>
                </Col>

                <div className="col col-md-4">
                  <div className="card " style={{ width: '100%' }}>
                    <img src={Sec} className="card-img-top" alt="..." />
                    {/* <div className="card-body">
                      <h5 className="card-title ">Bady</h5>
                      <div>
                        <a
                          href="https://www.instagram.com/djbady_"
                          target="_blank"
                          rel="noreferrer"
                          className="m-2 p-2"
                        >
                          <RiInstagramFill size="2em" />
                        </a>
                        <a
                          href="https://www.youtube.com/results?search_query=gatsby+query"
                          target="_blank"
                          rel="noreferrer"
                          className="m-2 p-2"
                        >
                          <BsFacebook size="2em" />
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default AboutPage

export function Head() {
  return <title>About Us</title>
}

export const pageQuery = graphql`
  query AboutPage {
    heroImage: file(relativePath: { eq: "artists/man_banner.png" }) {
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
