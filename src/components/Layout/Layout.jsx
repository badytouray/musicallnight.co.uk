import * as React from 'react'
import Footer from './footer'
import { Navigation } from './Navigation'

export function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  )
}
