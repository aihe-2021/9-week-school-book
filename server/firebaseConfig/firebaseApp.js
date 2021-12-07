const { initializeApp } = require('firebase-admin/app')
const admin = require('firebase-admin')
const projectId = 'test-1c7a3'
const serviceAccount = require('./serviceAccount.json')

initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: projectId
})

const handleRoutes = (protectedRoutes) => {
  return async (req, res, next) => {
    const reqType = req.method
    const reqUrl = req.originalUrl

    const isProtected = protectedRoutes.find(route => reqType.includes(route) || reqUrl.includes(route))
    if (isProtected) {
      const hasToken = req.headers.authorization
      if (hasToken) {
        const token = req.headers.authorization.split(' ')[1]
        try {
          const user = await admin.auth().verifyIdToken(token)
          req.user = { ...user, token }
          next()
        } catch (err) {
          res.status(403).send(err)
        }
      } else {
        return res.status(403).send('invalid token')
      }
    } else {
      return next()
    }
  }
}

module.exports = { handleRoutes }
