var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var userModel = require('../model/user.model')


router.get("/", function(req, res){
    res.render("login");
})

router.post("/", async function(req, res){
  
        let user = await userModel.findOne({ email: req.body.email,});
        if (!user) {
            req.flash("message", "Invalid email or password.");
            return res.redirect("/login"); 
        } else{
        bcrypt.compare(req.body.password, user.password, function(err, result) {
            if (err) {
                console.error("Error in bcrypt comparison:", err);
                return res.status(500).send("Internal Server Error");
            }
            if (result) {

                var token = jwt.sign({email: user.email, userid:user._id, username:user.username}, 'secret')
                res.cookie("token", token)
                return res.redirect(`/profile/${user.username}`);
            }else{
            req.flash("Message", "Invalid email or password.");
            return res.redirect("/login"); 
            }
        });
    }

});

module.exports = router;