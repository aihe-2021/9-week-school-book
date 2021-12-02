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

// CREATE NEW USER
router.post('/add', (req, res) => {
  // eslint-disable-next-line camelcase
  const {
    authId,
    name,
    cohort,
    email,
    location,
    Quote,
    githubLink,
    skills,
    facebook,
    linkedin,
    twitter,
    instagram
  } = req.body
  console.log(req.body)
  db.addUser({
    authId,
    name,
    cohort,
    email,
    location,
    Quote,
    githubLink,
    skills,
    facebook,
    linkedin,
    twitter,
    instagram
  })
    .then(result => {
      res.json(result)
      return null
    })
    .catch(e => {
      res.status(500).json({ message: 'database error' })
    })
})

// UPLOAD PHOTO:
router.post('/upload', uploadImage, upload)

module.exports = router
