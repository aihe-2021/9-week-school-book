import request from 'superagent'
const userURL = '/api/v1/users'

export function getUsers () {
  return request
    .get(userURL)
    .then(res => res.body)
}
