const express = require('express')
const router = express.Router()
const checkJwt = require('../firebaseConfig/chekJwt')

router.get('/', checkJwt, (req, res) => {
  const uid = req.user?.uid // this verifies the user and sends back the id
  // check the db and add the user
  console.log(req.user)
  res.json(uid)
})

module.exports = router
