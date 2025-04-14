var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var userModel = require('../model/user.model')

router.get("/", function(req, res){
   res.render("forget_password",)
});

router.post("/", async function(req, res){
    let {name, email, newPassword} = req.body;
    let user = await userModel.findOne({ email: email, name: name });
    if (!user) {
        req.flash("error_msg", "Invalid name or email.");
        return res.redirect('/forget_password');
    }else{
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(newPassword, salt, async function(err, hashedPassword){
             await userModel.findOneAndUpdate( { email: email, name: name },{password: hashedPassword},{new:true})
            })
        })
    }
    req.flash('success_msg', 'Password update successfully! Please log in.');
    res.redirect("/login")
});

module.exports = router;