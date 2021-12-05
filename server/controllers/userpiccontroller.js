const multer = require('multer')

// what happens when a user updates lots of pics? How will you delete their old ones?

// this will work when running locally but when you deploy to heroku you will need to find a different strategy for uploading images - e.g. amazon s3, firebase bucket
const multerConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'server/public/images')
  },
  filename: (req, file, callback) => {
    // what happens if I see the filename of another user and then upload an obnoxious image with the same original name?
    // perhaps you want to make the filename on disk unique and return it as part of the api call
    callback(null, file.originalname)
  }
})

const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith('image')) {
    callback(null, true)
  } else {
    callback(new Error('Only images are allowed'))
  }
}

const upload = multer({
  storage: multerConfig,
  fileFilter: isImage
})

exports.uploadImage = upload.single('profilePic')

exports.upload = (req, res) => {
  res.status(200).json({
    success: 'Success'
  })
}
