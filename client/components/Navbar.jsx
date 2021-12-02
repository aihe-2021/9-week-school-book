import React from 'react'
import { Link } from 'react-router-dom'

function Navbar () {
  return (
    <>
      <nav>
        <ul className='navbar'>
          <li>
            <Link to='/'>&#x0007B; 9 WEEK BOOK &#x0007D;</Link>
          </li>
          <li>
            <Link to='/home'>Aihe - 2021</Link>
          </li>
          <li>
            <Link className='navbar__right' to='/'>Login</Link>
          </li>
        </ul>
      </nav>


    </>
  )
}

export default Navbar
