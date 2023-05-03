import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <Container>
      <div className="footer-logo bg-light text-dark text-center" style={{ height: '50px' }}>
        <Row>
          <Col>
            <div>M.A.N @2023</div>

          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Footer
