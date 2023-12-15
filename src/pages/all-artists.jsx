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
      <h1 className="text-center mt-5">Artists to watch 2023</h1>

      <Container className="mt-3 justify-content-around">
        <Row>
          <Col lg="6">
            <GatsbyImage image={data.bobbie.childImageSharp.gatsbyImageData} />
          </Col>

          <Col lg="6">
            <h3 className="mt-5">Bobbie Tee</h3>
            <p className="align-self-center mt-5">
              Our fantastic Aerialists know how to mesmerize their audience. From a hoop, silks or
              trapeze, our aerial acrobats put on a show that will have the audience look in
              amazement as our performers dance through the air. We are able to tailor our
              performances to the specific mood of your event, and if you are planning your event
              outside or in an area with no rigging, we are able to supply free-standing rigs of
              lyra lollipops.
            </p>
            <a
              href="https://instagram.com/bobbieteeuk"
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
            <h3 className="mt-5">Zebberz</h3>
            <p className="align-self-center mt-5">
              Our Bubbleologists can create bubble experiences from clouds of tiny bubbles to huge
              dragonesque bubbles and everything in between. Children and adults alike will be
              amazed by the entertainment provided by our Bubbleology performers. They are the
              perfect addition to any family event and we can even make the experience interactive
              and get little ones involved in making their own bubbly creations.
            </p>
            <a
              href="https://www.instagram.com/zebberz"
              target="_blank"
              rel="noreferrer"
              className="m-2 p-2"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <RiInstagramFill size="5em" /> @ ZEBBERZ
            </a>
          </Col>
          <Col lg="6">
            <GatsbyImage image={data.zebberz.childImageSharp.gatsbyImageData} />
          </Col>
        </Row>

        {/* // 3RD SECTION */}

        <Row className=" mt-3 d-flex justify-content-evenly ">
          <Col lg="6">
            <GatsbyImage image={data.mynx.childImageSharp.gatsbyImageData} />
          </Col>

          <Col lg="6">
            <h3 className="mt-5">Mynx</h3>
            <p className="mt-5">
              As light technology advances, so does the entertainment provided by our LED Dancers.
              Wowing audiences with their stunning dance moves enhanced by an awe-inspiring visual
              display provided by the LED lights. It is truly a spectacle to behold. Our
              professional dancers are able to dress to perfectly complement your event and ensure
              that the audience knows that yours is the best party in town!
            </p>
            <a
              href="https://www.instagram.com/mynx.uk"
              target="_blank"
              rel="noreferrer"
              className="m-2 p-2"
              style={{ color: 'inherit', textDecoration: 'inherit' }}
            >
              <RiInstagramFill size="5em" /> @ MYNX.UK
            </a>
          </Col>
        </Row>

        {/* // 4TH SECTION */}

        <Row className=" mt-3 d-flex justify-content-evenly">
          <Col lg="6">
            <h3 className="mt-5 ">Dial</h3>
            <p className="mt-5">
              Dail started off 6 years ago messing around getting ideas for “cool drops” but then
              decided he wanted to take producing seriously. Starting off with making EDM then
              decided to make Drum and Bass as it has always been in his heart and wanted to make
              the music that he loves. He has been played on Radio 1, Been at the top of the Hypedit
              DNB chart 3 times and has managed to rack in over 700k plays over all platforms.
            </p>
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
    zebberz: file(relativePath: { eq: "artists/zebberz.png" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }
    artists: file(relativePath: { eq: "artists/dj-bady.png" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }
    artists: file(relativePath: { eq: "artists/dj-bady.png" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }
    artists: file(relativePath: { eq: "artists/dj-bady.png" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }
    artists: file(relativePath: { eq: "artists/dj-bady.png" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }
    artists: file(relativePath: { eq: "artists/dj-bady.png" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }
    artists: file(relativePath: { eq: "artists/dj-bady.png" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }
    artists: file(relativePath: { eq: "artists/dj-bady.png" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }

    dial: file(relativePath: { eq: "artists/Dial.png" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }
    mynx: file(relativePath: { eq: "artists/mynx.png" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }
    dan: file(relativePath: { eq: "artists/8d.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 540)
      }
    }
  }
`
