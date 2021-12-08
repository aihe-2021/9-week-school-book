import { useDispatch } from 'react-redux'
import { clearUser, authenticateUser } from './actions/user'
import { getAuth, signInWithPopup, setPersistence, browserSessionPersistence, GithubAuthProvider, signOut } from 'firebase/auth'

export function listenForUser () {
  const auth = getAuth()
  const dispatch = useDispatch()

  auth.onAuthStateChanged((user) => {
    if (user) {
      return user.getIdToken()
        .then(token => {
          return dispatch(authenticateUser(token))
        })
        .catch(error => console.log(error)) // if the user was not verified => log error signing in to the account
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
    .catch((error) => {
      const errorMessage = error.message
      console.log(errorMessage)
    })
}

export function logout () {
  const auth = getAuth()
  auth.signOut()
    .then((result) => result)
    .catch((error) => console.log(error.message))
}
