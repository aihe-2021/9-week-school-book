const express = require('express')
const router = express.Router()
const checkJwt = require('../firebaseConfig/checkJwt')
const {
  checkUserIdExists,
  checkUserNameExists,
  getUserData,
  updateUserId,
  addUser
} = require('../db/user')

router.get('/', checkJwt, (req, res) => {
  const { name, uid, email, picture, token } = req.user

  const userProfile = { name, authId: uid, image: picture, email }
  // const {token} =

  async function handleUser (userObj) {
    const userIdExists = await checkUserIdExists(userObj.authId)
    if (!userIdExists[0]['count(`authId`)']) {
      const userNameExists = await checkUserNameExists(userObj.name)
      if (userNameExists[0]['count(`name`)']) {
        return updateUserId(userObj)
          .then(() => getUserData(userObj))
          .then(userdata => res.json(Object.assign(userdata, { token })))
          .catch(error => console.log(error))
      } else {
        return addUser(userObj)
          .then(() => getUserData(userObj))
          .then(userdata => res.json(Object.assign(userdata, { token })))
      }
    } else {
      return getUserData(userObj)
        .then(userdata => res.json(Object.assign(userdata, { token })))
    }
  }

  handleUser(userProfile)
})

module.exports = router
