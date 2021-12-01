import React, { useEffect } from 'react'
import Home from './Home'
import User from './User'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  useEffect(() => {

  }, [])

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/:id' element={<User />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
