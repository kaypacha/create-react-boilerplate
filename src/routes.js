import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomeScreen, AboutScreen } from 'views'
import { routesPath } from 'constants.js'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routesPath.HOME} element={<HomeScreen />} />
        <Route path={routesPath.ABOUT} element={<AboutScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
