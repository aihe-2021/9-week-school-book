import request from 'superagent'
const userURL = '/api/v1/users'
const userVerification = '/api/v1/login'
const comments = '/api/v1/comments'

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

export function updateUser (id, user, token) {
  return request
    .patch(`${userURL}/${id}`)
    .set('authorization', `Bearer ${token}`)
    .send(user)
    .then(res => {
      return res.body
    })
}

// comments functions

export function getCommentsByUserId (userId) {
  return request.get(`${comments}/${userId}`)
    .then(res => {
      console.log('these are the api comments', res.body)
      return res.body
    })
}
// working

export function addCommentByUserId (userId, comment, token) {
  return request.post(`${comments}/${userId}`)
    .send({ comment })
    .set('authorization', `Bearer ${token}`)
    .then(res => res.body)
}

export function updateComment (comment, token) {
  return request.patch(`${comments}/${comment.id}`)
    .set('authorization', `Bearer ${token}`)
    .send(comment)
    .then(res => {
      return res.body
    })
}

export function deleteComment (commentId, token) {
  return request.del(`${comments}/${commentId}`)
    .set('authorization', `Bearer ${token}`)
    .then(res => res)
}
