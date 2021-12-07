const knex = require('knex')
const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[env]

const allCommentsData = ['id', 'userId', 'comment_by_user', 'date_posted', 'comment']

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
      console.error(err)
      throw err
    })
}

// comment stuff

function getComments (userId, db = connection) {
  console.log(userId)
  return db('comments').select(allCommentsData).where({ userId })
}

function getComment (commentId, db = connection) {
  return db('comments').select(allCommentsData).where({ id: commentId }).first()
}

function addComment (userId, comment, commentBy, db = connection) {
  const datePosted = new Date(Date.now())
  return db('comments')
    .insert({
      userId: userId,
      comment,
      date_posted: datePosted,
      comment_by_user: commentBy
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
