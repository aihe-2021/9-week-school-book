import React from 'react'
import { useSelector } from 'react-redux'

export function IfAuthenticated ({ children }) {
  const user = useSelector(state => state.user)
  return user.token
    ? <>{ children }</>
    : null
}

export function IfNotAuthenticated ({ children }) {
  const user = useSelector(state => state.user)
  return !user.token
    ? <>{ children }</>
    : null
}
