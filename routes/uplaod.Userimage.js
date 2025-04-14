var express = require('express');
var router = express.Router();
var upload = require('../middleware/multer')
const isLoggedInUser = require('../middleware/isloggedInUser');
var userModel = require('../model/user.model')


router.post("/", isLoggedInUser, upload.single('image'), async function(req, res){
    let user = await userModel.findOne({email: req.user.email})   
    user.userImage = req.file.filename;
   await user.save();    
   res.redirect(`/profile/${user.username}`)
});

module.exports = router;  