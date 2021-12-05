import React from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, setPersistence, browserSessionPersistence, GithubAuthProvider, signOut } from 'firebase/auth'
import { verifyUser } from '../apis'

export default function Navbar () {
  function login () {
    const auth = getAuth()
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider)
      })

      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        // verifyUser(token)
        // console.log('provider token', token)
        // The signed-in user info.
        const user = result.user // get the uid from this obj

        return null
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
      })
      // )
  }

  function signout () {
    const auth = getAuth()
    auth.signOut().then((result) => {
      console.log('sign out sucessful')
      return null
    }).catch((error) => {
      console.log(error.message)
    })
  }

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
            <button onClick={login} className='navbar__right'>Login</button>
          </li>
          <li>
            <button onClick={signout} className='navbar__right'>Sign Out</button>
          </li>
        </ul>
      </nav>

    </>
  )
}
