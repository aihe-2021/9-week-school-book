// import { getAuth } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser, clearUser, authenticateUser } from './actions/userInfo'
import { getAuth, signInWithPopup, setPersistence, browserSessionPersistence, GithubAuthProvider, signOut } from 'firebase/auth'
// import { verifyUser } from '../apis'

import { verifyUser } from './apis'

export function listenForUser () {
  const auth = getAuth()
  const dispatch = useDispatch()

  auth.onAuthStateChanged((user) => {
    if (user) {
      user.getIdToken()
        .then(token => {
          dispatch(authenticateUser(token))
          return null
        })
        .catch(e => console.log(e)) // if the user was not verified => log error signing in to the account
    } else {
      dispatch(clearUser())
    }
  })
}

export function login () {
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
      console.log(user)

      return null
    })
    .catch((error) => {
      const errorMessage = error.message
      console.log(errorMessage)
    })
}

export function logout () {
  const auth = getAuth()
  auth.signOut().then((result) => {
    console.log('sign out sucessful')
    return null
  }).catch((error) => {
    console.log(error.message)
  })
}
