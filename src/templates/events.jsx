import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Layout } from '../components/Layout'
import TicketComponent from '../components/TicketComponent/TicketComponent'

function EventsTemplate({ data }) {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <Container className="m-3 p-3 ">
        <Row>
          <Col className=" pt-5" sm={12} md={6} lg={6}>
            {/* <h1>{frontmatter?.name}</h1> */}
            <GatsbyImage
              image={frontmatter.image?.childImageSharp?.gatsbyImageData}
              alt={data?.markdownRemark.frontmatter?.name}
            />
          </Col>
          <Col className="fs-5 pt-5" style={{ borderRadius: '5px' }} xs={12} sm={12} md={6} lg={6}>
            <p>{frontmatter?.intro}</p>
            <p>{frontmatter?.date}</p>
            <p>{frontmatter?.venue}</p>
            <p>{frontmatter?.location}</p>
            {/* <div className="text-left">
              <p>Tickets from £8</p>
              <Button
                className="btn-right"
                size="lg"
                as="a"
                // href={frontmatter?.ticket}
                // target="_blank"
                href="https://fixr.co/event/bring-your-usb-sun-7th-may-tickets-340368492?"
              >
                Buy Tickets
              </Button>
            </div> */}
            <Col className="m-3" xs={12} sm={12} md={6} lg={8}>
              <TicketComponent />
            </Col>

            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <h3>Other events</h3>
          </Col>
        </Row> */}
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
        ticket
      }
    }
  }
`
