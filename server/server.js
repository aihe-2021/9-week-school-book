const express = require('express')
const path = require('path')

const server = express()
const users = require('./routes/users')

// this require is redundant
const userPicUpload = require('./routes/users')

// if you really want to duplicate user routes then just use users from line 5
// my sense is you probably want to delete this and just change front end to use the api routes below
server.use('/profilePic', userPicUpload)
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', users)

module.exports = server
