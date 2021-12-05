import request from 'superagent'
const userURL = '/api/v1/users'
const userVerification = '/api/v1/userverification'

export function getUsers () {
  return request
    .get(userURL)
    .then(res => res.body)
}

export function verifyUser (token) {
  return request
    .get(userVerification)
    // .set('authorization', 'Bearer 1234')
    .set('authorization', `Bearer ${token}`)
    .then(res => {
      console.log('this is the api route', res.body)
      const user = res.body
      return user
    })
}
