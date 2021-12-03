const express = require('express')
const path = require('path')

const server = express()
const users = require('./routes/users')
const userVerification = require('./routes/userVerification')

const userPicUpload = require('./routes/users')

server.use('/profilePic', userPicUpload)
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', users)
server.use('/api/v1/userverification', userVerification)

module.exports = server
