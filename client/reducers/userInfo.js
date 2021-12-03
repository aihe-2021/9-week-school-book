import { SET_USER, CLEAR_USER } from '../actions/userInfo'

const emptyUser = {
  token: '',
  name: '',
  email: '',
  image: '',
  authID: '',
  githubUsername: ''
}

export function userInfo (state = emptyUser, action) {
  switch (action.type) {
    case SET_USER:
      return action.user
      // break
    case CLEAR_USER:
      return emptyUser
      // break
    default :
      return state
      // break
  }
}
