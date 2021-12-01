const express = require('express')
const path = require('path')

const server = express()
const userRoutes = require('./routes/users')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/users', userRoutes)

module.exports = server
