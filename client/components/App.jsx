import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { firebaseConfig } from '../firebase-config'
import { cacheUser } from '../cacheUser'
import { initializeApp } from 'firebase/app'
import Navbar from './Navbar'
import Home from './Home'
import User from './User'
import Intro from './Intro'
import Footer from './Footer'

function App () {
  initializeApp(firebaseConfig)
  cacheUser()

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
