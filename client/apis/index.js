import request from 'superagent'
const userURL = '/api/v1/users'

export function getUsers () {
  return request
    .get(userURL)
    .then(res => res.body)
}


export function createUser (formData) {
  return request.post('/api/v1/users/add')
    .send(formData) // send down the actual data user input in the form on browser
    .then(res => res.body) // send back the whole new form
}

