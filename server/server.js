const express = require('express')
const server = express()
const path = require('path')
const { handleRoutes } = require('./firebaseConfig/firebaseApp')
const loginSignup = require('./routes/user')

const users = require('./routes/users')
const comments = require('./routes/comments')

const protectedRoutes = [
  'login',
  'POST',
  'PATCH',
  'DELETE'
]
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

// THIS SERVER.USE NEEDS TO BE BEFORE ALL OF THE ROUTES TO WORK
server.use(handleRoutes(protectedRoutes))

server.use('/api/v1/users', users)
server.use('/api/v1/comments', comments)
server.use('/api/v1/login', loginSignup)

module.exports = server
