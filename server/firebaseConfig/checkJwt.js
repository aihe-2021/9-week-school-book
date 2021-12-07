const { initializeApp } = require('firebase-admin/app')
const admin = require('firebase-admin')
const projectId = 'test-1c7a3'
const serviceAccount = require('./serviceAccount.json')

initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: projectId
})
// require user
// ==> check that the req.user is legit
// ==> if the user is bounced, send back a '403'
// ==> otherwise the console on the server side will blow up

const handleRoutes = (protectedRoutes) => {
  return async (req, res, next) => {
    const reqType = req.method
    const reqUrl = req.originalUrl

    // const isProtected = protectedRoutes.find(route => {
    //   const regex = new RegExp(route, 'gi')
    //   return regex.test(reqType) || regex.test(reqUrl)
    // })
    const isProtected = protectedRoutes.find(route => reqType.includes(route) || reqUrl.includes(route))
    console.log(isProtected)
    if (isProtected) {
      const hasToken = req.headers.authorization
      if (hasToken) {
        console.log(hasToken)
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

  // return checkRoutes()
}

// const checkJwt = async (req, res, next) => {
//   console.log(req)
//   const token = req.headers.authorization.split(' ')[1]
//   try {
//     const user = await admin.auth().verifyIdToken(token)
//     req.user = { ...user, token }
//   } catch (err) {
//     res.status(403).send(err)
//     // console.log(err)
//   }
//   next()
// }

module.exports = { handleRoutes }
