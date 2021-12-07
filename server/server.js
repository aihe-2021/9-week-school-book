const express = require('express')
const path = require('path')

const server = express()
const users = require('./routes/users')
const loginSignup = require('./routes/user')

// const userPicUpload = require('./routes/users')

// middleware
// server.use => user jwt

server.use('/profilePic', users)
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', users) // check for middleware
server.use('/api/v1/login', loginSignup)

module.exports = server

// if you use browser router then you need to return a wildcard
