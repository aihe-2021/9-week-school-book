import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { listenForUser } from '../firebaseAuth'
import Navbar from './Navbar'
import Home from './Home'
import User from './User'
import Intro from './Intro'
import Footer from './Footer'
import { fetchUsers } from '../actions'

function App () {
  listenForUser()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <>
    <h1>Test</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/home/users/:id' element={<User />} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Intro />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
