import { combineReducers } from 'redux'

import users from './users'
import { userInfo } from './userInfo'

export default combineReducers({
  users,
  userInfo
})
