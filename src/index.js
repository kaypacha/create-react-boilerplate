import React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { reset } from 'utils'
import Router from './routes'
import reportWebVitals from './reportWebVitals'

const GlobalStyle = createGlobalStyle`
  ${reset}
`

const rootElement = document.getElementById('root')
render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>,
  rootElement
)

reportWebVitals()
