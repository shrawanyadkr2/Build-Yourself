var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var userModel = require('../model/user.model')

router.get("/", function(req, res){

    res.render('register')
})


router.post("/", async function(req, res){
    let { name, email, password, age} = req.body;
let message = "Email ID already registered"
let userEmail = await userModel.findOne({email})
let username = email.split("@")[0];
    let user =  await userModel.findOne({ email});
        if (user) {
            return res.render('register',{message});
        }
    bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(password, salt, async function(err, hashedPassword){
        let usercreate = new userModel({
            username,
            name,
            email,
            password: hashedPassword,
            age
        });
        
         await usercreate.save();
            var token = jwt.sign({email: usercreate.email, userid:usercreate._id, username:usercreate.username}, 'secret')
            res.cookie("token", token)
            res.redirect(`/profile/${username}`)
        })        
    })

})

module.exports = router;
