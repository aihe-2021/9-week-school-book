const express = require('express')
const path = require('path')

const server = express()
const userRoute = require('./routes/userRoute')

const userPicUpload = require('./routes/userRoute')

server.use('/profilePic', userPicUpload)
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoute)

module.exports = server
