import React, { useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { cacheUser } from '../cacheUser'
import { firebaseConfig } from '../firebase-config'
import firebase, { initializeApp } from 'firebase/app'
import Navbar from './Navbar'
import Home from './Home'
import User from './User'
import Intro from './Intro'
import Footer from './Footer'

function App () {
  cacheUser()
  // initializeApp(firebaseConfig)

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
        <Footer />
      </Router>
    </>
  )
}

export default App
