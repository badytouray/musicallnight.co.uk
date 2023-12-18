import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
// import Fade from 'react-reveal/Fade';
import { Col, Row } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { RiInstagramFill } from 'react-icons/ri'
import { Layout } from '../components/Layout/Layout'

function AllParts({ data }) {
  return (
    <Layout>
      <h1 className="text-center mt-5">Artists to watch 2024</h1>

      <Container className="mt-3 justify-content-around">
        <Row>
          <Col lg="6">
            <GatsbyImage image={data.bosio.childImageSharp.gatsbyImageData} />
          </Col>

          <Col lg="6">
            <h3 className="mt-5">Bosio</h3>
            <p className="align-self-center mt-5">Follow on Instagram and and enjoy the journey</p>
            <a
              href="https://www.instagram.com/bosio.dnb"
              target="_blank"
              rel="noreferrer"
              className="m-2 p-2"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <RiInstagramFill size="5em" /> @ BOBBIETEEUK
            </a>
          </Col>
        </Row>
        {/* // 2ND SECTION */}
        <Row className="mt-3 d-flex justify-content-evenly">
          <Col lg="6">
            <h3 className="mt-5">Cozmos</h3>
            <p className="align-self-center mt-5">Follow on Instagram and and enjoy the journey</p>
            <a
              href="https://www.instagram.com/cozmosdnb"
              target="_blank"
              rel="noreferrer"
              className="m-2 p-2"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <RiInstagramFill size="5em" /> @ COZMOS
            </a>
          </Col>
          <Col lg="6">
            <GatsbyImage image={data.cozmos.childImageSharp.gatsbyImageData} />
          </Col>
        </Row>
        {/* // 3RD SECTION */}
        <Row className=" mt-3 d-flex justify-content-evenly ">
          <Col lg="6">
            <GatsbyImage image={data.beano.childImageSharp.gatsbyImageData} />
          </Col>

          <Col lg="6">
            <h3 className="mt-5">Beano</h3>
            <p className="align-self-center mt-5">Follow on Instagram and and enjoy the journey</p>
            <a
              href="https://www.instagram.com/beanodnb"
              target="_blank"
              rel="noreferrer"
              className="m-2 p-2"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <RiInstagramFill size="5em" /> @ BEANODNB
            </a>
          </Col>
        </Row>
        {/* // 4TH SECTION */}
        <Row className=" mt-3 d-flex justify-content-evenly">
          <Col lg="6">
            <h3 className="mt-5 ">Dial</h3>
            <p className="align-self-center mt-5">Follow on Instagram and and enjoy the journey</p>
            <a
              href="https://www.instagram.com/dialdnbuk"
              target="_blank"
              rel="noreferrer"
              className="m-2 p-2"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <RiInstagramFill size="5em" /> @ DIALDNBUK
            </a>
          </Col>

          <Col lg="6">
            <GatsbyImage image={data.dial.childImageSharp.gatsbyImageData} />
          </Col>
        </Row>
        {/* // 5TH SECTION */}
        <Row className=" mt-3 d-flex justify-content-evenly">
          {/* <Col lg="6">
            <GatsbyImage image={data.dan.childImageSharp.gatsbyImageData} />
          </Col>
          <Col lg="6">
            <h3 className="mt-5 ">Psyclone</h3>
            <p className="mt-5">
              Hailing from Southern California, and now residing in Brighton, 8D comes correct with
              a multi-genre flex from DnB, Bass House, Disco, Breaks, and 140. With international DJ
              touring accolades and production nods from “Artist to watch 2023” by Beatport and
              consistent “Staff Picks” from Juno downloads, 8D has shown the world he is the
              complete DJ/Producer. He brings long mixes, big tunes, and good vibes to every set,
              while keeping the crowd on their toes, and their rumps shaking. You’ll never know what
              to expect from 8D except a consistently amazing set that shouldn’t be missed.
            </p>
            <a
              href="https://www.instagram.com/dj8dmusic"
              target="_blank"
              rel="noreferrer"
              className="m-2 p-2"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <RiInstagramFill size="5em" /> @ 8D
            </a>
          </Col> */}
        </Row>
      </Container>
    </Layout>
  )
}

export default AllParts

export const pageQuery = graphql`
  query Services {
    bobbie: file(relativePath: { eq: "artists/bobbie-tee.png" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }
    beano: file(relativePath: { eq: "artists/beano.png" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }
    cozmos: file(relativePath: { eq: "artists/cozmos.png" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }
    bosio: file(relativePath: { eq: "artists/bosio.png" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }
    dial: file(relativePath: { eq: "artists/Dial.png" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }
  }
`
