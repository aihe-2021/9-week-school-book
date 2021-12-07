import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { listenForUser } from '../firebaseAuth'
import Navbar from './Navbar'
import Home from './Home'
import User from './User'
import Intro from './Intro'
import Footer from './Footer'
import Comments from './Comments'
import Comment from './Comment'
import { fetchUsers } from '../actions'

function App () {
  listenForUser()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/users/:id/*' element={<User />} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Intro />} />
          {/* <Route path='/users/:userId/comments/:commentId' element={<User />} /> */}
          <Route path='/users/:userId/comments' element={<Comments />} />
          <Route path-='/users/:id/comments/:commentid' element={<Comment />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
