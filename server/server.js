const express = require('express')
const path = require('path')

const server = express()
const users = require('./routes/users')

// const userPicUpload = require('./routes/users')

server.use('/profilePic', users)
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', users)

module.exports = server
