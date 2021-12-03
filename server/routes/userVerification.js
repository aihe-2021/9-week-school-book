const express = require('express')
const { initializeApp, getAuth } = require('firebase-admin/app')
// const key = require('../private-key.json')
const admin = require('firebase-admin')
const projectId = 'firebase-adminsdk-7p0j0@test-1c7a3.iam.gserviceaccount.com'
const serviceAccount = require('../firebase-config/service-account.json')

initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'test-1c7a3'
  // projectId: projectId
})

const router = express.Router()

router.get('/', (req, res) => {
  const token = req.headers.authorization.split(' ')[1]
  console.log(token)

  admin.auth().verifyIdToken(token)
    .then(res => console.log(res))
    .catch(e => console.log(e.message))

  // getAuth()
  //   .verifyIdToken(token)
  //   .then((decodedToken) => {
  //     const uid = decodedToken.uid
  //     console.log(uid)
  //     // ...
  //   })
  //   .catch((error) => {
  //     // Handle error
  //   })
})

module.exports = router
