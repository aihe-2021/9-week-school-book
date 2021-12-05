import { verifyUser } from '../apis/index'
export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'

export function setUser (user) {
  return {
    type: SET_USER,
    user
  }
}

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}

export function authenticateUser (token) {
  console.log('authenticate user')
  return (dispatch) => {
    console.log('userinfo')
    return verifyUser(token)
      .then(users => {
        console.log('user has been verified as', users)
        return dispatch(setUser(users))
      })
      .catch(e => {
        console.log(e)
      })
  }
}
