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
      console.log(user)
      return user
    })
}

export function updateUser (id, user) {
  return request
    .patch(`${userURL}/${id}`)
    .send(user)
    .then(res => {
      return res.body
    })
}

// comments functions

export function getCommentsByUserId (userId) {
  return request.get(`/api/v1/comments/${userId}`)
    .then(res => {
      return res.body
    })
}

export function addCommentByUserId (userId, comment, token) {
  return request.post(`/api/v1/comments/${userId}`)
    .send({ comment })
    .set('authorization', `Bearer ${token}`)
    .then(res => {
      console.log(res.body)
      return res.body
    })
}

export function updateComment (comment) {
  return request.patch(`${userURL}/comments/${comment.id}`)
    .send(comment)
    .then(res => {
      return res.body
    })
}

export function deleteComment (commentId) {
  return request.del(`${userURL}/comments/${commentId}`)
    .then(res => res)
}
