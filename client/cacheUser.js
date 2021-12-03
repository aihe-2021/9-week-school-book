import { getAuth } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUser, clearUser } from './actions/userInfo'

import { verifyUser } from './apis'

export function cacheUser () {
  const auth = getAuth()
  const dispatch = useDispatch()

  // const t = firebase.auth().currentUser.getToken()

  auth.onAuthStateChanged(user => {
    if (user) {
      // METHOD A //
      user.getIdToken()
        .then(token => verifyUser(token))
        .catch(e => console.log(e))

      // METHOD B //
      // const token = user.auth.currentUser.accessToken

      // console.log(token)
      // const userData = {
      //   token,
      //   name: user.displayName,
      //   email: user.email,
      //   image: user.photoURL,
      //   authID: user.uid,
      //   githubUsername: user.reloadUserInfo.screenName
      // }
      // dispatch(setUser(userData))
      // verifyUser(token)
      // console.log(token)
    }
  })
}

//     user.getIdToken()
//       .then(token => {
//         console.log('this is the chached token', token)
//         const userData = {
//           token,
//           name: user.displayName,
//           email: user.email,
//           image: user.photoURL,
//           authID: user.uid,
//           githubUsername: user.reloadUserInfo.screenName
//         }
//         // console.log(userData)
//         dispatch(setUser(userData))
//         // verifyUser(token)

//         return null
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   } else {
//     console.log('user logged out')
//     dispatch(clearUser())
//   }
//   }
//   )
// }
