const knex = require('knex')
const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[env]

// const allCommentsData = ['id', 'userId', 'comment_by_user', 'date_posted', 'comment']

const connection = knex(config)

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
      throw err
    })
}

function getComments (userId, db = connection) {
  return db('users')
    .join('comments', 'users.authId', 'comments.comment_by_user')
    .select('comments.id as id', 'users.name as name', 'date_posted as date', 'comments.comment as comment')
    .where('comments.userId', userId)
}

function getComment (commentId, db = connection) {
  return db('comments')
    .join('users', 'comments.comment_by_user', 'users.authId')
    .select()
    .where({ 'comments.id': commentId })
    .first()
}

function addComment (userId, comment, commentBy, db = connection) {
  const datePosted = new Date(Date.now())
  return db('comments')
    .insert({
      userId: userId,
      comment,
      date_posted: datePosted,
      comment_by_user: commentBy
    }, 'id')
}

function updateComment (commentId, comment, token, db = connection) {
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
