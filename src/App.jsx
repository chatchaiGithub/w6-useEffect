import React from 'react'
import { NavLink, Routes, Route } from 'react-router'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Api from './pages/Api'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </div>
  )
}

export default App