const express = require('express')
// const { initializeApp, getAuth } = require('firebase-admin/app')
// const key = require('../private-key.json')
// const admin = require('firebase-admin')
// const projectId = 'firebase-adminsdk-7p0j0@test-1c7a3.iam.gserviceaccount.com'
// const serviceAccount = require('../firebaseConfig/serviceAccount.json')

// initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   projectId: 'test-1c7a3'
//   // projectId: projectId
// })

const checkJwt = require('../firebaseConfig/firebaseConfig')
// const { checkJwt } = require('../firebaseConfig/firebaseConfig')

const router = express.Router()

// const checkJwt = async (req, res, next) => {
//   const token = req.headers.authorization.split(' ')[1]
//   try {
//     const user = await admin.auth().verifyIdToken(token)
//     req.user = user
//   } catch (err) {
//     console.log(err)
//   }
//   next()
// }

router.get('/', checkJwt, (req, res) => {
  const uid = req.user?.uid // this verifies the user and sends back the id
  // check the db and add the user
  res.json(uid)
})

module.exports = router

// const token = req.headers.authorization.split(' ')[1]
//   admin.auth().verifyIdToken(token)
//     .then(outcome => res.json(outcome))
//     .catch(e => console.log(e.message))
