import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Home'
import User from './User'
import Intro from './Intro'

function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Intro />} />
          <Route path='/home' element={<Home />} />
          <Route path='/home/users/:id' element={<User />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
