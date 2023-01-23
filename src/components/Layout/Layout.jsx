import * as React from 'react'
import Footer from './footer'
import { Navigation } from './Navigation'

export function Layout({ children }) {
  return (
    <>
      <Navigation />
      <div id="main">{children}</div>
      <Footer />
    </>
  )
}
