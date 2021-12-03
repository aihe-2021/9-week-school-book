const express = require('express')
const db = require('../db/users')
const router = express.Router()
const { upload, uploadImage } = require('../controllers/userpiccontroller')

// GET ALL USERS
router.get('/', (req, res) => {
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

// GET ONE USER:  http://localhost:3000/api/v1/users/1
router.get('/:id', (req, res) => {
  db.getOne(req.params.id)
    .then(user => res.json(user))
    .catch(e => {
      console.log(e.message)
    })
})

// UPLOAD PHOTO:
router.post('/upload', uploadImage, upload)

router.patch('/:userId', (req, res) => {
  const { name, email, location, quote, skills, facebook, linkedin, twitter, instagram } = req.body
  const userId = req.params.userId
  db.updateUser(userId, { name, email, location, quote, skills, facebook, linkedin, twitter, instagram })
    .then((updatedUser) => {
      res.json(updatedUser)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

module.exports = router
