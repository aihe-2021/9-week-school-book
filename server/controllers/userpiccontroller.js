const multer = require('multer')

const multerConfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'server/public/images')
  },
  filename: (req, file, callback) => {
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
