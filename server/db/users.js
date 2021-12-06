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

module.exports = {
  getUsers,
  getOne,
  updateUser
}
