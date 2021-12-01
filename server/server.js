const express = require('express')
const path = require('path')

const server = express()
const userRoutes = require('./routes/users')

const userPicUpload = require('./routes/users')

server.use('/profilePic', userPicUpload)
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)

module.exports = server
