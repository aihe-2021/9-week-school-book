import React, { useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar'
import Home from './Home'
import User from './User'
import Intro from './Intro'

function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home/users/:id' element={<User />} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Intro />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
