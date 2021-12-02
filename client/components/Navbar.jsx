import React from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, setPersistence, browserSessionPersistence, inMemoryPersistence, GithubAuthProvider, signOut } from 'firebase/auth'

function Navbar () {
  function login () {
    const auth = getAuth()
    // const auth = getAuth();
    // setPersistence(auth, inMemoryPersistence)
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        const provider = new GithubAuthProvider()
        return signInWithPopup(auth, provider)

        // .catch((error) => {
        //   const errorMessage = error.message
        //   console.log(errorMessage)
        // })
      })

      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result)
        const token = credential.accessToken

        // The signed-in user info.
        const user = result.user // get the uid from this obj

        // console.log(credential, user)
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
      // console.log(result)
      // console.log(token)
      // Sign-out successful.
      // console.log(auth)
      console.log('sign out sucessful')
      // console.log(auth)
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
            <Link to='/home'>Cohort</Link>
          </li>
          <li>
            <Link className='navbar__right' to='/'>Login</Link>
          </li>
        </ul>
      </nav>

      <footer>
        <p>@ Enspiral Dev Academy Alumni 2021</p>
      </footer>
    </>

  )
}

export default Navbar
