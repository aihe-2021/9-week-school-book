const { initializeApp, getAuth } = require('firebase-admin/app')
const admin = require('firebase-admin')
const projectId = 'test-1c7a3'
const serviceAccount = require('./serviceAccount.json')

initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: projectId
})

const checkJwt = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]
  try {
    const user = await admin.auth().verifyIdToken(token)
    req.user = { ...user, token }
  } catch (err) {
    console.log(err)
  }
  next()
}

module.exports = checkJwt
