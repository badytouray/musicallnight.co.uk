import { graphql } from 'gatsby'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsFacebook, BsTelephoneInboundFill } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
import { TfiEmail } from 'react-icons/tfi'
import { HeroSection } from '../components/HeroSection'
import { Layout } from '../components/Layout'
import Pic from '../images/artists/harry.png'

function AboutPage({ data }) {
  return (
    <Layout>
      <HeroSection image={data.heroImage.childImageSharp.gatsbyImageData.images.fallback.src} />
      <Container>
        <Row>
          <Col>
            <h1 className="text-center pt-5">About Us</h1>
            <div className="container">
              <div className="row align-items-end ">
                <div className="col col-md-4  align-self-start ">
                  <img src={Pic} className=" m-10 card-img-top" alt="..." />
                  <div className="contact-info">
                    <h5>
                      <TfiEmail size="1.5em" color="" className="m-3" />
                      <a
                        href="https://www.instagram.com/music__all__night/?__coig_restricted=1"
                        target="_blank"
                        rel="noreferrer"
                        className="m-2 p-2"
                      >
                        <RiInstagramFill size="1.5em" color="instagram" />
                      </a>
                      <a
                        href="https://www.youtube.com/results?search_query=gatsby+query"
                        target="_blank"
                        rel="noreferrer"
                        className="m-2 p-2"
                      >
                        <BsFacebook size="1.5em" />
                      </a>
                      <BsTelephoneInboundFill className="m-3 fs-4" />
                      075 3378 0033
                    </h5>
                  </div>
                  {/* <button className="btn btn-danger">Email Us</button> */}
                </div>
                <div className="col about-right align-self-end col-lg-8 p-5">
                  <h5>Who are we?</h5>
                  <p>
                    Welcome to the Music Events Platform, created in 2021 to provide opportunities
                    for upcoming South coast local talent. Our mission is to provide networking
                    events with affordable tickets so everyone has access to the events. Our first
                    event was held at the legendary Volks Nightclub in Brighton. We also promote
                    upcoming events and follow the rise of upcoming DJs and local Brighton MCs.
                  </p>
                  <br />
                  <h5>Previous events</h5>
                  <p>
                    Previous events have included Drum and Bass King Harry Shotta, Garage Queen and
                    So Solid Members Lisa Maffia and Romeo, DJ Pied Piper and more. We look forward
                    to continuing to provide amazing events and opportunities for Brighton's local
                    talent.
                  </p>
                  <br />
                  <h5>Are you an Artist or DJ</h5>
                  <p>
                    If you struggling to get yourself out there or you simplify do not know where to
                    turn or how to get started then look no further, we are always scouting fresh
                    talent
                  </p>
                  <br />
                  <h5>Lorem Ipsum is simply dummy text of the printing</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                  {/* end of about decription */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* start of team images */}
        <div className="container text-center">
          <div className="row align-items-end">
            <div className="col col-md-4">
              <div className="card " style={{ width: '100%' }}>
                <img src={Pic} className="card-img-top" alt="..." />
                <div className="card-body">
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
                </div>
              </div>
            </div>

            <div className="col col-md-4">
              <div className="card " style={{ width: '100%' }}>
                <img src={Pic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title ">James</h5>
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
                </div>
              </div>
            </div>

            <div className="col col-md-4">
              <div className="card " style={{ width: '100%' }}>
                <img src={Pic} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title ">Bady</h5>
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
                </div>
              </div>
            </div>
          </div>
        </div>
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
