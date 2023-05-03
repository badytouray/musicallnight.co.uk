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
              showTicket('https://fixr.co/event/bring-your-usb-sun-7th-may-tickets-340368492?')
            }
          >
            Buy Now
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
