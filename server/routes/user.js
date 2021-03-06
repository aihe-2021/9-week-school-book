const express = require('express')

const router = express.Router()
// const checkJwt = require('../firebaseConfig/checkJwt')
const {
  checkUserIdExists,
  checkUserNameExists,
  getUserData,
  updateUserId,
  addUser
} = require('../db/user')

router.get('/', (req, res) => {
  const { name, uid, email, picture, token } = req.user

  const userProfile = { name, authId: uid, image: picture, email }

  async function handleUser (userObj, token) {
    const userIdExists = await checkUserIdExists(userObj.authId)
    if (!userIdExists[0].n) {
      const userNameExists = await checkUserNameExists(userObj.name)
      if (userNameExists[0].n) {
        return updateUserId(userObj)
          .then(() => getUserData(userObj))
          .then(userdata => res.json(Object.assign(userdata[0], { token })))
          .catch(error => res.status(404).send(error))
      } else {
        return addUser(userObj)
          .then(() => getUserData(userObj))
          .then(userdata => res.json(Object.assign(userdata[0], { token })))
          .catch(error => res.status(404).send(error))
      }
    } else {
      return getUserData(userObj)
        .then(userdata => res.json(Object.assign(userdata[0], { token })))
        .catch(error => res.status(404).send(error))
    }
  }
  handleUser(userProfile, token)
})

module.exports = router
