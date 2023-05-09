import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const gitHubUrl = 'https://jsonplaceholder.typicode.com/photos'

function Phones() {
  const [getPhone, setGetPhone] = useState({})

  useEffect(() => {
    getGitHubUserWithFetch()
  }, [])

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl)
    const jsonData = await response.json()
    setGetPhone(jsonData)
    console.log(getPhone)
  }

  return (
    <Container>
      <Row>
        <Col>
          {/* <ul>
            {getPhone &&
              getPhone.map(({ id, title }) => (
                <li key={id}>
                  <h1>{getPhone.title}</h1>
                </li>
              ))}
          </ul> */}
        </Col>
      </Row>
    </Container>
  )
}

export default Phones
