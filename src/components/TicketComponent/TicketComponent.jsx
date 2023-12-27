import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export default function TicketComponent() {
  const showTicket = url => {
    window.open(url, '_blank', 'noreferrer')
  }

  return (
    <Container fluidclassName="bg-light p-3 m-3">
      <Row>
        <Col>
          <p className="fs-5">Tickets from £8</p>
        </Col>
        <Col>
          <Button
            size="lg"
            className="btn-danger"
            onClick={() =>
              showTicket(
                'https://www.skiddle.com/whats-on/Brighton/The-Volks-Nightclub/MAN---500-Dj-BATTLE--Nicky-Blackmarket--Ego-Trippin/36674616/'
              )
            }
          >
            Buy Now
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
