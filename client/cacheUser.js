import { getAuth } from 'firebase/auth'

export function cacheUser () {
  const auth = getAuth()

  auth.onAuthStateChanged(user => {
    if (user) {
      console.log('user logged in', user)
      user.getIdToken()
        .then(token => {
          const github
          console.log(token)
        }) //  use token to set the state
      // console.log(user.accessToken) // this is the access token
    // set the state for signed out
    // dispatch the token
    } else {
      console.log('user logged out')
      // set the state for signed out
      // console.log(user.accessToken) // this is the access token
    }
  })
}