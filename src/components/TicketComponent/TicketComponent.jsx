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
            onClick={() => showTicket('https://fixr.co/event/man-dial-tickets-995222867?')}
          >
            Buy Now
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
