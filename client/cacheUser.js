import { getAuth } from 'firebase/auth'

export function cacheUser () {
  const auth = getAuth()

  auth.onAuthStateChanged(user => {
    if (user) {
      console.log('user logged in', user)
      user.getIdToken()
        .then(token => {
          console.log(token)
          return null
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      console.log('user logged out')
    }
  })
}
