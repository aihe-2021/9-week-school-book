import React from 'react'
import { Link } from 'react-router-dom'
import App from './App'

function Intro () {
  return (
    <>
      <img src='../../images/9WeekLogo.png' />
      <h3>Like a High School Yearbook for Bootcamp</h3>
      <Link to='/home'>HOME</Link>
    </>
  )
}

export default Intro
