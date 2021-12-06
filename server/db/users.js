const knex = require('knex')
const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[env]

const connection = knex(config)

const allCommentsData = ['id', 'userId', 'datePosted', 'comment']

// RETURN ALL USERS

function getUsers (db = connection) {
  return db('users').select()
}

// RETURN  ONE USER
function getOne (oneId, db = connection) {
  return db('users')
    .select()
    .where('id', oneId)
    .first()
    .then(user => { return user })
    .catch(e => { throw new Error(`User with id ${oneId} not found`) })
}

function updateUser (id, data, db = connection) {
  const keys = Object.keys(data)
  const newData = {}
  for (let i = 0; i < keys.length; i++) {
    if (data[keys[i]] !== '') {
      newData[keys[i]] = data[keys[i]]
    }
  }
  return db('users')
    .update(newData)
    .where({ id })
    .then(() => {
      return getOne(id, db)
    })
    .catch(err => {
      console.error(err)
      throw err
    })
}

// comment stuff

function getComments (postId, db = connection) {
  return db('comments').select(allCommentsData).where({ postId })
}

function getComment (commentId, db = connection) {
  return db('comments').select(allCommentsData).where({ id: commentId }).first()
}

function addComment (postId, comment, db = connection) {
  const datePosted = new Date(Date.now())
  return db('comments')
    .insert({
      post_id: postId,
      comment,
      date_posted: datePosted
    })
    .then(([commentId]) => {
      return getComment(commentId)
    })
}

function updateComment (commentId, comment, db = connection) {
  return db('comments')
    .update({ comment })
    .where({ id: commentId })
    .then(() => {
      return getComment(commentId)
    })
}

function deleteComment (commentId, db = connection) {
  return db('comments').where({ id: commentId }).delete()
}

function deleteCommentsByUserId (userId, db = connection) {
  return db('comments').where({ user_id: userId }).delete()
}

module.exports = {
  getUsers,
  getOne,
  updateUser,
  getComments,
  getComment,
  addComment,
  updateComment,
  deleteComment,
  deleteCommentsByUserId
}
