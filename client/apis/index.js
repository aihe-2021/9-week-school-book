import request from 'superagent'
const userURL = '/api/v1/users'
const userVerification = '/api/v1/login'

export function getUsers () {
  return request
    .get(userURL)
    .then(res => res.body)
}

export function verifyUser (token) {
  return request
    .get(userVerification)
    .set('authorization', `Bearer ${token}`)
    .then(res => {
      const user = res.body
      return user
    })
}
