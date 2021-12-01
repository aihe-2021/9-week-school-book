const express = require('express')
const db = require('../db/users')

const router = express.Router()

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

module.exports = router
