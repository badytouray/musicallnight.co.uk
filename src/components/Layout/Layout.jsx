import * as React from 'react'
import { Navigation } from './Navigation'

export function Layout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  )
}
