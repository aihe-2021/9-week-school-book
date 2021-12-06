const express = require('express')
const path = require('path')

const server = express()
const users = require('./routes/users')
const comments = require('./routes/comments')
const loginSignup = require('./routes/user')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', users)
server.use('/api/v1/comments', comments)
server.use('/api/v1/login', loginSignup)

module.exports = server
