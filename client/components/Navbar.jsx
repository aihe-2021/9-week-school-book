import React from 'react'
import { Link } from 'react-router-dom'
import { login, logout } from '../firebaseAuth'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

export default function Navbar () {
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
          <IfNotAuthenticated>
            <li>
              <button onClick={login} className='navbar__right'>Signup &#8739; Login</button>
            </li>
          </IfNotAuthenticated>
          <IfAuthenticated>
            <li>
              <button onClick={logout} className='navbar__right'>Sign Out</button>
            </li>
          </IfAuthenticated>
        </ul>
      </nav>

    </>
  )
}
