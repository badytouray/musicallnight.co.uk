import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { MdAssignmentInd } from 'react-icons/md'
import { Layout } from '../components/Layout'
// import Pic from '../images/artists/open-decks.png'

function OpenDecks({ data }) {
  return (
    <Layout>
      <Container
        className="m-3"
        // style={{ marginLeft: 'auto', marginRight: 'auto' }}
      >
        <Row>
          <Col className="m-3">
            <GatsbyImage image={data.sign.childImageSharp.gatsbyImageData} />
          </Col>
          <Col sm={12} md={6} lg={6} className="m-3">
            <h1 className="text-center">Join us every Monday</h1>
            <p className="text-center fs-4 mt-3">
              Attention all aspiring musicians & hustlers! Have you been looking for an opportunity
              to get your music and hustle out there? Play at iconic Brighton underground venue or
              learning how to make it out on your own? Join us every Monday on The Bady Show Live on
              Slack city in Brighton for the Spin Cycle show between 7pm and 10pm, for some music,
              chats and good vibes. Check us out on Spotify and all major platforms
              {/* <Button className="m-3"> */}
              {/* </Button> */}
              <a
                href="https://www.buzzsprout.com/2313613/support"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'red', textDecoration: 'inherit' }}
                className="mt-3"
              >
                <MdAssignmentInd size="2em" /> (Support the community)
              </a>
            </p>

            <p>
              Connecting people while showcasing together is what we do and its the best place to
              start and continue growing your network. From producers, dj, rappers, singers, small
              business owners and those who have the hussle and drive.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default OpenDecks

export function Head() {
  return <title> Open Decks Session | Volks Nightclub</title>
}

export const pageQuery = graphql`
  query OpenDecks {
    sign: file(relativePath: { eq: "artists/bady-show.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 920)
      }
    }
  }
`
