var express = require('express');
var router = express.Router();

var userModel = require('../model/user.model')

router.get("/:username", async function(req, res){
    username = req.params.username;
    let user = await userModel.findOneAndDelete({username})
    res.cookie("token", "")
    res.redirect('/');
})


module.exports = router;
