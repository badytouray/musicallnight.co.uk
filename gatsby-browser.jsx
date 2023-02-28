import React from 'react'
import { SSRProvider } from 'react-bootstrap'

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import './src/styles-global/base.scss'

export const wrapRootElement = ({ element }) => {
  return <SSRProvider>{element}</SSRProvider>
}

// Fix unwanted page transitions caused by smooth scrolling set in CSS.
export const onPreRouteUpdate = ({ prevLocation, location }) => {
  if (prevLocation && prevLocation.pathname !== location.pathname) {
    document.documentElement.style.scrollBehavior = 'auto'
  }
}
export const onRouteUpdate = () => {
  document.documentElement.style.scrollBehavior = ''
}
