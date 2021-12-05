const knex = require('knex')
const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[env]

const connection = knex(config)

function checkUserIdExists (uid, db = connection) {
  return db('users')
    .count('authId')
    .where('authId', uid)
}

function checkUserNameExists (name, db = connection) {
  return db('users')
    .count('name')
    .where('name', name)
}

function updateUserId ({ name, authId, email }, db = connection) {
  return db('users')
    .update({ authId, email })
    .where('name', name)
}

function addUser (userObj, db = connection) {
  return db('users')
    .insert(userObj)
}

function getUserData ({ name, authId, image, email }, db = connection) {
  return db('users')
    .select()
    .where('authId', authId)
}

module.exports = {
  checkUserIdExists,
  checkUserNameExists,
  getUserData,
  updateUserId,
  addUser
}
