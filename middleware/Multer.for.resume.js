const multer  = require('multer')
const path = require('path');
const crypto = require('crypto');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/resumeImages')
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(12, function(err, name){
            const fn =   name.toString("hex")+"resumeImage"+path.extname(file.originalname);
                cb(null, fn)
        })
    }
  })
  
  const resumeImage = multer({ storage: storage }) 
  
  module.exports = resumeImage;