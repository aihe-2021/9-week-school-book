const express = require('express')
const db = require('../db/users')
const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => res.json(users))
    .catch(e => res.status(500).send(e.message))
})

router.get('/:id', (req, res) => {
  db.getOne(req.params.id)
    .then(user => res.json(user))
    .catch(e => res.status(500).send(e.message))
})

router.patch('/:id', (req, res) => {
  const { name, email, location, quote, skills, facebook, linkedin, twitter, instagram } = req.body
  const id = req.params.id
  db.updateUser(id, { name, email, location, quote, skills, facebook, linkedin, twitter, instagram })
    .then((updatedUser) => res.json(updatedUser))
    .catch(e => res.status(500).send(e.message))
})

module.exports = router
