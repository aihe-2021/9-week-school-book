const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.patch('/:commentId', (req, res) => {
  const id = req.params.commentId
  const comment = req.body.comment
  db.updateComment(id, comment)
    .then((comment) => {
      res.json(comment)
      return null
    })
    .catch(e => {
      console.log(e.message)
      res.status(500).json({ message: 'database error' })
    })
})

router.delete('/:commentId', (req, res) => {
  const id = req.params.commentId
  db.deleteComment(id)
    .then((numDeleted) => {
      console.log(numDeleted)
      res.status(200)
      return null
    })
    .catch(e => {
      console.log(e.message)
      res.status(500).json({ message: 'database error' })
    })
})

module.exports = router
