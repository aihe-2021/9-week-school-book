const express = require('express')
const server = express()
const path = require('path')
const { handleRoutes } = require('./firebaseConfig/checkJwt')
const loginSignup = require('./routes/user')

const comments = require('./routes/comments')
const users = require('./routes/users')

const protectedRoutes = [
  'login',
  'POST'
]
// console.log(checkJwt)
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use(handleRoutes(protectedRoutes))
server.use('/api/v1/users', users)
server.use('/api/v1/comments', comments)

// server.use(checkJwt)
server.use('/api/v1/login', loginSignup)
// server.use(function (err, req, res, next) {
//   res.status(403).send(err.message)
// })

module.exports = server

// if you use browser router then you need to return a wildcard
