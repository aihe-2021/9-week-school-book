import { SET_USER, CLEAR_USER } from '../actions/user'

const emptyUser = []

export function user (state = emptyUser, action) {
  switch (action.type) {
    case SET_USER:
      console.log(action.user)
      return action.user
    case CLEAR_USER:
      return emptyUser
    default :
      return state
  }
}
