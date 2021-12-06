const express = require('express')
const db = require('../db/users')
const router = express.Router()

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

router.patch('/:id', (req, res) => {
  const { name, email, location, quote, skills, facebook, linkedin, twitter, instagram } = req.body
  const id = req.params.id
  db.updateUser(id, { name, email, location, quote, skills, facebook, linkedin, twitter, instagram })
    .then((updatedUser) => {
      res.json(updatedUser)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

// comment stuff

router.get('/:userId/comments', (req, res) => {
  const id = req.params.userId
  db.getComments(id)
    .then((comments) => {
      res.json(comments)
      return null
    })
    .catch(e => {
      console.log(e.message)
      res.status(500).json({ message: 'database error' })
    })
})

router.post('/:userId/comments', (req, res) => {
  const id = req.params.userId
  const comment = req.body.comment
  db.addComment(id, comment)
    .then((comment) => {
      res.json(comment)
      return null
    })
    .catch(e => {
      console.log(e.message)
      res.status(500).json({ message: 'database error' })
    })
})

module.exports = router
