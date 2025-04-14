var express = require('express');
var router = express.Router();
var userModel = require('../model/user.model')
const isLoggedInUser = require('../middleware/isloggedInUser');
const jwt = require("jsonwebtoken")


router.get("/:username", isLoggedInUser,  async function (req, res) {
    

    const user = await userModel.findOne({ username: req.params.username });
    
    res.render("userEdit",{user});
});


router.post("/", async function(req, res){
    let { newname, email, newusername, } = req.body;
    let text1 = newusername.toLowerCase();
    let username = text1.replaceAll(' ', '');
    const user = await userModel.findOneAndUpdate(
        { email },
        { name: newname, username }, 
        { new: true }  
    );
    await user.save();  
    res.redirect(`/profile/${username}`)
})
module.exports = router;