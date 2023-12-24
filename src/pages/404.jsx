import * as React from 'react'
import { Layout } from '../components/Layout'

function NotFoundPage() {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p className="lead">Sorry 😔, we couldn’t find what you were looking for.</p>
    </Layout>
  )
}

export default NotFoundPage

export function Head() {
  return <title>Page not found</title>
}
