import React from 'react'
import { Container } from 'react-bootstrap'
import { Layout } from '../components/Layout'

function Contact() {
  return (
    <Layout>
      <Container>
        <div
          className="container  position-absolute top-50 start-50 translate-middle end-0 p-2"
          style={{ width: '50%', height: '50%' }}
        >
          <div className="row mx-auto ">
            <div className="col bg-light  ">
              <h1 className="text-center">Contact us</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has
              </p>
              <p>Email: info@musicallnight.co.uk</p>
              <p className="h5">Tel: +44 7533 7800 33</p>
              <button type="button" className="btn btn-danger">
                Send email
              </button>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Contact
