const express = require('express')
const db = require('../db/users')
const router = express.Router()
const { upload, uploadImage } = require('../controllers/userpiccontroller')

router.get('/home', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
      return null
    })
    .catch(e => {
      console.log(e.message)
      res.status(500).send('database error')
    })
})

router.post('/upload', uploadImage, upload)

module.exports = router
