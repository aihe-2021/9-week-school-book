const knex = require('knex')
const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[env]

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

module.exports = {
  getUsers,
  getOne
}
