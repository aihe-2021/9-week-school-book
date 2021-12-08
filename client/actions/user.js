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
  return (dispatch) => {
    return verifyUser(token)
      .then(users => dispatch(setUser(users)))
      .catch(error => error)
  }
}
