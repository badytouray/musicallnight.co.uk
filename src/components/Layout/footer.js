import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <Container>
      <div className="footer-logo bg-light text-dark text-center" style={{ height: '50px' }}>
        <Row>
          <Col>
            <a href="/faq">Instagram</a>
          </Col>
          <Col>
            <a href="/contact">Facebook</a>
          </Col>
          <Col>
            <a href="/">Youtube</a>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              M.A.N @2023
              <a
                className="btn btn-primary btn-lg btn-floating"
                style={{ backgroundColor: '#ac2bac' }}
                href="#!"
                role="button"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Footer
