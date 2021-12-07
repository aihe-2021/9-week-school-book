const express = require('express')
const db = require('../db/users')
const router = express.Router()
// const checkJwt = require('../firebaseConfig/checkJwt')

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
      res.status(200)
      return null
    })
    .catch(e => {
      console.log(e.message)
      res.status(500).json({ message: 'database error' })
    })
})

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


router.post('/:userId', (req, res) => {
  const id = req.params.userId
  const comment = req.body.comment
  const { name, uid, email, picture, token } = req.user

  db.addComment(id, comment, uid)
    .then((commentId) => db.getComment(commentId))
    .then((comment) => res.json(comment))
    .catch(e => {
      console.log(e.message)
      res.status(500).json({ message: 'database error' })
    })
})

module.exports = router
