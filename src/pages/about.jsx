import * as React from 'react'
import { Layout } from '../components/Layout'

function AboutPage() {
  return (
    <Layout>
      <h1>About</h1>
      <p>Bla bla</p>
    </Layout>
  )
}

export default AboutPage

export function Head() {
  return <title>About Us</title>
}
