import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Layout } from '../components/Layout'

function Contact() {
  return (
    <Layout>
      <Container fluid className="d-flex align-items-center align-self-center">
        <Row className="justify-content-center">
          <Col md="6">
            <Card className="p-3">
              <h1 className="text-center">Contact us</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has
              </p>
              <p>Email: info@musicallnight.co.uk</p>
              <p className="h5">Tel: +44 7533 7800 33</p>
              <Button>Send email</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Contact
