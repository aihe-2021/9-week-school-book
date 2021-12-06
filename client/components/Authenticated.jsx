import React from 'react'
import { getAuth } from 'firebase/auth'

function isAuthenticated () {
  const auth = getAuth()
  // const athenticated = firebase.auth().currentUser
  console.log(auth)
  // return athenticated
  return true
}

// console.log(auth)
export function IfAuthenticated ({ children }) {
  return isAuthenticated()
    ? <>{ children }</>
    : null
}

export function IfNotAuthenticated ({ children }) {
  return !isAuthenticated()
    ? <>{ children }</>
    : null
}
